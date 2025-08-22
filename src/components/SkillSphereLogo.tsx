import React from 'react';
import { Sparkles, Brain, Zap } from 'lucide-react';

interface SkillSphereLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const SkillSphereLogo: React.FC<SkillSphereLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Main icon container */}
        <div className="w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <Sparkles className="w-3/5 h-3/5 text-white" />
        </div>
        
        {/* AI indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
          <Brain className="w-2 h-2 text-white" />
        </div>
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg opacity-20 blur-sm animate-pulse"></div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent ${textSizes[size]}`}>
            SkillSphere
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
            AI-Powered Platform
          </span>
        </div>
      )}
    </div>
  );
};

export default SkillSphereLogo;