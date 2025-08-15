import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface Plan {
  type: 'hourly' | 'monthly' | 'yearly';
  name: string;
  price: number;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    type: 'hourly',
    name: 'Hourly Plan',
    price: 5,
    description: 'Perfect for short-term access to premium features.',
    features: ['Access to premium tools for 1 hour', 'Priority support', 'Basic analytics'],
  },
  {
    type: 'monthly',
    name: 'Monthly Plan',
    price: 20,
    description: 'Ideal for regular users with full access.',
    features: ['Unlimited access for 1 month', 'Priority support', 'Advanced analytics', 'Task creation'],
  },
  {
    type: 'yearly',
    name: 'Yearly Plan',
    price: 200,
    description: 'Best value for long-term commitment.',
    features: ['Unlimited access for 1 year', 'Priority support', 'Advanced analytics', 'Task creation', 'Exclusive content'],
  },
];

export default function PaymentPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { updateUser, user } = useAuth();
  const { isDarkMode } = useTheme();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = async (planType: Plan['type']) => {
    setError('');
    setIsLoading(true);
    try {
      // Mock payment process (replace with real payment gateway like Stripe in production)
      const subscription = {
        plan: planType,
        startDate: new Date().toISOString(),
        status: 'active' as const,
      };
      await updateUser!({ subscription });
      toast({
        title: 'Subscription Successful',
        description: `You have subscribed to the ${planType} plan!`,
      });
      navigate('/dashboard');
    } catch (e) {
      setError('Subscription failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
      }`}
    >
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Plan
          </h2>
          <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Select a plan that suits your needs to unlock premium features.
          </p>
        </div>
        {error && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.type}
              className={`border-0 shadow-2xl backdrop-blur-sm transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800/80 border-gray-700/50' : 'bg-white/80 border-white/20'
              }`}
            >
              <CardHeader>
                <CardTitle className={`text-xl font-semibold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  ${plan.price}/{plan.type === 'hourly' ? 'hour' : plan.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-sm text-center mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transform hover:scale-105 transition-transform"
                  onClick={() => handleSubscribe(plan.type)}
                  disabled={isLoading || (user?.subscription && user.subscription.plan === plan.type)}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : user?.subscription && user.subscription.plan === plan.type ? (
                    'Current Plan'
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}