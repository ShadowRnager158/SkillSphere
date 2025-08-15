import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { Task, Bid } from '@/types';

interface TaskContextType {
  tasks: Task[];
  userTasks: Task[];
  userBids: Bid[];
  createTask: (task: Omit<Task, 'id' | 'createdAt' | 'status' | 'bids'>) => Promise<Task>;
  updateTask: (taskId: string, updates: Partial<Task>) => Promise<Task>;
  getTaskById: (taskId: string) => Task | undefined;
  placeBid: (taskId: string, amount: number, message: string) => Promise<Bid>;
  acceptBid: (taskId: string, bidId: string) => Promise<Task>;
  completeTask: (taskId: string) => Promise<Task>;
  getTasksByCategory: (category: string) => Task[];
  getUrgentTasks: () => Task[];
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const stored = localStorage.getItem('skillsphere_tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      const sample = getSampleTasks();
      setTasks(sample);
      localStorage.setItem('skillsphere_tasks', JSON.stringify(sample));
    }
  }, []);

  const saveTasks = (updated: Task[]) => {
    setTasks(updated);
    localStorage.setItem('skillsphere_tasks', JSON.stringify(updated));
  };

  const userTasks = user ? tasks.filter(t => t.createdBy === user.id) : [];

  const userBids = user?.isSkiller
    ? tasks.flatMap(task =>
        task.bids
          .filter(bid => bid.skillerId === user.id)
          .map(bid => ({ ...bid, taskId: task.id }))
      )
    : [];

  const createTask = async (taskData: Omit<Task, 'id' | 'createdAt' | 'status' | 'bids'>) => {
    if (!user) throw new Error('You must be logged in to create a task');

    const newTask: Task = {
      id: crypto.randomUUID(),
      ...taskData,
      createdAt: new Date().toISOString(),
      status: 'open',
      bids: [],
    };

    const updated = [...tasks, newTask];
    saveTasks(updated);
    return newTask;
  };

  const updateTask = async (taskId: string, updates: Partial<Task>) => {
    const index = tasks.findIndex(t => t.id === taskId);
    if (index === -1) throw new Error('Task not found');

    const updatedTask: Task = { ...tasks[index], ...updates };
    const updatedList = [...tasks];
    updatedList[index] = updatedTask;

    saveTasks(updatedList);
    return updatedTask;
  };

  const getTaskById = (taskId: string) => tasks.find(t => t.id === taskId);

  const placeBid = async (taskId: string, amount: number, message: string) => {
    if (!user) throw new Error('You must be logged in to place a bid');
    if (!user.isSkiller) throw new Error('Only Skillers can place bids');

    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) throw new Error('Task not found');

    const task = tasks[taskIndex];
    if (task.status !== 'open') throw new Error('This task is no longer accepting bids');

    const existingBidIndex = task.bids.findIndex(b => b.skillerId === user.id);

    const newBid: Bid = {
      id: crypto.randomUUID(),
      taskId,
      skillerId: user.id,
      skillerName: user.name,
      skillerAvatar: user.avatar || '',
      amount,
      message,
      createdAt: new Date().toISOString(),
      status: 'pending', // ✅ literal type
    };

    const updatedList = [...tasks];
    if (existingBidIndex >= 0) {
      updatedList[taskIndex].bids[existingBidIndex] = newBid;
    } else {
      updatedList[taskIndex].bids.push(newBid);
    }

    saveTasks(updatedList);
    return newBid;
  };

  const acceptBid = async (taskId: string, bidId: string) => {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) throw new Error('Task not found');

    const task = tasks[taskIndex];
    const bidIndex = task.bids.findIndex(b => b.id === bidId);
    if (bidIndex === -1) throw new Error('Bid not found');

    const bid = task.bids[bidIndex];

    const updatedBids: Bid[] = task.bids.map(b => ({
      ...b,
      status: b.id === bidId ? 'accepted' : 'rejected',
    }));

    const updatedTask: Task = {
      ...task,
      status: 'assigned',
      assignedTo: bid.skillerId,
      assigneeName: bid.skillerName,
      assigneeAvatar: bid.skillerAvatar,
      bids: updatedBids,
    };

    const updatedList = [...tasks];
    updatedList[taskIndex] = updatedTask;

    saveTasks(updatedList);
    return updatedTask;
  };

  const completeTask = async (taskId: string) => {
    const index = tasks.findIndex(t => t.id === taskId);
    if (index === -1) throw new Error('Task not found');

    const updatedTask: Task = { ...tasks[index], status: 'completed' };
    const updatedList = [...tasks];
    updatedList[index] = updatedTask;

    saveTasks(updatedList);
    return updatedTask;
  };

  const getTasksByCategory = (category: string) =>
    tasks.filter(t => t.category === category && t.status === 'open');

  const getUrgentTasks = () =>
    tasks.filter(t => t.isUrgent && t.status === 'open');

  return (
    <TaskContext.Provider
      value={{
        tasks,
        userTasks,
        userBids,
        createTask,
        updateTask,
        getTaskById,
        placeBid,
        acceptBid,
        completeTask,
        getTasksByCategory,
        getUrgentTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// ✅ Clean sample data so TS is happy
function getSampleTasks(): Task[] {
  return [
    {
      id: 'task1',
      title: 'Help with moving furniture',
      description:
        'Need help moving a couch and table from first floor to second floor apartment. Looking for someone strong and careful.',
      category: 'Moving',
      budget: 50,
      location: 'Downtown',
      status: 'open',
      createdAt: '2025-07-15T15:00:00Z',
      createdBy: 'user1',
      creatorName: 'John Doe',
      creatorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john@example.com',
      isUrgent: true,
      bids: [
        {
          id: 'bid1',
          taskId: 'task1',
          skillerId: 'skiller1',
          skillerName: 'Mike Smith',
          skillerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike@example.com',
          amount: 60,
          message: 'I can help you today after 3pm. I have experience with moving heavy furniture.',
          createdAt: '2025-07-15T17:30:00Z',
          status: 'pending',
        },
      ],
    },
    {
      id: 'task2',
      title: 'Spanish conversation practice',
      description: 'Looking for a fluent Spanish speaker to practice conversation with twice a week.',
      category: 'Language',
      budget: 25,
      location: 'Online',
      status: 'open',
      createdAt: '2025-07-16T10:00:00Z',
      createdBy: 'user2',
      creatorName: 'Sarah Johnson',
      creatorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah@example.com',
      isUrgent: false,
      bids: [],
    },
  ];
}
