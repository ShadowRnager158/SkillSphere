import { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  description: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
}

interface InteractiveStatsProps {
  stats: StatItem[];
  isVisible: boolean;
}

export default function InteractiveStats({ stats, isVisible }: InteractiveStatsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animatedValues, setAnimatedValues] = useState<string[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Animate values counting up
      const timers = stats.map((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
        const suffix = stat.value.replace(/[0-9]/g, '');
        
        return setTimeout(() => {
          let current = 0;
          const increment = numericValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = Math.floor(current) + suffix;
              return newValues;
            });
          }, 50);
        }, index * 200);
      });

      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [isVisible, stats]);

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      case 'stable':
        return '→';
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      case 'stable':
        return 'text-blue-500';
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 50 
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className={`text-center transform transition-all duration-500 hover:scale-110 cursor-pointer ${
              hoveredIndex === index ? 'z-10' : ''
            }`}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5
            }}
          >
            {/* Main Stat Card */}
            <div className={`w-24 h-24 mx-auto mb-6 ${stat.bgColor} rounded-3xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
              <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center relative z-10`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
              {animatedValues[index] || stat.value}
            </div>
            
            <div className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
              {stat.label}
            </div>
            
            {/* Trend indicator */}
            <div className={`flex items-center justify-center gap-1 text-sm ${getTrendColor(stat.trend)}`}>
              <span>{getTrendIcon(stat.trend)}</span>
              <span>{stat.change}</span>
            </div>
          </motion.div>

          {/* Hover Card */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-20"
              >
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 min-w-[280px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                      <div className={`w-6 h-6 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{stat.label}</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {stat.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">This month</span>
                    <div className={`flex items-center gap-1 ${getTrendColor(stat.trend)}`}>
                      <span>{getTrendIcon(stat.trend)}</span>
                      <span className="font-medium">{stat.change}</span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}