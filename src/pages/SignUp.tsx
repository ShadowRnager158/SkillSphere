import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Bot
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { isDarkMode } = useTheme();
  const { toast } = useToast();
  const location = useLocation();
  
  // Get user type from URL query parameter
  const searchParams = new URLSearchParams(location.search);
  const defaultUserType = searchParams.get('type') === 'client' ? 'client' : 'skiller';
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: defaultUserType as 'skiller' | 'client',
    agreeToTerms: false,
    marketingEmails: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[a-z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;
      setPasswordStrength(strength);
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean | string) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'text-red-500';
    if (passwordStrength <= 3) return 'text-yellow-500';
    if (passwordStrength <= 4) return 'text-blue-500';
    return 'text-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Fair';
    if (passwordStrength <= 4) return 'Good';
    return 'Strong';
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      // Basic validation for each step
      if (currentStep === 1 && (!formData.firstName || !formData.lastName || !formData.email)) {
        toast({
          title: "Incomplete Fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
      if (currentStep === 2) {
        if (!formData.password || !formData.confirmPassword) {
          toast({
            title: "Incomplete Fields",
            description: "Please enter and confirm your password.",
            variant: "destructive",
          });
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          toast({
            title: "Passwords Don't Match",
            description: "Please make sure your passwords match.",
            variant: "destructive",
          });
          return;
        }
        if (passwordStrength < 3) {
          toast({
            title: "Weak Password",
            description: "Please choose a stronger password.",
            variant: "destructive",
          });
          return;
        }
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      await register(fullName, formData.email, formData.password, formData.userType === 'skiller');
      
      toast({
        title: "Account Created! 🎉",
        description: "Welcome to SkillSphere! Your account has been successfully created.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async (provider: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: `${provider} Signup`,
        description: `${provider} registration is being implemented.`,
      });
    } catch (error) {
      toast({
        title: "Social Signup Error",
        description: `${provider} registration is not available yet.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstName" className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-11"
                placeholder="john@example.com"
              />
            </div>
            <Button
              type="button"
              onClick={handleNext}
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transform hover:scale-105 transition-transform"
            >
              Next <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant={formData.userType === 'skiller' ? 'default' : 'outline'}
                onClick={() => handleCheckboxChange('userType', 'skiller')}
                className="h-auto py-3 flex flex-col items-center gap-2"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">I'm a Skiller</span>
                <span className="text-xs text-gray-500">Find work</span>
              </Button>
              <Button
                type="button"
                variant={formData.userType === 'client' ? 'default' : 'outline'}
                onClick={() => handleCheckboxChange('userType', 'client')}
                className="h-auto py-3 flex flex-col items-center gap-2"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">I'm a Client</span>
                <span className="text-xs text-gray-500">Hire talent</span>
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-11 pr-10"
                  placeholder="Create a strong password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Strength:</span>
                    <span className={`text-xs font-medium ${getPasswordStrengthColor()}`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
                          level <= passwordStrength
                            ? passwordStrength <= 2
                              ? 'bg-red-500'
                              : passwordStrength <= 3
                              ? 'bg-yellow-500'
                              : passwordStrength <= 4
                              ? 'bg-blue-500'
                              : 'bg-green-500'
                            : isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="h-11 pr-10"
                  placeholder="Confirm your password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {formData.confirmPassword && (
                <div className="flex items-center gap-2 mt-2">
                  {formData.password === formData.confirmPassword ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-xs ${
                    formData.password === formData.confirmPassword ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formData.password === formData.confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                  </span>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                className="w-1/2 h-11"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="w-1/2 h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transform hover:scale-105 transition-transform"
              >
                Next <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-slide-in-right">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked as boolean)}
                  required
                />
                <Label htmlFor="agreeToTerms" className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="text-blue-600 hover:text-blue-500 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-500 font-medium">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="marketingEmails"
                  checked={formData.marketingEmails}
                  onCheckedChange={(checked) => handleCheckboxChange('marketingEmails', checked as boolean)}
                />
                <Label htmlFor="marketingEmails" className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Send me updates about new features and opportunities (optional)
                </Label>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                className="w-1/2 h-11"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !formData.agreeToTerms}
                onClick={handleSubmit}
                className="w-1/2 h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium transform hover:scale-105 transition-transform"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  <>
                    <span>Create account</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
    }`}>
      <style>
        {`
          @keyframes slideInRight {
            from { transform: translateX(20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-right {
            animation: slideInRight 0.3s ease-out;
          }
        `}
      </style>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-105 transition-transform">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Create account
          </h2>
          <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Join SkillSphere and start your journey
          </p>
        </div>
        <Card className={`border-0 shadow-2xl backdrop-blur-sm transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800/80 border-gray-700/50' 
            : 'bg-white/80 border-white/20'
        }`}>
          <CardHeader className="space-y-1">
            <CardTitle className={`text-xl font-semibold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Step {currentStep} of {totalSteps}
            </CardTitle>
            <Progress value={(currentStep / totalSteps) * 100} className="w-full h-2 mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderStep()}
            </form>
            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`px-2 text-xs font-medium ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-11 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform"
                onClick={() => handleSocialSignup('Google')}
                disabled={isLoading}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-11 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform"
                onClick={() => handleSocialSignup('GitHub')}
                disabled={isLoading}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-10 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform"
                onClick={() => handleSocialSignup('Twitter')}
                disabled={isLoading}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-10 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform"
                onClick={() => handleSocialSignup('LinkedIn')}
                disabled={isLoading}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-10 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform"
                onClick={() => handleSocialSignup('Facebook')}
                disabled={isLoading}
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-center pt-4">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}