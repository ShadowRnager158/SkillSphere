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
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // Load tasks from localStorage on initial load
    const storedTasks = localStorage.getItem('skillsphere_tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      // Initialize with some sample data if none exists
      const sampleTasks = getSampleTasks();
      setTasks(sampleTasks);
      localStorage.setItem('skillsphere_tasks', JSON.stringify(sampleTasks));
    }
  }, []);

  // Filter tasks created by the current user
  const userTasks = user ? tasks.filter(task => task.createdBy === user.id) : [];
  
  // Filter bids placed by the current user (if they are a Skiller)
  const userBids = user?.isSkiller 
    ? tasks.flatMap(task => 
        task.bids.filter(bid => bid.skillerId === user.id)
          .map(bid => ({ ...bid, taskId: task.id }))
      )
    : [];

  const saveTasks = (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    localStorage.setItem('skillsphere_tasks', JSON.stringify(updatedTasks));
  };

  const createTask = async (taskData: Omit<Task, 'id' | 'createdAt' | 'status' | 'bids'>) => {
    if (!user) throw new Error('You must be logged in to create a task');
    
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...taskData,
      createdAt: new Date().toISOString(),
      status: 'open',
      bids: [],
      creatorName: user.name,
      creatorAvatar: user.avatar
    };
    
    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);
    return newTask;
  };

  const updateTask = async (taskId: string, updates: Partial<Task>) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) throw new Error('Task not found');
    
    const updatedTask = { ...tasks[taskIndex], ...updates };
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = updatedTask;
    
    saveTasks(updatedTasks);
    return updatedTask;
  };

  const getTaskById = (taskId: string) => {
    return tasks.find(task => task.id === taskId);
  };

  const placeBid = async (taskId: string, amount: number, message: string) => {
    if (!user) throw new Error('You must be logged in to place a bid');
    if (!user.isSkiller) throw new Error('Only Skillers can place bids');
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) throw new Error('Task not found');
    
    const task = tasks[taskIndex];
    if (task.status !== 'open') throw new Error('This task is no longer accepting bids');
    
    // Check if user already placed a bid
    const existingBidIndex = task.bids.findIndex(bid => bid.skillerId === user.id);
    
    const newBid: Bid = {
      id: crypto.randomUUID(),
      taskId,
      skillerId: user.id,
      skillerName: user.name,
      skillerAvatar: user.avatar,
      amount,
      message,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    
    const updatedTasks = [...tasks];
    
    if (existingBidIndex >= 0) {
      // Update existing bid
      updatedTasks[taskIndex].bids[existingBidIndex] = newBid;
    } else {
      // Add new bid
      updatedTasks[taskIndex].bids.push(newBid);
    }
    
    saveTasks(updatedTasks);
    return newBid;
  };

  const acceptBid = async (taskId: string, bidId: string) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) throw new Error('Task not found');
    
    const task = tasks[taskIndex];
    const bidIndex = task.bids.findIndex(bid => bid.id === bidId);
    if (bidIndex === -1) throw new Error('Bid not found');
    
    const bid = task.bids[bidIndex];
    
    // Update bid status
    const updatedBids = task.bids.map(b => ({
      ...b,
      status: b.id === bidId ? 'accepted' : 'rejected'
    }));
    
    // Update task status and assign to Skiller
    const updatedTask: Task = {
      ...task,
      status: 'assigned',
      assignedTo: bid.skillerId,
      assigneeName: bid.skillerName,
      assigneeAvatar: bid.skillerAvatar,
      bids: updatedBids
    };
    
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = updatedTask;
    
    saveTasks(updatedTasks);
    return updatedTask;
  };

  const completeTask = async (taskId: string) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) throw new Error('Task not found');
    
    const updatedTask: Task = {
      ...tasks[taskIndex],
      status: 'completed'
    };
    
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = updatedTask;
    
    saveTasks(updatedTasks);
    return updatedTask;
  };

  const getTasksByCategory = (category: string) => {
    return tasks.filter(task => 
      task.category === category && 
      task.status === 'open'
    );
  };

  const getUrgentTasks = () => {
    return tasks.filter(task => 
      task.isUrgent && 
      task.status === 'open'
    );
  };

  return (
    <TaskContext.Provider value={{
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
      getUrgentTasks
    }}>
      {children}
    </TaskContext.Provider>
  );
};

// Sample data generator function
function getSampleTasks(): Task[] {
  return [
    {
      id: "task1",
      title: "Help with moving furniture",
      description: "Need help moving a couch and table from first floor to second floor apartment",
      category: "Moving",
      budget: 50,
      location: "Downtown",
      status: "open",
      createdAt: "2025-07-15T15:00:00Z",
      createdBy: "user1",
      creatorName: "John Doe",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john@example.com",
      isUrgent: true,
      bids: [
        {
          id: "bid1",
          taskId: "task1",
          skillerId: "skiller1",
          skillerName: "Mike Smith",
          skillerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike@example.com",
          amount: 60,
          message: "I can help you today after 3pm. I have experience with moving heavy furniture.",
          createdAt: "2025-07-15T17:30:00Z",
          status: "pending"
        }
      ]
    },
    {
      id: "task2",
      title: "Spanish conversation practice",
      description: "Looking for a fluent Spanish speaker to practice conversation with twice a week",
      category: "Language",
      budget: 25,
      location: "Online",
      status: "open",
      createdAt: "2025-07-16T10:15:00Z",
      createdBy: "user2",
      creatorName: "Sarah Johnson",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah@example.com",
      isUrgent: false,
      bids: []
    },
    {
      id: "task3",
      title: "Fix leaking kitchen faucet",
      description: "The kitchen faucet has been leaking for a few days and needs repair",
      category: "Plumbing",
      budget: 75,
      location: "Westside",
      status: "assigned",
      createdAt: "2025-07-14T09:20:00Z",
      createdBy: "user3",
      creatorName: "Emily Chen",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily@example.com",
      assignedTo: "skiller2",
      assigneeName: "David Wilson",
      assigneeAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david@example.com",
      isUrgent: false,
      bids: [
        {
          id: "bid2",
          taskId: "task3",
          skillerId: "skiller2",
          skillerName: "David Wilson",
          skillerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david@example.com",
          amount: 80,
          message: "I'm a certified plumber with 5 years of experience. I can fix this easily.",
          createdAt: "2025-07-14T10:45:00Z",
          status: "accepted"
        }
      ]
    }
  ];
}