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
import { 
  ArrowLeft, 
  Plus, 
  Briefcase, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Clock, 
  AlertTriangle,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Server,
  Shield,
  Brain,
  Rocket,
  Sparkles,
  CheckCircle,
  Upload,
  FileText,
  Image,
  Video,
  Link as LinkIcon,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { value: 'web-development', label: 'Web Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { value: 'mobile-development', label: 'Mobile Development', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
  { value: 'ui-ux-design', label: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
  { value: 'data-science', label: 'Data Science', icon: Database, color: 'from-orange-500 to-red-500' },
  { value: 'devops-cloud', label: 'DevOps & Cloud', icon: Cloud, color: 'from-indigo-500 to-purple-500' },
  { value: 'cybersecurity', label: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
  { value: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, color: 'from-yellow-500 to-orange-500' },
  { value: 'blockchain', label: 'Blockchain', icon: Server, color: 'from-green-600 to-teal-600' },
  { value: 'game-development', label: 'Game Development', icon: Rocket, color: 'from-purple-600 to-indigo-600' },
  { value: 'consulting', label: 'Consulting', icon: Briefcase, color: 'from-gray-500 to-slate-500' },
  { value: 'other', label: 'Other', icon: Sparkles, color: 'from-pink-500 to-rose-500' }
];

const BUDGET_RANGES = [
  { value: '0-1000', label: '$0 - $1,000', description: 'Small projects' },
  { value: '1000-5000', label: '$1,000 - $5,000', description: 'Medium projects' },
  { value: '5000-15000', label: '$5,000 - $15,000', description: 'Large projects' },
  { value: '15000-50000', label: '$15,000 - $50,000', description: 'Enterprise projects' },
  { value: '50000+', label: '$50,000+', description: 'Major projects' }
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
  const [budgetRange, setBudgetRange] = useState('');
  const [location, setLocation] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
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
    
    // Enhanced validation
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
    
    if (!budget && !budgetRange) {
      setError('Please enter a budget or select a budget range');
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
        budget: Number(budget) || 0,
        budgetRange: budgetRange || undefined,
        location: location.trim(),
        dueDate: dueDate || undefined,
        isUrgent,
        skills,
        attachments,
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

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)} 
              className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Plus className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Post a New Task
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Describe what you need help with and connect with skilled professionals who can bring your vision to life.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Task Details
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill in the details below to create your task
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-900/20">
                      <ExclamationTriangleIcon className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  {/* Basic Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                      Basic Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="text-gray-700 dark:text-gray-300 font-medium">
                          Task Title *
                        </Label>
                        <Input 
                          id="title" 
                          placeholder="What do you need help with?" 
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          maxLength={100}
                          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
                          {title.length}/100
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="description" className="text-gray-700 dark:text-gray-300 font-medium">
                          Description *
                        </Label>
                        <Textarea 
                          id="description" 
                          placeholder="Provide detailed information about your task, requirements, timeline, and any specific qualifications needed..." 
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={6}
                          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Be specific about what you need, when you need it, and any requirements or qualifications.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category and Budget */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                      Category & Budget
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="category" className="text-gray-700 dark:text-gray-300 font-medium">
                          Category *
                        </Label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger id="category" className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            {CATEGORIES.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${cat.color} flex items-center justify-center`}>
                                    <cat.icon className="w-3 h-3 text-white" />
                                  </div>
                                  <span>{cat.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="budget" className="text-gray-700 dark:text-gray-300 font-medium">
                          Budget (USD) *
                        </Label>
                        <Input 
                          id="budget" 
                          type="number" 
                          placeholder="Enter your budget" 
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          min="1"
                          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                        />
                      </div>
                    </div>

                    {/* Budget Range Alternative */}
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">
                        Or select a budget range
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                        {BUDGET_RANGES.map((range) => (
                          <button
                            key={range.value}
                            type="button"
                            onClick={() => {
                              setBudgetRange(budgetRange === range.value ? '' : range.value);
                              if (budgetRange !== range.value) setBudget('');
                            }}
                            className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                              budgetRange === range.value
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <div className="font-medium">{range.label}</div>
                            <div className="text-sm opacity-75">{range.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Location and Timeline */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      Location & Timeline
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="location" className="text-gray-700 dark:text-gray-300 font-medium">
                          Location *
                        </Label>
                        <Input 
                          id="location" 
                          placeholder="Where should this task be done?" 
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Enter "Remote" for online tasks or specific city/location
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="dueDate" className="text-gray-700 dark:text-gray-300 font-medium">
                          Due Date
                        </Label>
                        <Input 
                          id="dueDate" 
                          type="date" 
                          value={dueDate}
                          onChange={(e) => setDueDate(e.target.value)}
                          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills Required */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-orange-600" />
                      Skills Required
                    </h3>
                    
                    <div>
                      <Label htmlFor="skills" className="text-gray-700 dark:text-gray-300 font-medium">
                        Required Skills
                      </Label>
                      <div className="mt-2 flex space-x-2">
                        <Input 
                          id="skills" 
                          placeholder="Add a skill (e.g., React, Python, UI/UX)" 
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                          className="flex-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                        />
                        <Button 
                          type="button" 
                          onClick={addSkill}
                          variant="outline"
                          className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          Add
                        </Button>
                      </div>
                      
                      {skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                            >
                              <span>{skill}</span>
                              <button
                                type="button"
                                onClick={() => removeSkill(skill)}
                                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-100"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Attachments */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <Upload className="w-5 h-5 mr-2 text-indigo-600" />
                      Attachments (Optional)
                    </h3>
                    
                    <div>
                      <Label htmlFor="attachments" className="text-gray-700 dark:text-gray-300 font-medium">
                        Upload Files
                      </Label>
                      <div className="mt-2">
                        <Input 
                          id="attachments" 
                          type="file" 
                          multiple
                          onChange={handleFileUpload}
                          className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Upload relevant files, images, or documents (max 10MB each)
                        </p>
                      </div>
                      
                      {attachments.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {attachments.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                            >
                              <div className="flex items-center space-x-2">
                                <FileText className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{file.name}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeAttachment(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Options */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-gray-600" />
                      Additional Options
                    </h3>
                    
                    <div className="flex items-center space-x-3">
                      <Switch 
                        id="urgent" 
                        checked={isUrgent}
                        onCheckedChange={setIsUrgent}
                      />
                      <Label htmlFor="urgent" className="text-gray-700 dark:text-gray-300">
                        This task is urgent
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" 
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Creating Task...
                        </>
                      ) : (
                        <>
                          <Plus className="w-5 h-5 mr-2" />
                          Post Task
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}