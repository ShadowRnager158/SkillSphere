import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  CreditCard, 
  Lock, 
  CheckCircle, 
  Shield, 
  Clock,
  DollarSign,
  Calendar,
  MapPin,
  Mail,
  Phone,
  User,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  RefreshCw,
  Bookmark,
  Share2,
  Download,
  Archive,
  Tag,
  Filter3,
  Sliders,
  Settings,
  Bell,
  Building,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Zap,
  Rocket,
  Brain,
  Sparkles,
  Eye,
  EyeOff,
  X,
  Home,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Folder,
  File,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface PaymentItem {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'subscription' | 'one-time' | 'service';
  duration?: string;
  features: string[];
  popular?: boolean;
  discount?: number;
}

export default function PaymentPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PaymentItem | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const paymentItems: PaymentItem[] = [
    {
      id: 'pro-subscription',
      title: 'Pro Subscription',
      description: 'Unlock all premium features and unlimited access',
      price: 29,
      type: 'subscription',
      duration: 'month',
      features: [
        'Unlimited projects',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise-plan',
      title: 'Enterprise Plan',
      description: 'Complete solution for large organizations',
      price: 99,
      type: 'subscription',
      duration: 'month',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom branding',
        'Advanced security',
        'SLA guarantee',
        'On-premise option'
      ]
    },
    {
      id: 'consultation',
      title: 'Expert Consultation',
      description: '1-hour session with our industry experts',
      price: 150,
      type: 'service',
      features: [
        'Personalized advice',
        'Strategy planning',
        'Technical review',
        'Implementation guidance',
        'Follow-up support'
      ]
    },
    {
      id: 'workshop',
      title: 'Team Workshop',
      description: 'Full-day training session for your team',
      price: 500,
      type: 'service',
      features: [
        'Custom curriculum',
        'Hands-on training',
        'Best practices',
        'Q&A session',
        'Training materials'
      ]
    },
    {
      id: 'custom-integration',
      title: 'Custom Integration',
      description: 'Tailored integration for your specific needs',
      price: 2500,
      type: 'one-time',
      features: [
        'Requirements analysis',
        'Custom development',
        'Testing & deployment',
        'Documentation',
        '3 months support'
      ]
    },
    {
      id: 'premium-support',
      title: 'Premium Support',
      description: '24/7 priority support with dedicated manager',
      price: 199,
      type: 'subscription',
      duration: 'month',
      features: [
        '24/7 phone support',
        'Dedicated manager',
        'Response time < 2 hours',
        'Escalation support',
        'Monthly reviews'
      ]
    }
  ];

  const handleSelectItem = (item: PaymentItem) => {
    setSelectedItem(item);
    setShowPayment(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowPayment(false);
      setSelectedItem(null);
      // Navigate to success page or show success message
      navigate('/dashboard');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan for your needs and unlock powerful features
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paymentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  item.popular ? 'ring-2 ring-blue-500' : ''
                }`}>
                  <CardContent className="p-6">
                    {item.popular && (
                      <Badge className="mb-4 bg-blue-600 text-white">
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {item.description}
                      </p>
                      
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          ${item.price}
                        </span>
                        {item.duration && (
                          <span className="text-gray-600 dark:text-gray-400">/{item.duration}</span>
                        )}
                      </div>
                      
                      {item.discount && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {item.discount}% OFF
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full"
                      onClick={() => handleSelectItem(item)}
                    >
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPayment && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-gray-900 dark:text-white">
                      Complete Purchase
                    </CardTitle>
                    <CardDescription>
                      {selectedItem.title} - ${selectedItem.price}
                      {selectedItem.duration && `/${selectedItem.duration}`}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPayment(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Payment Method Selection */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                      Payment Method
                    </Label>
                    <div className="space-y-2">
                      <div
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === 'card'
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-900 dark:text-white">Credit/Debit Card</span>
                      </div>
                      <div
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === 'paypal'
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setPaymentMethod('paypal')}
                      >
                        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        <span className="text-gray-900 dark:text-white">PayPal</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Card Number
                        </Label>
                        <div className="relative mt-1">
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Expiry Date
                          </Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            CVV
                          </Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Cardholder Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* Order Summary */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                        <span className="text-gray-900 dark:text-white">${selectedItem.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Tax</span>
                        <span className="text-gray-900 dark:text-white">$0.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Processing Fee</span>
                        <span className="text-gray-900 dark:text-white">$0.00</span>
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                        <div className="flex justify-between font-semibold">
                          <span className="text-gray-900 dark:text-white">Total</span>
                          <span className="text-gray-900 dark:text-white">${selectedItem.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Your payment is secured with SSL encryption</span>
                  </div>

                  {/* Payment Button */}
                  <Button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Lock className="w-5 h-5" />
                        Pay ${selectedItem.price} Securely
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}