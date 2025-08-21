import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, User, Calendar, GraduationCap, MapPin, Phone, Briefcase, Edit, Save, X, Camera, Award, Star, Globe, Mail, Shield, Zap, BarChart3, CheckCircle, DollarSign, Clock, TrendingUp, Users, Heart, Eye, Lock, Unlock, Settings, Palette, Moon, Sun, Monitor, Plus, AtSign, FileText, Bell, LayoutGrid, List, Github, Linkedin 
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function ProfilePage() {
  const { user, logout, updateUser } = useAuth() || {};
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: user?.name || 'John Doe',
    username: user?.username || 'johndoe',
    headline: user?.headline || 'Full Stack Developer & UI/UX Designer',
    dob: user?.dob || '1990-05-15',
    education: user?.education || 'Bachelor of Computer Science',
    gender: user?.gender || 'Male',
    skills: user?.skills || ['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX Design'],
    bio: user?.bio || 'Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and cloud technologies. Always eager to learn new technologies and solve complex problems.',
    location: user?.location || 'San Francisco, CA',
    phone: user?.phone || '+1 (555) 123-4567',
    avatar: user?.avatar || '',
    avatarFile: null as File | null,
    resume: user?.resume || '',
    resumeFile: null as File | null,
    stats: user?.stats || {
      projectsCompleted: 47,
      totalEarnings: 125000,
      clientRating: 4.9,
      responseTime: '< 2 hours',
      skillsVerified: 12,
      portfolioItems: 8
    },
    isPublic: user?.isPublic || true,
    socialLinks: user?.socialLinks || { linkedin: 'linkedin.com/in/johndoe', github: 'github.com/johndoe' }
  });
  const [localUser, setLocalUser] = useState(user);
  const [skillInput, setSkillInput] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(formData.avatar);
  const [resumePreview, setResumePreview] = useState(formData.resume);
  const [portfolioForm, setPortfolioForm] = useState({ title: '', description: '', category: '', tags: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  // Notifications state
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Profile Updated', time: '2 hours ago', read: false },
    { id: 2, message: 'New Skill Added', time: '1 day ago', read: false },
    { id: 3, message: 'Portfolio Updated', time: '3 days ago', read: false },
  ]);

  // Portfolio state
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [portfolioSort, setPortfolioSort] = useState('date-desc');
  const [portfolioView, setPortfolioView] = useState('grid');
  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, title: 'E-commerce Website', description: 'Modern responsive design with payment integration', category: 'Web Development', tags: ['React', 'Node.js'], date: '2023-06-15' },
    { id: 2, title: 'Mobile App Design', description: 'UI/UX design for fitness tracking application', category: 'UI/UX', tags: ['Figma', 'UI/UX'], date: '2023-08-20' },
  ]);

  // Predefined skills
  const availableSkills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 
    'UI/UX Design', 'Machine Learning', 'Data Analysis', 'Cloud Computing', 'DevOps'
  ];

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        username: user.username || '',
        headline: user.headline || '',
        dob: user.dob || '',
        education: user.education || '',
        gender: user.gender || '',
        skills: user.skills || [],
        bio: user.bio || '',
        location: user.location || '',
        phone: user.phone || '',
        avatar: user.avatar || '',
        avatarFile: null,
        resume: user.resume || '',
        resumeFile: null,
        stats: user.stats || {
          projectsCompleted: 0,
          totalEarnings: 0,
          clientRating: 0,
          responseTime: '',
          skillsVerified: user.skills?.length || 0,
          portfolioItems: 0
        },
        isPublic: user.isPublic || false,
        socialLinks: user.socialLinks || { linkedin: '', github: '' }
      });
      setAvatarPreview(user.avatar || 'https://via.placeholder.com/100');
      setResumePreview(user.resume || '');
      setLocalUser(user);
    }
  }, [user]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    else if (!/^[a-zA-Z0-9_]{3,20}$/.test(formData.username)) newErrors.username = 'Username must be 3-20 characters, alphanumeric or underscore';
    if (formData.phone && !/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number format';
    if (formData.socialLinks.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.socialLinks.linkedin)) {
      newErrors.linkedin = 'Invalid LinkedIn URL';
    }
    if (formData.socialLinks.github && !/^https?:\/\/(www\.)?github\.com\/.*$/.test(formData.socialLinks.github)) {
      newErrors.github = 'Invalid GitHub URL';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSocialLinkChange = (platform: 'linkedin' | 'github', value: string) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value }
    }));
    setErrors((prev) => ({ ...prev, [platform]: '' }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
        stats: {
          ...prev.stats,
          skillsVerified: prev.stats.skillsVerified + 1
        }
      }));
      setSkillInput('');
      setNotifications((prev) => [
        ...prev,
        { id: Date.now(), message: `New Skill Added: ${skillInput}`, time: 'Just now', read: false }
      ]);
      toast({
        title: 'Skill Added',
        description: `Added ${skillInput} to your skills.`,
      });
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
      stats: {
        ...prev.stats,
        skillsVerified: prev.stats.skillsVerified - 1
      }
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
      setFormData((prev) => ({
        ...prev,
        avatarFile: file,
      }));
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setResumePreview(previewUrl);
      setFormData((prev) => ({
        ...prev,
        resumeFile: file,
        resume: previewUrl,
      }));
      setNotifications((prev) => [
        ...prev,
        { id: Date.now(), message: 'Resume Uploaded', time: 'Just now', read: false }
      ]);
      toast({
        title: 'Resume Uploaded',
        description: 'Your resume has been successfully uploaded.',
      });
    }
  };

  const handlePortfolioAdd = () => {
    if (!portfolioForm.title || !portfolioForm.description || !portfolioForm.category) {
      toast({
        title: 'Error',
        description: 'Please fill in all required portfolio fields.',
        variant: 'destructive',
      });
      return;
    }
    setPortfolioItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: portfolioForm.title,
        description: portfolioForm.description,
        category: portfolioForm.category,
        tags: portfolioForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        date: new Date().toISOString().split('T')[0]
      }
    ]);
    setFormData((prev) => ({
      ...prev,
      stats: { ...prev.stats, portfolioItems: prev.stats.portfolioItems + 1 }
    }));
    setPortfolioForm({ title: '', description: '', category: '', tags: '' });
    setIsPortfolioModalOpen(false);
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message: `New Portfolio Item Added: ${portfolioForm.title}`, time: 'Just now', read: false }
    ]);
    toast({
      title: 'Portfolio Updated',
      description: 'New portfolio item added successfully.',
    });
  };

  const handleSave = async () => {
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form before saving.',
        variant: 'destructive',
      });
      return;
    }
    try {
      const saveData = { ...formData };
      if (formData.avatarFile) saveData.avatar = avatarPreview;
      if (formData.resumeFile) saveData.resume = resumePreview;
      delete saveData.avatarFile;
      delete saveData.resumeFile;

      if (updateUser) {
        await updateUser(saveData);
      } else {
        setLocalUser((prev) => ({
          ...prev,
          ...saveData,
        }));
      }
      setIsEditing(false);
      setNotifications((prev) => [
        ...prev,
        { id: Date.now(), message: 'Profile Updated', time: 'Just now', read: false }
      ]);
      toast({
        title: 'Profile Updated',
        description: 'Your changes have been saved successfully.',
      });
    } catch (error) {
      console.error('Failed to update profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to save changes. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleFreshStart = () => {
    setFormData((prev) => ({
      ...prev,
      stats: {
        projectsCompleted: 0,
        totalEarnings: 0,
        clientRating: 0,
        responseTime: '',
        skillsVerified: prev.skills.length,
        portfolioItems: 0
      }
    }));
    setPortfolioItems([]);
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message: 'Fresh Start Applied', time: 'Just now', read: false }
    ]);
    toast({
      title: 'Fresh Start Applied',
      description: 'Your profile stats and portfolio have been reset.',
    });
  };

  const handleMarkNotificationRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      setFormData({
        name: user?.name || localUser?.name || '',
        username: user?.username || localUser?.username || '',
        headline: user?.headline || localUser?.headline || '',
        dob: user?.dob || localUser?.dob || '',
        education: user?.education || localUser?.education || '',
        gender: user?.gender || localUser?.gender || '',
        skills: user?.skills || localUser?.skills || [],
        bio: user?.bio || localUser?.bio || '',
        location: user?.location || localUser?.location || '',
        phone: user?.phone || localUser?.phone || '',
        avatar: user?.avatar || localUser?.avatar || '',
        avatarFile: null,
        resume: user?.resume || localUser?.resume || '',
        resumeFile: null,
        stats: user?.stats || localUser?.stats || {
          projectsCompleted: 0,
          totalEarnings: 0,
          clientRating: 0,
          responseTime: '',
          skillsVerified: 0,
          portfolioItems: 0
        },
        isPublic: user?.isPublic || localUser?.isPublic || false,
        socialLinks: user?.socialLinks || localUser?.socialLinks || { linkedin: '', github: '' }
      });
      setAvatarPreview(user?.avatar || localUser?.avatar || 'https://via.placeholder.com/100');
      setResumePreview(user?.resume || localUser?.resume || '');
      setSkillInput('');
      setErrors({});
    }
  };

  const displayUser = updateUser ? user : localUser;

  if (!user) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Profile Access Required</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Please log in to view and edit your profile</p>
          <Button onClick={() => navigate('/login')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  const fields = ['name', 'username', 'headline', 'dob', 'education', 'gender', 'skills', 'bio', 'location', 'phone', 'avatar', 'resume', 'socialLinks'];
  const completedFields = fields.filter(field => {
    if (field === 'skills') return displayUser?.skills?.length > 0;
    if (field === 'socialLinks') return !!(displayUser?.socialLinks?.linkedin || displayUser?.socialLinks?.github);
    return !!displayUser?.[field];
  }).length;
  const completionPercentage = (completedFields / fields.length) * 100;

  const filteredPortfolioItems = portfolioItems
    .filter((item) => portfolioFilter === 'all' || item.category === portfolioFilter)
    .sort((a, b) => {
      if (portfolioSort === 'date-desc') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (portfolioSort === 'date-asc') return new Date(a.date).getTime() - new Date(b.date).getTime();
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-6xl mx-auto shadow-2xl border-0 dark:bg-gray-800 overflow-hidden">
          <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800">
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-end gap-4 md:gap-6">
                <div className="relative">
                  <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-4 border-white dark:border-gray-700 shadow-2xl">
                    <AvatarImage src={isEditing ? avatarPreview : displayUser?.avatar || 'https://via.placeholder.com/100'} alt={displayUser?.name || 'Profile'} />
                    <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                      {displayUser?.name?.[0] || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-2 right-2 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-blue-600 dark:border-blue-500"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </Button>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>
                <div className="flex-1 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{displayUser?.name || 'Complete Your Profile'}</h1>
                    {displayUser?.isSkiller && (
                      <Badge className="bg-white/20 dark:bg-gray-700/50 text-white border-white/30 dark:border-gray-600">
                        <Star className="w-3 h-3 mr-1" />
                        Skiller
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl text-blue-100 dark:text-blue-200 mb-4">{displayUser?.headline || 'Add a professional headline to stand out'}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-blue-200 dark:text-blue-300">@{displayUser?.username || 'username'}</span>
                    <Badge variant="outline" className="bg-white/10 dark:bg-gray-700/30 text-white border-white/30 dark:border-gray-600">
                      <Users className="w-3 h-3 mr-1" />
                      {displayUser?.userType === 'skiller' ? 'Talent' : 'Client'}
                    </Badge>
                    <Badge variant="outline" className="bg-white/10 dark:bg-gray-700/30 text-white border-white/30 dark:border-gray-600">
                      {displayUser?.isPublic ? <Unlock className="w-3 h-3 mr-1" /> : <Lock className="w-3 h-3 mr-1" />}
                      {displayUser?.isPublic ? 'Public' : 'Private'}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{displayUser?.location || 'Add location'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{displayUser?.email || 'No email'}</span>
                    </div>
                    {(displayUser?.socialLinks?.linkedin || displayUser?.socialLinks?.github) && (
                      <div className="flex items-center gap-2">
                        {displayUser?.socialLinks?.linkedin && (
                          <a href={displayUser.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {displayUser?.socialLinks?.github && (
                          <a href={displayUser.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {isEditing ? (
                    <>
                      <Button 
                        onClick={handleSave}
                        className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-lg"
                        disabled={Object.keys(errors).length > 0}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={toggleEdit}
                        className="border-white/30 dark:border-gray-600 text-white hover:bg-white/10 dark:hover:bg-gray-600/20"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={toggleEdit}
                      className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-lg z-10"
                      disabled={false}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 px-4 sm:px-6 md:px-8 py-4 border-b dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Profile Completion</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete your profile to get more opportunities</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{Math.round(completionPercentage)}%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete</p>
              </div>
            </div>
            <Progress value={completionPercentage} className="mt-3 h-2" />
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b dark:border-gray-700">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formData.stats.projectsCompleted}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">${formData.stats.totalEarnings}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Earnings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formData.stats.clientRating}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formData.stats.responseTime || 'N/A'}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Response</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formData.stats.skillsVerified}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Skills</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formData.stats.portfolioItems}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Portfolio</p>
              </div>
            </div>
            {isEditing && (
              <Button 
                variant="outline" 
                className="mt-4 w-full dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700"
                onClick={handleFreshStart}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Reset Stats (Fresh Start)
              </Button>
            )}
          </div>

          <CardContent className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2 space-y-6">
                {isEditing ? (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="headline" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4" />
                        Professional Headline
                      </Label>
                      <Input
                        id="headline"
                        name="headline"
                        value={formData.headline}
                        onChange={handleInputChange}
                        className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                        placeholder="e.g., Experienced Full-Stack Developer"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                          <User className="w-4 h-4" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                          placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="username" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                          <AtSign className="w-4 h-4" />
                          Username
                        </Label>
                        <Input
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                          placeholder="Enter your username"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">This will be your unique identifier</p>
                        {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dob" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        Date of Birth
                      </Label>
                      <Input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="education" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4" />
                          Education Level
                        </Label>
                        <Select
                          name="education"
                          value={formData.education}
                          onValueChange={(value) => handleSelectChange('education', value)}
                        >
                          <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl">
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="associate-degree">Associate Degree</SelectItem>
                            <SelectItem value="bachelors-degree">Bachelor's Degree</SelectItem>
                            <SelectItem value="masters-degree">Master's Degree</SelectItem>
                            <SelectItem value="doctorate">Doctorate</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="gender" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                          <User className="w-4 h-4" />
                          Gender
                        </Label>
                        <Select
                          name="gender"
                          value={formData.gender}
                          onValueChange={(value) => handleSelectChange('gender', value)}
                        >
                          <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="skills" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4" />
                        Skills
                      </Label>
                      <div className="flex items-center gap-2 mb-3">
                        <Input
                          id="skills"
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          placeholder="Type a skill..."
                          className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                        />
                        <Select
                          value={skillInput}
                          onValueChange={setSkillInput}
                        >
                          <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl w-[200px]">
                            <SelectValue placeholder="Select a skill..." />
                          </SelectTrigger>
                          <SelectContent>
                            {availableSkills.map((skill) => (
                              <SelectItem key={skill} value={skill}>
                                {skill}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button
                          type="button"
                          onClick={handleSkillAdd}
                          disabled={!skillInput.trim()}
                          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-xl px-6"
                        >
                          Add
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800/50"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => handleSkillRemove(skill)}
                              className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="resume" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4" />
                        Resume
                      </Label>
                      <div className="flex items-center gap-2 mb-3">
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          ref={resumeInputRef}
                          onChange={handleResumeChange}
                          className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                        />
                      </div>
                      {resumePreview && (
                        <a href={resumePreview} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          View Uploaded Resume
                        </a>
                      )}
                    </div>

                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4" />
                        Social Media Links
                      </Label>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="linkedin" className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2 mb-1">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </Label>
                          <Input
                            id="linkedin"
                            name="linkedin"
                            value={formData.socialLinks.linkedin}
                            onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                            className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                            placeholder="https://www.linkedin.com/in/username"
                          />
                          {errors.linkedin && <p className="text-sm text-red-500 mt-1">{errors.linkedin}</p>}
                        </div>
                        <div>
                          <Label htmlFor="github" className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2 mb-1">
                            <Github className="w-4 h-4" />
                            GitHub
                          </Label>
                          <Input
                            id="github"
                            name="github"
                            value={formData.socialLinks.github}
                            onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                            className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                            placeholder="https://github.com/username"
                          />
                          {errors.github && <p className="text-sm text-red-500 mt-1">{errors.github}</p>}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4" />
                        Profile Visibility
                      </Label>
                      <Select
                        value={formData.isPublic ? 'public' : 'private'}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, isPublic: value === 'public' }))}
                      >
                        <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl">
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bio" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" />
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl min-h-[100px]"
                        placeholder="Tell us about yourself, your experience, and what makes you unique..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4" />
                          Location
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                          placeholder="Enter your city/country"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 rounded-xl"
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</p>
                          <p className="text-gray-900 dark:text-gray-100">{displayUser?.name || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</p>
                          <p className="text-gray-900 dark:text-gray-100">
                            {displayUser?.dob ? new Date(displayUser.dob).toLocaleDateString() : 'Not set'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Education</p>
                          <p className="text-gray-900 dark:text-gray-100">{displayUser?.education || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/20 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</p>
                          <p className="text-gray-900 dark:text-gray-100">{displayUser?.gender || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                          <p className="text-gray-900 dark:text-gray-100">{displayUser?.location || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                          <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</p>
                          <p className="text-gray-900 dark:text-gray-100">{displayUser?.phone || 'Not set'}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Social Media</h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {displayUser?.socialLinks?.linkedin ? (
                          <a href={displayUser.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                          </a>
                        ) : (
                          <p className="text-gray-500 dark:text-gray-400">No LinkedIn profile added</p>
                        )}
                        {displayUser?.socialLinks?.github ? (
                          <a href={displayUser.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                            <Github className="w-5 h-5" />
                            GitHub
                          </a>
                        ) : (
                          <p className="text-gray-500 dark:text-gray-400">No GitHub profile added</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Resume</h3>
                      </div>
                      {displayUser?.resume ? (
                        <a href={displayUser.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          View Resume
                        </a>
                      ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                          <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
                          <p>No resume uploaded yet</p>
                          <p className="text-sm">Upload your resume to showcase your experience</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Skills & Expertise</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {displayUser?.skills?.length > 0 ? (
                          displayUser.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-800 dark:hover:to-indigo-800 transition-all duration-200">
                              <Star className="w-3 h-3 mr-1" />
                              {skill}
                            </Badge>
                          ))
                        ) : (
                          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                            <Zap className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
                            <p>No skills added yet</p>
                            <p className="text-sm">Add your skills to attract more clients</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Portfolio & Work</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 mb-4">
                        <Select value={portfolioFilter} onValueChange={setPortfolioFilter}>
                          <SelectTrigger className="w-full sm:w-auto dark:border-gray-600 dark:text-gray-100">
                            <SelectValue placeholder="Filter by category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="ui-ux">UI/UX</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={portfolioSort} onValueChange={setPortfolioSort}>
                          <SelectTrigger className="w-full sm:w-auto dark:border-gray-600 dark:text-gray-100">
                            <SelectValue placeholder="Sort by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="date-desc">Newest First</SelectItem>
                            <SelectItem value="date-asc">Oldest First</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex gap-2">
                          <Button
                            variant={portfolioView === 'grid' ? 'default' : 'outline'}
                            size="icon"
                            onClick={() => setPortfolioView('grid')}
                            className="dark:border-gray-600 dark:text-gray-100"
                          >
                            <LayoutGrid className="w-4 h-4" />
                          </Button>
                          <Button
                            variant={portfolioView === 'list' ? 'default' : 'outline'}
                            size="icon"
                            onClick={() => setPortfolioView('list')}
                            className="dark:border-gray-600 dark:text-gray-100"
                          >
                            <List className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className={portfolioView === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
                        {filteredPortfolioItems.map((item) => (
                          <div key={item.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md dark:hover:shadow-gray-700 transition-shadow">
                            <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg mb-3 flex items-center justify-center">
                              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                            <div className="flex items-center gap-2">
                              {item.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-100">{tag}</Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Dialog open={isPortfolioModalOpen} onOpenChange={setIsPortfolioModalOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="mt-3 w-full dark:border-gray-600 dark:text-gray-100">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Portfolio Item
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] dark:bg-gray-800">
                          <DialogHeader>
                            <DialogTitle className="dark:text-gray-100">Add Portfolio Item</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="portfolio-title">Title</Label>
                              <Input
                                id="portfolio-title"
                                value={portfolioForm.title}
                                onChange={(e) => setPortfolioForm((prev) => ({ ...prev, title: e.target.value }))}
                                placeholder="Enter project title"
                                className="dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                            <div>
                              <Label htmlFor="portfolio-description">Description</Label>
                              <Textarea
                                id="portfolio-description"
                                value={portfolioForm.description}
                                onChange={(e) => setPortfolioForm((prev) => ({ ...prev, description: e.target.value }))}
                                placeholder="Describe your project"
                                className="dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                            <div>
                              <Label htmlFor="portfolio-category">Category</Label>
                              <Select
                                value={portfolioForm.category}
                                onValueChange={(value) => setPortfolioForm((prev) => ({ ...prev, category: value }))}
                              >
                                <SelectTrigger className="dark:border-gray-600 dark:text-gray-100">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="web-development">Web Development</SelectItem>
                                  <SelectItem value="ui-ux">UI/UX</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="portfolio-tags">Tags (comma-separated)</Label>
                              <Input
                                id="portfolio-tags"
                                value={portfolioForm.tags}
                                onChange={(e) => setPortfolioForm((prev) => ({ ...prev, tags: e.target.value }))}
                                placeholder="e.g., React, Node.js"
                                className="dark:border-gray-600 dark:text-gray-100"
                              />
                            </div>
                            <Button onClick={handlePortfolioAdd} className="w-full">
                              Add Item
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Bio</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {displayUser?.bio || 'No bio added yet. Tell us about yourself to help clients understand your expertise and experience.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Account Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Type</p>
                        <p className="text-gray-900 dark:text-gray-100">
                          {displayUser?.isSkiller ? 'Skiller' : 'Client'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Member Since</p>
                        <p className="text-gray-900 dark:text-gray-100">
                          {displayUser?.createdAt ? new Date(displayUser.createdAt).toLocaleDateString() : 'Not set'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                        <p className="text-gray-900 dark:text-gray-100">{displayUser?.email || 'Not set'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Profile Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{Math.round(completionPercentage)}%</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Profile Complete</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">{displayUser?.skills?.length || 0}</div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Skills</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">{completedFields}</div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Fields</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Notifications
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleMarkAllNotificationsRead}
                        className="text-sm text-blue-600 dark:text-blue-400"
                      >
                        Mark all as read
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${notification.read ? 'opacity-50' : ''}`}
                      >
                        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{notification.message}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkNotificationRead(notification.id)}
                          >
                            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => navigate('/dashboard')}
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Go to Dashboard
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="w-full"
                    onClick={logout}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}