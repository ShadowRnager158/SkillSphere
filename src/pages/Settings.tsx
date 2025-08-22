import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Shield, 
  Bell, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Save, 
  X,
  Smartphone,
  Globe,
  CreditCard,
  Key,
  AlertTriangle,
  CheckCircle,
  Settings as SettingsIcon,
  Palette,
  Moon,
  Sun,
  Languages,
  Volume2,
  VolumeX,
  Edit,
  Download,
  Trash2,
  Monitor,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  RefreshCw,
  Zap,
  Rocket,
  Brain,
  Sparkles,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  Building,
  GraduationCap,
  Code,
  Database,
  Cloud,
  Smartphone as SmartphoneIcon,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  ChevronDown,
  ChevronUp,
  Unlock,
  LogOut,
  Home,
  MessageSquare,
  Image,
  Video,
  Music,
  Archive,
  Folder,
  File,
  BarChart3,
  PieChart,
  Activity,
  Timer,
  CheckSquare,
  Square,
  HelpCircle,
  Info,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  EyeOff as EyeOffIcon,
  Trash2 as Trash2Icon,
  Save as SaveIcon,
  Upload,
  Copy,
  Link as LinkIcon,
  Heart,
  MessageCircle,
  Send,
  Smile,
  Frown,
  Meh,
  MapPin,
  Calendar,
  Star,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Lightbulb,
  Coffee,
  Beer,
  Gift,
  Target as TargetIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Sparkles as SparklesIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Timer as TimerIcon,
  CheckSquare as CheckSquareIcon,
  Square as SquareIcon,
  ExternalLink as ExternalLinkIcon,
  Copy as CopyIcon,
  Link as LinkIcon,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
  BookOpen,
  Award,
  Target,
  Bookmark,
  Share2,
  MoreHorizontal,
  CheckCircle as CheckCircleIcon,
  Circle,
  ArrowRight as ArrowRightIcon,
  Gift as GiftIcon,
  Coffee as CoffeeIcon,
  Beer as BeerIcon,
  Trophy,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Target as TargetIcon2,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Sparkles as SparklesIcon2
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Phone } from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function SettingsPage() {
  const { user, updateUser } = useAuth();
  const { theme, isDarkMode, setTheme } = useTheme();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState({
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    language: 'en',
    timezone: 'UTC',
    currency: 'USD',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
    company: user?.company || '',
    position: user?.position || '',
    website: user?.website || ''
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    projectUpdates: true,
    messages: true,
    marketing: false,
    weeklyDigest: true,
    assessmentReminders: true,
    newOpportunities: true,
    paymentNotifications: true,
    securityAlerts: true,
    systemUpdates: false,
    newsletter: false,
    partnerOffers: false
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
    showOnlineStatus: true,
    showLastSeen: false,
    allowProfileViews: true,
    showSkills: true,
    showProjects: true,
    showEarnings: false,
    showAssessments: true,
    showCertifications: true,
    allowSearchIndexing: true
  });
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: 30,
    passwordExpiry: 90,
    suspiciousActivity: true,
    deviceManagement: true,
    loginHistory: true,
    passwordStrength: 'strong',
    biometricAuth: false,
    trustedDevices: []
  });
  const [preferences, setPreferences] = useState({
    theme: theme,
    fontSize: 'medium',
    lineHeight: 'normal',
    reducedMotion: false,
    highContrast: false,
    autoSave: true,
    emailDigest: 'weekly',
    timeFormat: '12h',
    dateFormat: 'MM/DD/YYYY',
    currency: 'USD',
    language: 'en',
    timezone: 'UTC'
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: User, description: 'Basic account information and profile settings' },
    { id: 'security', label: 'Security', icon: Shield, description: 'Password, 2FA, and security preferences' },
    { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Communication and alert preferences' },
    { id: 'privacy', label: 'Privacy', icon: Lock, description: 'Profile visibility and data sharing' },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon, description: 'Language, theme, and display settings' },
    { id: 'integrations', label: 'Integrations', icon: Zap, description: 'Third-party app connections' },
    { id: 'billing', label: 'Billing', icon: CreditCard, description: 'Payment methods and subscription' }
  ];

  const languages = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'es', label: 'Español', flag: '🇪🇸' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
    { value: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { value: 'it', label: 'Italiano', flag: '🇮🇹' },
    { value: 'pt', label: 'Português', flag: '🇵🇹' },
    { value: 'ru', label: 'Русский', flag: '🇷🇺' },
    { value: 'zh', label: '中文', flag: '🇨🇳' },
    { value: 'ja', label: '日本語', flag: '🇯🇵' },
    { value: 'ko', label: '한국어', flag: '🇰🇷' }
  ];

  const timezones = [
    { value: 'UTC', label: 'UTC (Coordinated Universal Time)' },
    { value: 'EST', label: 'EST (Eastern Standard Time)' },
    { value: 'PST', label: 'PST (Pacific Standard Time)' },
    { value: 'GMT', label: 'GMT (Greenwich Mean Time)' },
    { value: 'CET', label: 'CET (Central European Time)' },
    { value: 'JST', label: 'JST (Japan Standard Time)' },
    { value: 'IST', label: 'IST (India Standard Time)' },
    { value: 'AEST', label: 'AEST (Australian Eastern Standard Time)' }
  ];

  const currencies = [
    { value: 'USD', label: 'USD - US Dollar', symbol: '$' },
    { value: 'EUR', label: 'EUR - Euro', symbol: '€' },
    { value: 'GBP', label: 'GBP - British Pound', symbol: '£' },
    { value: 'JPY', label: 'JPY - Japanese Yen', symbol: '¥' },
    { value: 'CAD', label: 'CAD - Canadian Dollar', symbol: 'C$' },
    { value: 'AUD', label: 'AUD - Australian Dollar', symbol: 'A$' },
    { value: 'CHF', label: 'CHF - Swiss Franc', symbol: 'CHF' },
    { value: 'CNY', label: 'CNY - Chinese Yuan', symbol: '¥' }
  ];

  const integrations = [
    {
      id: 'github',
      name: 'GitHub',
      description: 'Connect your GitHub account to showcase repositories',
      icon: '🐙',
      connected: true,
      lastSync: '2 hours ago'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Import your professional experience and connections',
      icon: '💼',
      connected: false,
      lastSync: null
    },
    {
      id: 'google',
      name: 'Google Calendar',
      description: 'Sync your schedule and availability',
      icon: '📅',
      connected: true,
      lastSync: '1 hour ago'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Get notifications in your Slack workspace',
      icon: '💬',
      connected: false,
      lastSync: null
    }
  ];

  const billingPlans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'month',
      features: ['Basic assessments', 'Limited projects', 'Community support'],
      current: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      period: 'month',
      features: ['Unlimited assessments', 'Advanced analytics', 'Priority support', 'Custom certificates'],
      current: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'year',
      features: ['Team management', 'Advanced security', 'Dedicated support', 'Custom integrations'],
      current: false
    }
  ];

  const handleSave = () => {
    // In a real app, you would save to backend
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSecurityChange = (key: string, value: any) => {
    setSecurity(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePreferenceChange = (key: string, value: any) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case 'public': return <Globe className="w-4 h-4" />;
      case 'private': return <Lock className="w-4 h-4" />;
      case 'connections': return <Users className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getVisibilityColor = (visibility: string) => {
    switch (visibility) {
      case 'public': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'private': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'connections': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer maxWidth="7xl" className="relative text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              ⚙️ Settings & Preferences
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Account Settings
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Customize your experience, manage your privacy, and control how you interact with SkillSphere
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsEditing(!isEditing)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <Save className="w-5 h-5 mr-2" />
                {isEditing ? 'Cancel Changes' : 'Save Changes'}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Export Settings
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Settings Navigation */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="7xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Customize Your Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose from the settings categories below to personalize your account
              </p>
            </div>
          </AnimatedElement>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-6 py-3"
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'account' && (
            <div className="space-y-8">
              <LazyLoader placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <User className="w-6 h-6 text-blue-600" />
                        Profile Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Enter your last name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Enter your company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Position</Label>
                          <Input
                            id="position"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                            placeholder="Enter your job title"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="Enter your location"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            placeholder="Enter your website URL"
                          />
                        </div>
                      </div>
                      <div className="mt-6 space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={formData.bio}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          placeholder="Tell us about yourself..."
                          rows={4}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-8">
              <LazyLoader placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-green-600" />
                        Security Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Password Management</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <div className="relative">
                              <Input
                                id="currentPassword"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.currentPassword}
                                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                                placeholder="Enter current password"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                              id="newPassword"
                              type="password"
                              value={formData.newPassword}
                              onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                              placeholder="Enter new password"
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div>
                            <div className="font-medium">Two-Factor Authentication</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Add an extra layer of security to your account
                            </div>
                          </div>
                          <Switch
                            checked={security.twoFactorAuth}
                            onCheckedChange={(checked) => handleSecurityChange('twoFactorAuth', checked)}
                          />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Security Preferences</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Login Notifications</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Get notified of new login attempts
                              </div>
                            </div>
                            <Switch
                              checked={security.loginNotifications}
                              onCheckedChange={(checked) => handleSecurityChange('loginNotifications', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Suspicious Activity Alerts</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Receive alerts for unusual account activity
                              </div>
                            </div>
                            <Switch
                              checked={security.suspiciousActivity}
                              onCheckedChange={(checked) => handleSecurityChange('suspiciousActivity', checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-8">
              <LazyLoader placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Bell className="w-6 h-6 text-yellow-600" />
                        Notification Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Communication Channels</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Email Notifications</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Receive updates via email
                              </div>
                            </div>
                            <Switch
                              checked={notifications.email}
                              onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Push Notifications</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Get alerts on your device
                              </div>
                            </div>
                            <Switch
                              checked={notifications.push}
                              onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Content Types</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Project Updates</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Status changes and milestones
                              </div>
                            </div>
                            <Switch
                              checked={notifications.projectUpdates}
                              onCheckedChange={(checked) => handleNotificationChange('projectUpdates', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Messages</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                New conversations and replies
                              </div>
                            </div>
                            <Switch
                              checked={notifications.messages}
                              onCheckedChange={(checked) => handleNotificationChange('messages', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Assessment Reminders</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Test completion reminders
                              </div>
                            </div>
                            <Switch
                              checked={notifications.assessmentReminders}
                              onCheckedChange={(checked) => handleNotificationChange('assessmentReminders', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">New Opportunities</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Matching project alerts
                              </div>
                            </div>
                            <Switch
                              checked={notifications.newOpportunities}
                              onCheckedChange={(checked) => handleNotificationChange('newOpportunities', checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-8">
              <LazyLoader placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Lock className="w-6 h-6 text-purple-600" />
                        Privacy & Visibility
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Profile Visibility</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Profile Visibility</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Control who can see your profile
                              </div>
                            </div>
                            <Select
                              value={privacy.profileVisibility}
                              onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}
                            >
                              <SelectTrigger className="w-40">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="public">Public</SelectItem>
                                <SelectItem value="connections">Connections Only</SelectItem>
                                <SelectItem value="private">Private</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Information Sharing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Show Email</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Display email on profile
                              </div>
                            </div>
                            <Switch
                              checked={privacy.showEmail}
                              onCheckedChange={(checked) => handlePrivacyChange('showEmail', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Show Phone</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Display phone on profile
                              </div>
                            </div>
                            <Switch
                              checked={privacy.showPhone}
                              onCheckedChange={(checked) => handlePrivacyChange('showPhone', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Show Location</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Display location on profile
                              </div>
                            </div>
                            <Switch
                              checked={privacy.showLocation}
                              onCheckedChange={(checked) => handlePrivacyChange('showLocation', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Show Skills</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Display skills on profile
                              </div>
                            </div>
                            <Switch
                              checked={privacy.showSkills}
                              onCheckedChange={(checked) => handlePrivacyChange('showSkills', checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-8">
              <LazyLoader placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <SettingsIcon className="w-6 h-6 text-orange-600" />
                        Display & Language
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select
                            value={preferences.language}
                            onValueChange={(value) => handlePreferenceChange('language', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {languages.map((lang) => (
                                <SelectItem key={lang.value} value={lang.value}>
                                  <div className="flex items-center gap-2">
                                    <span>{lang.flag}</span>
                                    <span>{lang.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select
                            value={preferences.timezone}
                            onValueChange={(value) => handlePreferenceChange('timezone', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {timezones.map((tz) => (
                                <SelectItem key={tz.value} value={tz.value}>
                                  {tz.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currency">Currency</Label>
                          <Select
                            value={preferences.currency}
                            onValueChange={(value) => handlePreferenceChange('currency', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {currencies.map((curr) => (
                                <SelectItem key={curr.value} value={curr.value}>
                                  <div className="flex items-center gap-2">
                                    <span>{curr.symbol}</span>
                                    <span>{curr.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeFormat">Time Format</Label>
                          <Select
                            value={preferences.timeFormat}
                            onValueChange={(value) => handlePreferenceChange('timeFormat', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                              <SelectItem value="24h">24-hour</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Accessibility</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">High Contrast</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Increase color contrast
                              </div>
                            </div>
                            <Switch
                              checked={preferences.highContrast}
                              onCheckedChange={(checked) => handlePreferenceChange('highContrast', checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div>
                              <div className="font-medium">Reduced Motion</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Minimize animations
                              </div>
                            </div>
                            <Switch
                              checked={preferences.reducedMotion}
                              onCheckedChange={(checked) => handlePreferenceChange('reducedMotion', checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="space-y-8">
              <LazyLoader placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Zap className="w-6 h-6 text-yellow-600" />
                        Third-Party Integrations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {integrations.map((integration) => (
                          <div key={integration.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className="text-3xl">{integration.icon}</div>
                              <div>
                                <div className="font-medium">{integration.name}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {integration.description}
                                </div>
                                {integration.connected && (
                                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                                    Last synced: {integration.lastSync}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {integration.connected ? (
                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                  Connected
                                </Badge>
                              ) : (
                                <Badge variant="outline">Not Connected</Badge>
                              )}
                              <Button variant="outline" size="sm">
                                {integration.connected ? 'Manage' : 'Connect'}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-8">
              <LazyLoader placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <CreditCard className="w-6 h-6 text-green-600" />
                        Billing & Subscription
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {billingPlans.map((plan) => (
                          <div
                            key={plan.id}
                            className={`p-6 rounded-lg border-2 ${
                              plan.current
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700'
                            }`}
                          >
                            <div className="text-center mb-4">
                              <h3 className="text-xl font-bold">{plan.name}</h3>
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                                {plan.price}
                                {plan.period !== 'year' && <span className="text-lg">/{plan.period}</span>}
                              </div>
                            </div>
                            <ul className="space-y-2 mb-6">
                              {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full ${
                                plan.current
                                  ? 'bg-blue-600 hover:bg-blue-700'
                                  : 'bg-gray-600 hover:bg-gray-700'
                              }`}
                            >
                              {plan.current ? 'Current Plan' : 'Choose Plan'}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            </div>
          )}
        </ResponsiveContainer>
      </section>
    </div>
  );
}
