import { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const isSkiller = searchParams.get('type') === 'skiller';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState<'client' | 'skiller'>(isSkiller ? 'skiller' : 'client');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { register, loginWithGoogle } = useAuth();
  const { toast } = useToast();
  
  const navigateAfterAuth = () => {
    const lastPath = localStorage.getItem('skillsphere_last_path');
    if (lastPath && lastPath !== '/register') {
      localStorage.removeItem('skillsphere_last_path');
      navigate(lastPath);
    } else {
      navigate('/');
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!agreedToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(name, email, password, accountType === 'skiller');
      toast({
        title: 'Registration Successful',
        description: `Welcome to SkillSphere! You've registered as a ${accountType}.`,
      });
      navigateAfterAuth();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    setError('');
    try {
      const mockGoogleUser = {
        id: crypto.randomUUID(),
        name: name || 'Google User',
        email: email || 'google.user@example.com',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email || 'google.user@example.com'}`,
      };
      await loginWithGoogle(mockGoogleUser);
      toast({ title: 'Signed up with Google' });
      navigateAfterAuth();
    } catch (e) {
      setError('Google sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Join our community and start connecting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Tabs 
              defaultValue={accountType} 
              className="w-full"
              onValueChange={(value) => setAccountType(value as 'client' | 'skiller')}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="client">I need help</TabsTrigger>
                <TabsTrigger value="skiller">I want to offer skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="client" className="pt-4">
                <p className="text-sm text-gray-500 mb-4">
                  Sign up as a client to post tasks and find skilled people to help you
                </p>
              </TabsContent>
              
              <TabsContent value="skiller" className="pt-4">
                <p className="text-sm text-gray-500 mb-4">
                  Sign up as a Skiller to offer your services and find work opportunities
                </p>
              </TabsContent>
            </Tabs>
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="Confirm your password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreedToTerms}
                onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
                required
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link to="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
            <Button 
              type="button"
              variant="outline"
              className="w-full mt-2"
              onClick={handleGoogle}
              disabled={isLoading}
            >
              Continue with Google
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center text-gray-600 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}