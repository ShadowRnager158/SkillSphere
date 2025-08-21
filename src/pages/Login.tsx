import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Chrome,
  Github,
  Smartphone,
  Shield,
  Zap,
  Users,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  const socialLogins = [
    { name: 'Google', icon: Chrome, color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-800' },
    { name: 'Apple', icon: Smartphone, color: 'from-gray-900 to-black' }
  ];

  const features = [
    { icon: Shield, title: 'Secure & Private', description: 'Your data is protected with enterprise-grade security' },
    { icon: Zap, title: 'Lightning Fast', description: 'Experience blazing fast performance with our optimized platform' },
    { icon: Users, title: 'Global Community', description: 'Connect with professionals from around the world' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Card className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-400">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                
                <Button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Signing in...
                    </div>
                  ) : (
                    <span className="flex items-center gap-2">
                      Sign In
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {socialLogins.map((social, index) => (
                  <motion.button
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform" />
                  </motion.button>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Side - Features & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="max-w-lg">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Join the Future of
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Talent Marketplace
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Connect with top professionals, access cutting-edge AI tools, and build amazing projects together.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {['SJ', 'MC', 'LR', 'DK'].map((initials, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium border-2 border-white dark:border-gray-800"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Join 10,000+ professionals</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">●</span>
                  <span>99.9% uptime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}