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
  Upload, 
  User, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Briefcase, 
  Edit, 
  Save,
  X,
  Camera,
  Award,
  Star,
  Globe,
  Mail,
  Shield,
  Zap,
  BarChart3
} from 'lucide-react';
import { useState, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const { user, logout, updateUser } = useAuth() || {};
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    headline: user?.headline || '',
    dob: user?.dob || '',
    education: user?.education || '',
    gender: user?.gender || '',
    skills: user?.skills || [],
    bio: user?.bio || '',
    location: user?.location || '',
    phone: user?.phone || '',
    avatar: user?.avatar || '',
  });
  const [localUser, setLocalUser] = useState(user);
  const [skillInput, setSkillInput] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(formData.avatar);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput('');
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleAvatarChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
      setFormData((prev) => ({
        ...prev,
        avatarFile: file,
      }));
    }
  };

  const handleSave = async () => {
    try {
      const saveData = { ...formData };
      if (formData.avatarFile) {
        saveData.avatar = avatarPreview;
      }
      delete saveData.avatarFile;

      if (updateUser) {
        await updateUser(saveData);
      } else {
        setLocalUser((prev) => ({
          ...prev,
          ...saveData,
        }));
      }
      setIsEditing(false);
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

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setFormData({
        name: user?.name || localUser?.name || '',
        headline: user?.headline || localUser?.headline || '',
        dob: user?.dob || localUser?.dob || '',
        education: user?.education || localUser?.education || '',
        gender: user?.gender || localUser?.gender || '',
        skills: user?.skills || localUser?.skills || [],
        bio: user?.bio || localUser?.bio || '',
        location: user?.location || localUser?.location || '',
        phone: user?.phone || localUser?.phone || '',
        avatar: user?.avatar || localUser?.avatar || '',
      });
      setAvatarPreview(user?.avatar || localUser?.avatar || 'https://via.placeholder.com/100');
      setSkillInput('');
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
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Access Required</h2>
          <p className="text-gray-600 mb-6">Please log in to view and edit your profile</p>
          <Button onClick={() => window.location.href = '/login'} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  const fields = ['name', 'headline', 'dob', 'education', 'gender', 'skills', 'bio', 'location', 'phone', 'avatar'];
  const completedFields = fields.filter(field => {
    if (field === 'skills') return displayUser?.skills?.length > 0;
    return !!displayUser?.[field];
  }).length;
  const completionPercentage = (completedFields / fields.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <Card className="w-full max-w-6xl mx-auto shadow-2xl border-0 overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-col md:flex-row items-end gap-6">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-2xl">
                    <AvatarImage src={isEditing ? avatarPreview : displayUser?.avatar || 'https://via.placeholder.com/100'} alt={displayUser?.name || 'Profile'} />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                      {displayUser?.name?.[0] || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100 border-2 border-blue-600"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Camera className="w-5 h-5 text-blue-600" />
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
                    <h1 className="text-3xl font-bold">{displayUser?.name || 'Complete Your Profile'}</h1>
                    {displayUser?.isSkiller && (
                      <Badge className="bg-white/20 text-white border-white/30">
                        <Star className="w-3 h-3 mr-1" />
                        Skiller
                      </Badge>
                    )}
                  </div>
                  <p className="text-xl text-blue-100 mb-4">{displayUser?.headline || 'Add a professional headline to stand out'}</p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{displayUser?.location || 'Add location'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{displayUser?.email || 'No email'}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  {isEditing ? (
                    <>
                      <Button 
                        onClick={handleSave}
                        className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={toggleEdit}
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={toggleEdit}
                      className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Completion Bar */}
          <div className="bg-white px-8 py-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Profile Completion</p>
                  <p className="text-sm text-gray-600">Complete your profile to get more opportunities</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">{Math.round(completionPercentage)}%</p>
                <p className="text-sm text-gray-600">Complete</p>
              </div>
            </div>
            <Progress value={completionPercentage} className="mt-3 h-2" />
          </div>

          {/* Profile Content */}
          <CardContent className="p-8 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Profile Info */}
              <div className="lg:col-span-2 space-y-6">
                {isEditing ? (
                  <div className="space-y-6">
                    {/* Headline */}
                    <div>
                      <Label htmlFor="headline" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4" />
                        Professional Headline
                      </Label>
                      <Input
                        id="headline"
                        name="headline"
                        value={formData.headline}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl"
                        placeholder="e.g., Experienced Full-Stack Developer"
                      />
                    </div>

                    {/* Name and DOB */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                          <User className="w-4 h-4" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4" />
                          Date of Birth
                        </Label>
                        <Input
                          id="dob"
                          name="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Education and Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="education" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4" />
                          Education Level
                        </Label>
                        <Select
                          name="education"
                          value={formData.education}
                          onValueChange={(value) => handleSelectChange('education', value)}
                        >
                          <SelectTrigger className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl">
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="High School">High School</SelectItem>
                            <SelectItem value="Associate Degree">Associate Degree</SelectItem>
                            <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                            <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                            <SelectItem value="Doctorate">Doctorate</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="gender" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                          <User className="w-4 h-4" />
                          Gender
                        </Label>
                        <Select
                          name="gender"
                          value={formData.gender}
                          onValueChange={(value) => handleSelectChange('gender', value)}
                        >
                          <SelectTrigger className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                            <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <Label htmlFor="skills" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4" />
                        Skills
                      </Label>
                      <div className="flex items-center gap-2 mb-3">
                        <Input
                          id="skills"
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          placeholder="Add a skill (e.g., JavaScript)"
                          className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl"
                          onKeyPress={(e) => e.key === 'Enter' && handleSkillAdd()}
                        />
                        <Button
                          type="button"
                          onClick={handleSkillAdd}
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6"
                        >
                          Add
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => handleSkillRemove(skill)}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <Label htmlFor="bio" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" />
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl min-h-[100px]"
                        placeholder="Tell us about yourself, your experience, and what makes you unique..."
                      />
                    </div>

                    {/* Location and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4" />
                          Location
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl"
                          placeholder="Enter your city/country"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 rounded-xl"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Full Name</p>
                          <p className="text-gray-900">{displayUser?.name || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                          <p className="text-gray-900">
                            {displayUser?.dob ? new Date(displayUser.dob).toLocaleDateString() : 'Not set'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Education</p>
                          <p className="text-gray-900">{displayUser?.education || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Gender</p>
                          <p className="text-gray-900">{displayUser?.gender || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Location</p>
                          <p className="text-gray-900">{displayUser?.location || 'Not set'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                          <Phone className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Phone Number</p>
                          <p className="text-gray-900">{displayUser?.phone || 'Not set'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {displayUser?.skills?.length > 0 ? (
                          displayUser.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                              {skill}
                            </Badge>
                          ))
                        ) : (
                          <p className="text-gray-500">No skills added yet</p>
                        )}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Bio</h3>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">
                        {displayUser?.bio || 'No bio added yet. Tell us about yourself to help clients understand your expertise and experience.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Account Info */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Account Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Account Type</p>
                        <p className="text-gray-900">
                          {displayUser?.isSkiller ? 'Skiller' : 'Client'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Member Since</p>
                        <p className="text-gray-900">
                          {displayUser?.createdAt ? new Date(displayUser.createdAt).toLocaleDateString() : 'Not set'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <p className="text-gray-900">{displayUser?.email || 'Not set'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Profile Stats */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      Profile Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{Math.round(completionPercentage)}%</div>
                      <p className="text-sm text-gray-600">Profile Complete</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">{displayUser?.skills?.length || 0}</div>
                        <p className="text-xs text-gray-600">Skills</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">{completedFields}</div>
                        <p className="text-xs text-gray-600">Fields</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
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