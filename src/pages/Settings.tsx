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
  List
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Phone } from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import { LazyLoader } from '@/components/LazyLoader';
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
    bio: user?.bio || ''
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
    paymentNotifications: true
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
    showProjects: true
  });
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: 30,
    passwordExpiry: 90,
    suspiciousActivity: true
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: User, description: 'Basic account information' },
    { id: 'security', label: 'Security', icon: Shield, description: 'Password and security settings' },
    { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Communication preferences' },
    { id: 'privacy', label: 'Privacy', icon: Lock, description: 'Profile visibility and privacy' },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon, description: 'Language and display settings' }
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handlePrivacyChange = (key: string, value: string | boolean) => {
    setPrivacy(prev => ({ ...prev, [key]: value }));
  };

  const handleSecurityChange = (key: string, value: boolean | number) => {
    setSecurity(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    try {
      // Here you would typically save to backend
      toast({
        title: "Settings Saved",
        description: "Your settings have been updated successfully.",
      });
      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePasswordChange = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Here you would typically update password
      toast({
        title: "Password Updated",
        description: "Your password has been changed successfully.",
      });
      setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const exportData = () => {
    const data = {
      profile: formData,
      notifications,
      privacy,
      security
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skillsphere-settings.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Data Exported",
      description: "Your settings have been exported successfully.",
    });
  };

  const resetToDefaults = () => {
    if (confirm('Are you sure you want to reset all settings to defaults? This action cannot be undone.')) {
      // Reset to default values
      toast({
        title: "Settings Reset",
        description: "All settings have been reset to defaults.",
      });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center">
            <SettingsIcon className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Settings Access Required</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Please log in to access your account settings and preferences</p>
          <Button 
            onClick={() => window.location.href = '/login'} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
          >
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center">
              <SettingsIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Account Settings</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Manage your account preferences, security, and privacy settings
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg sticky top-8">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <div className="flex-1">
                        <div className="font-medium">{tab.label}</div>
                        <div className={`text-xs ${
                          activeTab === tab.id ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {tab.description}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                        activeTab === tab.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-gray-900 dark:text-white">
                    <User className="w-5 h-5 text-blue-600" />
                    Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300 font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300 font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-gray-700 dark:text-gray-300 font-medium">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your location"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio" className="text-gray-700 dark:text-gray-300 font-medium">Bio</Label>
                      <Input
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Tell us about yourself"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-gray-900 dark:text-white">
                    <Shield className="w-5 h-5 text-green-600" />
                    Security & Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Password Change */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currentPassword" className="text-gray-700 dark:text-gray-300 font-medium">Current Password</Label>
                        <div className="relative mt-2">
                          <Input
                            id="currentPassword"
                            name="currentPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            placeholder="Enter current password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="newPassword" className="text-gray-700 dark:text-gray-300 font-medium">New Password</Label>
                        <Input
                          id="newPassword"
                          name="newPassword"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          placeholder="Enter new password"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300 font-medium">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm new password"
                      />
                    </div>
                    <Button onClick={handlePasswordChange} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      <Key className="w-4 h-4 mr-2" />
                      Update Password
                    </Button>
                  </div>

                  <Separator />

                  {/* Two-Factor Authentication */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security to your account</p>
                      </div>
                      <Switch
                        checked={security.twoFactorAuth}
                        onCheckedChange={(checked) => handleSecurityChange('twoFactorAuth', checked)}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Security Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Preferences</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-700 dark:text-gray-300 font-medium">Login Notifications</Label>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Get notified of new login attempts</p>
                        </div>
                        <Switch
                          checked={security.loginNotifications}
                          onCheckedChange={(checked) => handleSecurityChange('loginNotifications', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-700 dark:text-gray-300 font-medium">Suspicious Activity Alerts</Label>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Receive alerts for unusual account activity</p>
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
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-gray-900 dark:text-white">
                    <Bell className="w-5 h-5 text-orange-600" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div>
                          <Label className="text-gray-700 dark:text-gray-300 font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </Label>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Receive notifications for {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </p>
                        </div>
                        <Switch
                          checked={value}
                          onCheckedChange={(checked) => handleNotificationChange(key, checked)}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-gray-900 dark:text-white">
                    <Lock className="w-5 h-5 text-purple-600" />
                    Privacy & Visibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">Profile Visibility</Label>
                      <Select value={privacy.profileVisibility} onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public - Anyone can view</SelectItem>
                          <SelectItem value="connections">Connections only</SelectItem>
                          <SelectItem value="private">Private - Only you</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Information</h3>
                    <div className="space-y-3">
                      {Object.entries(privacy).slice(1).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <div>
                            <Label className="text-gray-700 dark:text-gray-300 font-medium capitalize">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </Label>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {typeof value === 'boolean' 
                                ? `Show ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} on profile`
                                : `Control ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} visibility`
                              }
                            </p>
                          </div>
                          {typeof value === 'boolean' ? (
                            <Switch
                              checked={value}
                              onCheckedChange={(checked) => handlePrivacyChange(key, checked)}
                            />
                          ) : (
                            <Select value={value as string} onValueChange={(val) => handlePrivacyChange(key, val)}>
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="public">Public</SelectItem>
                                <SelectItem value="connections">Connections</SelectItem>
                                <SelectItem value="private">Private</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Preferences Settings */}
            {activeTab === 'preferences' && (
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-gray-900 dark:text-white">
                    <SettingsIcon className="w-5 h-5 text-indigo-600" />
                    Display & Language
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">Language</Label>
                      <Select value={formData.language} onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>
                              <span className="flex items-center gap-2">
                                <span>{lang.flag}</span>
                                <span>{lang.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">Timezone</Label>
                      <Select value={formData.timezone} onValueChange={(value) => setFormData(prev => ({ ...prev, timezone: value }))}>
                        <SelectTrigger className="mt-2">
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
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">Currency</Label>
                      <Select value={formData.currency} onValueChange={(value) => setFormData(prev => ({ ...prev, currency: value }))}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {currencies.map((curr) => (
                            <SelectItem key={curr.value} value={curr.value}>
                              <span className="flex items-center gap-2">
                                <span>{curr.symbol}</span>
                                <span>{curr.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">Theme</Label>
                      <div className="mt-2 flex gap-2">
                        <Button
                          variant={theme === 'light' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setTheme('light')}
                          className="flex-1"
                        >
                          <Sun className="w-4 h-4 mr-2" />
                          Light
                        </Button>
                        <Button
                          variant={theme === 'dark' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setTheme('dark')}
                          className="flex-1"
                        >
                          <Moon className="w-4 h-4 mr-2" />
                          Dark
                        </Button>
                        <Button
                          variant={theme === 'auto' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setTheme('auto')}
                          className="flex-1"
                        >
                          <Monitor className="w-4 h-4 mr-2" />
                          Auto
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={exportData} variant="outline" className="px-6 py-3">
            <Download className="w-4 h-4 mr-2" />
            Export Settings
          </Button>
          <Button onClick={resetToDefaults} variant="outline" className="px-6 py-3 text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
        </div>
      </div>
    </div>
  );
}
