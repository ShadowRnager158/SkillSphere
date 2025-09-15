import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { toast } from 'sonner'; // Assuming sonner is installed for toast notifications
import { useUser } from '@/contexts/UserContext'; // Import useUser to pre-fill email and name

interface FormState {
  name: string;
  email: string;
  isSubmitting: boolean;
  success: boolean;
  error: string;
}

const NewsletterForm: React.FC = () => {
  const { user } = useUser(); // Get user from context
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    isSubmitting: false,
    success: false,
    error: '',
  });

  // Pre-fill email and name if user is logged in
  useEffect(() => {
    if (user) {
      setFormState(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
      }));
    }
  }, [user]);

  const { name, email, isSubmitting, success, error } = formState;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, email: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, isSubmitting: true, error: '', success: false });

    try {
      // Adjusted the API endpoint to use the Vite proxy for the backend at port 4000
      await axios.post('/api/subscribe', { name, email });
      setFormState({
        name: '',
        email: '',
        isSubmitting: false,
        success: true,
        error: '',
      });
      toast.success('Thank you for subscribing to our newsletter!');
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setFormState({
        ...formState,
        isSubmitting: false,
        error: 'Failed to subscribe. Please try again.',
        success: false,
      });
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 p-4">
      <Card className="w-full max-w-sm rounded-lg shadow-xl bg-white dark:bg-gray-800 transition-all duration-300">
        <CardHeader className="text-center pb-6 border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">
            Subscribe to Our Newsletter!
          </CardTitle>
          <CardDescription className="text-md text-gray-600 dark:text-gray-300">
            Stay updated with the latest news from Skillspher AI.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="newsletter-name">Your Name</Label>
              <Input
                id="newsletter-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
                className="rounded-md"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="newsletter-email">Your Email</Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={handleEmailChange}
                required
                className="rounded-md"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 text-lg font-semibold rounded-md bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white shadow-md transition-transform transform hover:scale-105"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          {success && <p className="text-green-600 mt-2 text-center">Thank you for subscribing!</p>}
          {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterForm;
