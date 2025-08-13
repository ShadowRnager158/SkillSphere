import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTask } from '@/contexts/TaskContext';
import { useAuth } from '@/contexts/AuthContext';
import { useUser } from '@/contexts/UserContext';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon, InfoCircledIcon, CheckCircledIcon } from '@radix-ui/react-icons';

export default function TaskDetailPage() {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const { getTaskById, placeBid, acceptBid, completeTask } = useTask();
  const { user, isAuthenticated } = useAuth();
  const { userProfile, getSkillerById } = useUser();
  const { toast } = useToast();
  
  const [task, setTask] = useState(taskId ? getTaskById(taskId) : undefined);
  const [bidAmount, setBidAmount] = useState<number | ''>('');
  const [bidMessage, setBidMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Check if user is the task creator
  const isCreator = user?.id === task?.createdBy;
  
  // Check if user has already placed a bid
  const userBid = task?.bids.find(bid => bid.skillerId === user?.id);
  
  // Check if task is assigned to current user
  const isAssignedToUser = user?.id === task?.assignedTo;
  
  useEffect(() => {
    if (!task && taskId) {
      const fetchedTask = getTaskById(taskId);
      if (fetchedTask) {
        setTask(fetchedTask);
      } else {
        navigate('/tasks', { replace: true });
      }
    }
  }, [task, taskId, getTaskById, navigate]);

  if (!task) {
    return (
      <div className="container mx-auto py-12 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const handlePlaceBid = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    if (!user?.isSkiller) {
      toast({
        title: "Account Type Error",
        description: "Only Skillers can place bids. Switch to a Skiller account to bid.",
        variant: "destructive"
      });
      return;
    }
    
    if (!bidAmount || bidAmount <= 0) {
      setError('Please enter a valid bid amount');
      return;
    }
    
    if (!bidMessage.trim()) {
      setError('Please include a message with your bid');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      await placeBid(task.id, Number(bidAmount), bidMessage);
      
      toast({
        title: "Bid Placed Successfully",
        description: "Your bid has been submitted to the client.",
      });
      
      // Refresh task data
      const updatedTask = getTaskById(task.id);
      if (updatedTask) setTask(updatedTask);
      
      // Reset form
      setBidAmount('');
      setBidMessage('');
    } catch (err: any) {
      setError(err.message || 'Failed to place bid');
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptBid = async (bidId: string) => {
    setLoading(true);
    try {
      await acceptBid(task.id, bidId);
      
      toast({
        title: "Bid Accepted",
        description: "You've successfully assigned this task to a Skiller.",
      });
      
      // Refresh task data
      const updatedTask = getTaskById(task.id);
      if (updatedTask) setTask(updatedTask);
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to accept bid",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteTask = async () => {
    setLoading(true);
    try {
      await completeTask(task.id);
      
      toast({
        title: "Task Completed",
        description: "This task has been marked as complete.",
      });
      
      // Refresh task data
      const updatedTask = getTaskById(task.id);
      if (updatedTask) setTask(updatedTask);
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to mark task as complete",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getTaskStatusBadge = () => {
    if (task.status === 'open') {
      return <Badge className="bg-green-600">Open</Badge>;
    } else if (task.status === 'assigned') {
      return <Badge className="bg-yellow-600">In Progress</Badge>;
    } else {
      return <Badge className="bg-gray-600">Completed</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Button variant="ghost" onClick={() => navigate('/tasks')} className="mb-6">
        ← Back to Tasks
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Task Content */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{task.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    {getTaskStatusBadge()}
                    <span className="mx-2">•</span>
                    <Badge variant="outline">{task.category}</Badge>
                    <span className="mx-2">•</span>
                    {task.location}
                  </CardDescription>
                </div>
                {task.isUrgent && (
                  <Badge variant="destructive">Urgent</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="whitespace-pre-line">{task.description}</p>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={task.creatorAvatar} alt={task.creatorName} />
                    <AvatarFallback>{task.creatorName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">
                    Posted by {task.creatorName} on {formatDate(task.createdAt)}
                  </span>
                </div>
                
                <div className="text-lg font-semibold">
                  ${task.budget}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status-specific content */}
          {task.status === 'open' ? (
            <Card>
              <CardHeader>
                <CardTitle>Place a Bid</CardTitle>
                <CardDescription>
                  Provide your price and message to the client
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                {!isAuthenticated ? (
                  <div className="text-center py-4">
                    <p className="mb-4">You need to be logged in as a Skiller to place a bid</p>
                    <div className="flex justify-center gap-4">
                      <Button onClick={() => navigate('/login')}>Log in</Button>
                      <Button variant="outline" onClick={() => navigate('/register?type=skiller')}>
                        Register as a Skiller
                      </Button>
                    </div>
                  </div>
                ) : isCreator ? (
                  <Alert className="mb-4">
                    <InfoCircledIcon className="h-4 w-4" />
                    <AlertDescription>You cannot bid on your own task</AlertDescription>
                  </Alert>
                ) : !user?.isSkiller ? (
                  <Alert className="mb-4">
                    <InfoCircledIcon className="h-4 w-4" />
                    <AlertDescription>
                      Only Skillers can place bids. Update your profile to become a Skiller.
                    </AlertDescription>
                  </Alert>
                ) : userBid ? (
                  <Alert className="mb-4">
                    <CheckCircledIcon className="h-4 w-4" />
                    <AlertDescription>
                      You've already placed a bid for ${userBid.amount}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Offer</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                        <Input
                          type="number"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value ? Number(e.target.value) : '')}
                          className="pl-6"
                          placeholder="Enter your price"
                          min="1"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message to Client</label>
                      <Textarea
                        value={bidMessage}
                        onChange={(e) => setBidMessage(e.target.value)}
                        placeholder="Explain why you're the best person for this task..."
                        rows={4}
                      />
                    </div>
                    
                    <Button onClick={handlePlaceBid} disabled={loading} className="w-full">
                      {loading ? 'Submitting...' : 'Submit Bid'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : task.status === 'assigned' ? (
            <Card>
              <CardHeader>
                <CardTitle>Task in Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <InfoCircledIcon className="h-4 w-4" />
                  <AlertDescription>
                    This task has been assigned to {task.assigneeName}
                  </AlertDescription>
                </Alert>
                
                {(isCreator || isAssignedToUser) && (
                  <div className="pt-2">
                    {isCreator && (
                      <Button onClick={handleCompleteTask} disabled={loading} className="w-full">
                        {loading ? 'Processing...' : 'Mark as Complete'}
                      </Button>
                    )}
                    
                    {isAssignedToUser && !isCreator && (
                      <div className="text-center py-2">
                        <p className="text-sm text-gray-600 mb-2">
                          Please complete the task as agreed with the client
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Task Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="bg-green-50 border-green-200 text-green-800">
                  <CheckCircledIcon className="h-4 w-4 text-green-600" />
                  <AlertDescription>
                    This task has been successfully completed by {task.assigneeName}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

          {/* Bids Section - Only visible to the task creator or after task is completed */}
          {(isCreator || task.status === 'completed') && task.bids.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Bids ({task.bids.length})</CardTitle>
                <CardDescription>
                  {isCreator && task.status === 'open' ? 'Select a Skiller for your task' : 'Bids received for this task'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {task.bids.map((bid) => {
                  const skiller = getSkillerById(bid.skillerId);
                  
                  return (
                    <div 
                      key={bid.id} 
                      className={`p-4 rounded-lg border ${bid.status === 'accepted' ? 'bg-green-50 border-green-200' : 'bg-white'}`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={bid.skillerAvatar} alt={bid.skillerName} />
                            <AvatarFallback>{bid.skillerName?.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{bid.skillerName}</div>
                            <div className="text-sm text-gray-500">
                              {skiller?.rating ? `${skiller.rating} ★` : 'New Skiller'} • {formatDate(bid.createdAt)}
                            </div>
                          </div>
                        </div>
                        <div className="text-lg font-semibold">${bid.amount}</div>
                      </div>
                      <div className="mt-2">{bid.message}</div>
                      
                      {isCreator && task.status === 'open' && (
                        <div className="mt-4">
                          <Button 
                            onClick={() => handleAcceptBid(bid.id)} 
                            disabled={loading}
                            className="w-full"
                          >
                            Accept Bid
                          </Button>
                        </div>
                      )}
                      
                      {bid.status === 'accepted' && (
                        <Badge className="mt-2 bg-green-600">Selected</Badge>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${task.budget}</div>
              {task.status === 'assigned' && (
                <div className="text-sm text-gray-500 mt-1">
                  Final price: ${task.bids.find(bid => bid.status === 'accepted')?.amount || task.budget}
                </div>
              )}
            </CardContent>
          </Card>
          
          {task.status !== 'open' && task.assigneeName && (
            <Card>
              <CardHeader>
                <CardTitle>Assigned To</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={task.assigneeAvatar} alt={task.assigneeName} />
                    <AvatarFallback>{task.assigneeName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{task.assigneeName}</div>
                    {task.status === 'completed' && (
                      <div className="flex items-center text-sm text-green-600">
                        <CheckCircledIcon className="h-4 w-4 mr-1" />
                        Completed
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <Card>
            <CardHeader>
              <CardTitle>Client</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={task.creatorAvatar} alt={task.creatorName} />
                  <AvatarFallback>{task.creatorName?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{task.creatorName}</div>
                  <div className="text-sm text-gray-500">Task Poster</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}