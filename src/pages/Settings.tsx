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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Database,
  FileText,
  Activity,
  Zap,
  Clock,
  Calendar,
  MapPin,
  Building,
  Phone,
  Camera,
  QrCode,
  Fingerprint,
  Shield as ShieldIcon,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  ExternalLink,
  RefreshCw,
  History,
  Archive,
  HardDrive,
  Cloud,
  Wifi,
  WifiOff,
  Smartphone as Mobile,
  Tablet,
  Laptop,
  Monitor as Desktop,
  Tv,
  Watch,
  Headphones,
  Speaker,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Gamepad2,
  Gamepad2Off,
  BookOpen,
  BookOpenCheck,
  GraduationCap,
  Award,
  Trophy,
  Star,
  Heart,
  HeartOff,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  MessageCircle,
  Mail as Email,
  Inbox,
  Send,
  Reply,
  Forward,
  Archive as ArchiveIcon,
  Trash,
  Folder,
  FolderOpen,
  File,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileSearch,
  FileText as FileTextIcon,
  Image,
  Video as VideoIcon,
  Music,
  Film,
  Code,
  Terminal,
  Command,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  Wifi as WifiIcon,
  Bluetooth,
  BluetoothOff,
  Usb,
  HardDrive as HardDriveIcon,
  Cpu,
  MemoryStick,
  Network,
  Server,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Globe as GlobeIcon,
  Map,
  Navigation,
  Compass,
  Target,
  Crosshair,
  Flag,
  Home,
  Building2,
  Store,
  ShoppingCart,
  CreditCard as CreditCardIcon,
  Wallet,
  PiggyBank,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  Radar,
  Gauge,
  Timer,
  Stopwatch,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  AlarmClock,
  Hourglass,
  Timer as TimerIcon,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarOff,
  CalendarHeart,
  CalendarStar,
  CalendarUser,
  CalendarSearch,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarPlus2,
  CalendarMinus2,
  CalendarCheck2,
  CalendarX2,
  CalendarClock2,
  CalendarOff2,
  CalendarHeart2,
  CalendarStar2,
  CalendarUser2,
  CalendarSearch2,
  CalendarEdit2,
  CalendarTrash2,
  CalendarSettings2
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function SettingsPage() {
  const { user, updateUser } = useAuth();
  const { theme, isDarkMode, setTheme } = useTheme();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
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
    company: user?.company || '',
    position: user?.position || '',
    bio: user?.bio || '',
    website: user?.website || '',
    location: user?.location || '',
    skills: user?.skills || [],
    hourlyRate: user?.hourlyRate || 0,
    availability: user?.availability || 'available'
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    projectUpdates: true,
    messages: true,
    marketing: false,
    weeklyDigest: true,
    securityAlerts: true,
    systemUpdates: true,
    newFeatures: false,
    communityUpdates: false,
    skillAssessments: true,
    paymentNotifications: true,
    milestoneUpdates: true,
    deadlineReminders: true,
    clientFeedback: true,
    skillRecommendations: true,
    learningSuggestions: true,
    networkingOpportunities: false,
    eventInvitations: false
  });
  
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
    showOnlineStatus: true,
    showLastSeen: false,
    showSkills: true,
    showProjects: true,
    showReviews: true,
    showEarnings: false,
    showAvailability: true,
    allowSearchIndexing: true,
    showInRecommendations: true,
    allowAnalytics: true,
    allowCookies: true,
    allowThirdParty: false,
    allowDataSharing: false,
    allowMarketing: false,
    allowResearch: false
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    biometricAuth: false,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    requirePasswordChange: false,
    passwordExpiryDays: 90,
    loginNotifications: true,
    deviceManagement: true,
    apiAccess: false,
    webhookSecurity: true,
    auditLogging: true,
    dataEncryption: true,
    backupEnabled: true,
    backupFrequency: 'daily',
    backupRetention: 30
  });

  const [performance, setPerformance] = useState({
    autoSave: true,
    autoSaveInterval: 5,
    cacheEnabled: true,
    cacheSize: 100,
    compressionEnabled: true,
    lazyLoading: true,
    preloadImages: false,
    preloadVideos: false,
    backgroundSync: true,
    offlineMode: false,
    dataUsage: 'balanced',
    animationSpeed: 'normal',
    reduceMotion: false,
    highContrast: false,
    largeText: false
  });

  const [accessibility, setAccessibility] = useState({
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindMode: false,
    dyslexiaFriendly: false,
    highContrast: false,
    largeText: false,
    reduceMotion: false,
    soundEffects: true,
    voiceCommands: false,
    gestureNavigation: false,
    oneHandedMode: false,
    autoScroll: false,
    readingMode: false,
    nightMode: false
  });

  const [dataManagement, setDataManagement] = useState({
    dataRetention: 365,
    autoArchive: true,
    archiveAfter: 90,
    exportFormat: 'json',
    backupLocation: 'cloud',
    syncDevices: true,
    crossPlatformSync: true,
    dataPortability: true,
    dataDeletion: false,
    dataAnonymization: false,
    dataLocalization: false,
    dataResidency: 'global',
    complianceMode: false,
    auditTrail: true,
    dataRecovery: true
  });

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

  const handleSecurityChange = (key: string, value: string | boolean | number) => {
    setSecurity(prev => ({ ...prev, [key]: value }));
  };

  const handlePerformanceChange = (key: string, value: string | boolean | number) => {
    setPerformance(prev => ({ ...prev, [key]: value }));
  };

  const handleAccessibilityChange = (key: string, value: boolean) => {
    setAccessibility(prev => ({ ...prev, [key]: value }));
  };

  const handleDataManagementChange = (key: string, value: string | boolean | number) => {
    setDataManagement(prev => ({ ...prev, [key]: value }));
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
      });
    }
  };

  const exportData = () => {
    const data = {
      profile: formData,
      notifications,
      privacy,
      security,
      performance,
      accessibility,
      dataManagement,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `skillsphere-settings-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Data Exported",
      description: "Your settings have been exported successfully.",
    });
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        // Here you would validate and apply the imported data
        toast({
          title: "Data Imported",
          description: "Settings imported successfully. Please review and save.",
        });
      } catch (error) {
        toast({
          title: "Import Error",
          description: "Failed to import settings. Please check the file format.",
          variant: "destructive"
        });
      }
    };
    reader.readAsText(file);
  };

  const resetToDefaults = () => {
    if (confirm('Are you sure you want to reset all settings to defaults? This action cannot be undone.')) {
      // Reset all settings to defaults
      toast({
        title: "Settings Reset",
        description: "All settings have been reset to defaults.",
      });
    }
  };

  const clearAllData = () => {
    if (confirm('Are you sure you want to clear all data? This action cannot be undone and will permanently delete all your information.')) {
      // Clear all data
      toast({
        title: "Data Cleared",
        description: "All data has been cleared successfully.",
        variant: "destructive"
      });
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
            <SettingsIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings Access Required</h2>
          <p className="text-gray-600 mb-6">Please log in to access your settings</p>
          <Button onClick={() => window.location.href = '/login'} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Settings & Preferences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Customize your SkillSphere experience with advanced controls and preferences
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button onClick={exportData} variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
            <Download className="w-6 h-6" />
            <span className="text-sm">Export Data</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
            <label className="cursor-pointer flex flex-col items-center gap-2">
              <Upload className="w-6 h-6" />
              <span className="text-sm">Import Data</span>
              <input type="file" accept=".json" onChange={importData} className="hidden" />
            </label>
          </Button>
          <Button onClick={resetToDefaults} variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
            <RefreshCw className="w-6 h-6" />
            <span className="text-sm">Reset Defaults</span>
          </Button>
          <Button onClick={clearAllData} variant="destructive" className="h-auto p-4 flex flex-col items-center gap-2">
            <Trash2 className="w-6 h-6" />
            <span className="text-sm">Clear All Data</span>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-7 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Accessibility
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Data
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Tell us about yourself..."
                    className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select value={formData.language} onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="it">Italian</SelectItem>
                        <SelectItem value="pt">Portuguese</SelectItem>
                        <SelectItem value="ru">Russian</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                        <SelectItem value="ja">Japanese</SelectItem>
                        <SelectItem value="ko">Korean</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select value={formData.timezone} onValueChange={(value) => setFormData(prev => ({ ...prev, timezone: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UTC">UTC</SelectItem>
                        <SelectItem value="EST">Eastern Time</SelectItem>
                        <SelectItem value="CST">Central Time</SelectItem>
                        <SelectItem value="MST">Mountain Time</SelectItem>
                        <SelectItem value="PST">Pacific Time</SelectItem>
                        <SelectItem value="GMT">GMT</SelectItem>
                        <SelectItem value="CET">Central European Time</SelectItem>
                        <SelectItem value="JST">Japan Standard Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={formData.currency} onValueChange={(value) => setFormData(prev => ({ ...prev, currency: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="JPY">JPY (¥)</SelectItem>
                        <SelectItem value="CAD">CAD (C$)</SelectItem>
                        <SelectItem value="AUD">AUD (A$)</SelectItem>
                        <SelectItem value="CHF">CHF (CHF)</SelectItem>
                        <SelectItem value="CNY">CNY (¥)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </Label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
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
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Privacy & Visibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Profile Visibility</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Control who can see your profile</p>
                    </div>
                    <Select value={privacy.profileVisibility} onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                        <SelectItem value="network">Network Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {Object.entries(privacy).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </Label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {typeof value === 'boolean' 
                            ? `Allow ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`
                            : `Set ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`
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
                            <SelectItem value="private">Private</SelectItem>
                            <SelectItem value="friends">Friends Only</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Security & Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Two-Factor Authentication</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
                    </div>
                    <Switch
                      checked={security.twoFactorAuth}
                      onCheckedChange={(checked) => handleSecurityChange('twoFactorAuth', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Biometric Authentication</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Use fingerprint or face ID</p>
                    </div>
                    <Switch
                      checked={security.biometricAuth}
                      onCheckedChange={(checked) => handleSecurityChange('biometricAuth', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Session Timeout</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Auto-logout after inactivity</p>
                    </div>
                    <Select value={security.sessionTimeout.toString()} onValueChange={(value) => handleSecurityChange('sessionTimeout', parseInt(value))}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="0">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Login Notifications</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Get notified of new logins</p>
                    </div>
                    <Switch
                      checked={security.loginNotifications}
                      onCheckedChange={(checked) => handleSecurityChange('loginNotifications', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Device Management</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Manage active sessions</p>
                    </div>
                    <Switch
                      checked={security.deviceManagement}
                      onCheckedChange={(checked) => handleSecurityChange('deviceManagement', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Settings */}
          <TabsContent value="performance" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Performance & Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Auto-save</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Automatically save your work</p>
                    </div>
                    <Switch
                      checked={performance.autoSave}
                      onCheckedChange={(checked) => handlePerformanceChange('autoSave', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Cache Enabled</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Store data locally for faster access</p>
                    </div>
                    <Switch
                      checked={performance.cacheEnabled}
                      onCheckedChange={(checked) => handlePerformanceChange('cacheEnabled', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Animation Speed</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Control UI animation speed</p>
                    </div>
                    <Select value={performance.animationSpeed} onValueChange={(value) => handlePerformanceChange('animationSpeed', value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="slow">Slow</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="fast">Fast</SelectItem>
                        <SelectItem value="off">Off</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Reduce Motion</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Minimize animations for accessibility</p>
                    </div>
                    <Switch
                      checked={performance.reduceMotion}
                      onCheckedChange={(checked) => handlePerformanceChange('reduceMotion', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accessibility Settings */}
          <TabsContent value="accessibility" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Accessibility Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Screen Reader Support</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Enable screen reader compatibility</p>
                    </div>
                    <Switch
                      checked={accessibility.screenReader}
                      onCheckedChange={(checked) => handleAccessibilityChange('screenReader', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">High Contrast</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Increase color contrast</p>
                    </div>
                    <Switch
                      checked={accessibility.highContrast}
                      onCheckedChange={(checked) => handleAccessibilityChange('highContrast', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Large Text</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Increase text size</p>
                    </div>
                    <Switch
                      checked={accessibility.largeText}
                      onCheckedChange={(checked) => handleAccessibilityChange('largeText', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Keyboard Navigation</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Navigate using keyboard only</p>
                    </div>
                    <Switch
                      checked={accessibility.keyboardNavigation}
                      onCheckedChange={(checked) => handleAccessibilityChange('keyboardNavigation', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Management Settings */}
          <TabsContent value="data" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data & Storage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Data Retention</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">How long to keep your data</p>
                    </div>
                    <Select value={dataManagement.dataRetention.toString()} onValueChange={(value) => handleDataManagementChange('dataRetention', parseInt(value))}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="0">Forever</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Auto-archive</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Automatically archive old data</p>
                    </div>
                    <Switch
                      checked={dataManagement.autoArchive}
                      onCheckedChange={(checked) => handleDataManagementChange('autoArchive', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Cross-platform Sync</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Sync data across devices</p>
                    </div>
                    <Switch
                      checked={dataManagement.crossPlatformSync}
                      onCheckedChange={(checked) => handleDataManagementChange('crossPlatformSync', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Data Portability</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Export your data anytime</p>
                    </div>
                    <Switch
                      checked={dataManagement.dataPortability}
                      onCheckedChange={(checked) => handleDataManagementChange('dataPortability', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <Button onClick={handleSave} size="lg" className="px-8 py-3">
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
