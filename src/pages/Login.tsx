import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Prefill last used credentials if available
    const lastEmail = localStorage.getItem('skillsphere_last_email') || '';
    const lastPassword = localStorage.getItem('skillsphere_last_password') || '';
    if (lastEmail) setEmail(lastEmail);
    if (lastPassword) setPassword(lastPassword);
  }, []);
  
  const navigateAfterAuth = () => {
    const lastPath = localStorage.getItem('skillsphere_last_path');
    if (lastPath && lastPath !== '/login') {
      localStorage.removeItem('skillsphere_last_path');
      navigate(lastPath);
    } else {
      navigate('/');
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      toast({
        title: 'Login Successful',
        description: 'Welcome back to SkillSphere!',
      });
      navigateAfterAuth();
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    setError('');
    try {
      // In production, replace with real Google Identity callback data
      const mockGoogleUser = {
        id: crypto.randomUUID(),
        name: 'Google User',
        email: email || 'google.user@example.com',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email || 'google.user@example.com'}`,
      };
      await loginWithGoogle(mockGoogleUser);
      toast({ title: 'Signed in with Google' });
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
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="text-xs text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
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
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}