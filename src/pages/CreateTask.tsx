import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTask } from '@/contexts/TaskContext';
import { useAuth } from '@/contexts/AuthContext';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

const CATEGORIES = [
  'Moving',
  'Home Repair',
  'Tutoring',
  'Technology',
  'Cleaning',
  'Gardening',
  'Language',
  'Plumbing',
  'Electrical',
  'Cooking',
  'Pet Care',
  'Event Help',
  'Administrative',
  'Design',
  'Photography',
  'Music',
  'Auto Repair',
  'Personal Assistance',
  'Other'
];

export default function CreateTaskPage() {
  const navigate = useNavigate();
  const { createTask } = useTask();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState<string>('');
  const [location, setLocation] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login', { state: { redirect: '/create-task' } });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!title.trim()) {
      setError('Please enter a task title');
      return;
    }
    
    if (!description.trim()) {
      setError('Please enter a task description');
      return;
    }
    
    if (!category) {
      setError('Please select a category');
      return;
    }
    
    if (!budget || Number(budget) <= 0) {
      setError('Please enter a valid budget');
      return;
    }
    
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }
    
    setLoading(true);
    
    try {
      const createdTask = await createTask({
        title: title.trim(),
        description: description.trim(),
        category,
        budget: Number(budget),
        location: location.trim(),
        dueDate: dueDate || undefined,
        isUrgent,
        createdBy: user!.id,
        creatorName: user!.name,
        creatorAvatar: user!.avatar,
      });
      
      toast({
        title: "Task Created Successfully",
        description: "Your task is now live for Skillers to bid on.",
      });
      
      navigate(`/tasks/${createdTask.id}`);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Failed to create task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        ← Back
      </Button>
      
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Post a New Task</CardTitle>
            <CardDescription>
              Enter the details of what you need help with
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="title">Task Title</Label>
                <Input 
                  id="title" 
                  placeholder="What do you need help with?" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={100}
                />
                <p className="text-xs text-gray-500 text-right">
                  {title.length}/100
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Provide details about the task..." 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                />
                <p className="text-xs text-gray-500">
                  Be specific about what you need, when you need it, and any requirements or qualifications.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget ($)</Label>
                  <Input 
                    id="budget" 
                    type="number" 
                    placeholder="Enter your budget" 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    min="1"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    placeholder="Where should this task be done?" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Enter "Online" for remote tasks
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date (Optional)</Label>
                  <Input 
                    id="dueDate" 
                    type="date" 
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="urgent" 
                  checked={isUrgent}
                  onCheckedChange={setIsUrgent}
                />
                <Label htmlFor="urgent">This task is urgent</Label>
              </div>
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Posting...' : 'Post Task'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}