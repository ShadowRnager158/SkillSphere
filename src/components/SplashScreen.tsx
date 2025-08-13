import { useEffect, useState } from 'react';
import { Sparkles, Zap, Brain, Rocket } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 24);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="relative">
            {/* Animated Circle */}
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
                <Brain className="w-16 h-16 text-white animate-pulse" />
              </div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute -bottom-4 -left-4">
              <Zap className="w-8 h-8 text-blue-400 animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
              <Rocket className="w-6 h-6 text-purple-400 animate-bounce" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Skill
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Sphere
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-200 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Where Talent Meets Opportunity
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-8">
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-blue-200 mt-2">Loading... {progress}%</p>
        </div>

        {/* Loading Text */}
        <div className="text-blue-200 text-lg animate-pulse">
          Preparing your experience...
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}


