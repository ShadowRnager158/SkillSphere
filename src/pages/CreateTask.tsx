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

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

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
      <ResponsiveContainer maxWidth="4xl" className="py-8 px-4">
        <AnimatedElement animation="fade-in">
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
                Describe your project requirements and find the perfect specialist to bring your vision to life.
              </p>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <AnimatedElement animation="slide-up" className="mb-6">
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </AnimatedElement>
          )}

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <AnimatedElement animation="slide-up" delay={0.1}>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>
                    Provide the essential details about your project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base font-semibold">Task Title *</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Build a modern e-commerce website"
                      className="h-12 text-lg border-2 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base font-semibold">Description *</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      rows={6}
                      className="text-base border-2 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Category & Budget */}
            <ResponsiveGrid cols={{ sm: 1, md: 2 }} gap={6}>
              <AnimatedElement animation="slide-up" delay={0.2}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-green-600" />
                      Category *
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="h-12 border-2 focus:border-green-500 dark:focus:border-green-400">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded bg-gradient-to-r ${cat.color}`}></div>
                              {cat.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay={0.3}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                      Budget *
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm">Exact Amount (Optional)</Label>
                      <Input
                        id="budget"
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="e.g., 5000"
                        className="h-10 border-2 focus:border-purple-500 dark:focus:border-purple-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm">Or Select Range</Label>
                      <Select value={budgetRange} onValueChange={setBudgetRange}>
                        <SelectTrigger className="h-10 border-2 focus:border-purple-500 dark:focus:border-purple-400">
                          <SelectValue placeholder="Choose budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {BUDGET_RANGES.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              <div className="flex flex-col">
                                <span className="font-medium">{range.label}</span>
                                <span className="text-sm text-gray-500">{range.description}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </ResponsiveGrid>

            {/* Location & Timeline */}
            <ResponsiveGrid cols={{ sm: 1, md: 2 }} gap={6}>
              <AnimatedElement animation="slide-up" delay={0.4}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      Location *
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., Remote, New York, London"
                      className="h-12 text-lg border-2 focus:border-orange-500 dark:focus:border-orange-400"
                    />
                  </CardContent>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay={0.5}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-red-600" />
                      Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="dueDate" className="text-sm">Due Date (Optional)</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="h-10 border-2 focus:border-red-500 dark:focus:border-red-400"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Switch
                        id="urgent"
                        checked={isUrgent}
                        onCheckedChange={setIsUrgent}
                      />
                      <Label htmlFor="urgent" className="text-sm font-medium">
                        Mark as Urgent
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </ResponsiveGrid>

            {/* Required Skills */}
            <AnimatedElement animation="slide-up" delay={0.6}>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-indigo-600" />
                    Required Skills
                  </CardTitle>
                  <CardDescription>
                    Add the key skills and technologies needed for this project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      placeholder="e.g., React, Node.js, AWS"
                      className="flex-1 border-2 focus:border-indigo-500 dark:focus:border-indigo-400"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    />
                    <Button 
                      type="button" 
                      onClick={addSkill}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                  
                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full"
                        >
                          <span className="text-sm font-medium">{skill}</span>
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Attachments */}
            <AnimatedElement animation="slide-up" delay={0.7}>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-teal-600" />
                    Attachments
                  </CardTitle>
                  <CardDescription>
                    Upload relevant files, images, or documents to help specialists understand your project better
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-colors duration-200">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <Label htmlFor="attachments" className="cursor-pointer">
                      <span className="text-teal-600 hover:text-teal-700 font-medium">Click to upload</span>
                      <span className="text-gray-500 dark:text-gray-400"> or drag and drop</span>
                    </Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      PDF, DOC, images up to 10MB
                    </p>
                    <Input
                      id="attachments"
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                  
                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Uploaded Files:</Label>
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{file.name}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAttachment(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Submit Button */}
            <AnimatedElement animation="slide-up" delay={0.8}>
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating Task...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-5 h-5 mr-2" />
                      Post Task & Find Specialists
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Your task will be reviewed and published within 24 hours
                </p>
              </div>
            </AnimatedElement>
          </form>
        </AnimatedElement>
      </ResponsiveContainer>
    </div>
  );
}