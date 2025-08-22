import React, { useState, useEffect, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Grid, 
  List, 
  Smartphone, 
  Tablet, 
  Monitor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ResponsiveDesignProps {
  children: ReactNode;
  className?: string;
}

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

interface ResponsiveFlexProps {
  children: ReactNode;
  className?: string;
  direction?: {
    sm?: 'row' | 'col';
    md?: 'row' | 'col';
    lg?: 'row' | 'col';
    xl?: 'row' | 'col';
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

interface ResponsiveTextProps {
  children: ReactNode;
  className?: string;
  size?: {
    sm?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    md?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    lg?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    xl?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  };
  weight?: {
    sm?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    md?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    lg?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    xl?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  };
}

interface ResponsiveSpacingProps {
  children: ReactNode;
  className?: string;
  padding?: {
    sm?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    md?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    lg?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    xl?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  };
  margin?: {
    sm?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    md?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    lg?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    xl?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  };
}

interface ResponsiveHiddenProps {
  children: ReactNode;
  className?: string;
  hide?: {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    '2xl'?: boolean;
  };
  show?: {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    '2xl'?: boolean;
  };
}

interface ResponsiveMenuProps {
  children: ReactNode;
  className?: string;
  trigger?: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

// Responsive Container
export function ResponsiveContainer({ 
  children, 
  className = '', 
  maxWidth = '7xl',
  padding = 'md' 
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  const paddingClasses = {
    none: '',
    sm: 'px-2 sm:px-4',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  };

  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Grid
export function ResponsiveGrid({ 
  children, 
  className = '', 
  cols = { sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 },
  gap = 'md' 
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  const gridColsClasses = {
    sm: `grid-cols-${cols.sm || 1}`,
    md: `md:grid-cols-${cols.md || cols.sm || 1}`,
    lg: `lg:grid-cols-${cols.lg || cols.md || cols.sm || 1}`,
    xl: `xl:grid-cols-${cols.xl || cols.lg || cols.md || cols.sm || 1}`,
    '2xl': `2xl:grid-cols-${cols['2xl'] || cols.xl || cols.lg || cols.md || cols.sm || 1}`
  };

  const gridClasses = Object.values(gridColsClasses).join(' ');

  return (
    <div className={`grid ${gridClasses} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Flex
export function ResponsiveFlex({ 
  children, 
  className = '', 
  direction = { sm: 'col', md: 'row' },
  gap = 'md',
  align = 'center',
  justify = 'start' 
}: ResponsiveFlexProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  const directionClasses = {
    sm: `flex-${direction.sm || 'col'}`,
    md: `md:flex-${direction.md || direction.sm || 'col'}`,
    lg: `lg:flex-${direction.lg || direction.md || direction.sm || 'col'}`,
    xl: `xl:flex-${direction.xl || direction.lg || direction.md || direction.sm || 'col'}`
  };

  const flexClasses = Object.values(directionClasses).join(' ');

  return (
    <div className={`flex ${flexClasses} items-${align} justify-${justify} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Text
export function ResponsiveText({ 
  children, 
  className = '', 
  size = { sm: 'base', md: 'lg', lg: 'xl', xl: '2xl' },
  weight = { sm: 'normal', md: 'medium', lg: 'semibold', xl: 'bold' } 
}: ResponsiveTextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

  const responsiveSizeClasses = {
    sm: sizeClasses[size.sm || 'base'],
    md: `md:${sizeClasses[size.md || size.sm || 'base']}`,
    lg: `lg:${sizeClasses[size.lg || size.md || size.sm || 'base']}`,
    xl: `xl:${sizeClasses[size.xl || size.lg || size.md || size.sm || 'base']}`
  };

  const responsiveWeightClasses = {
    sm: weightClasses[weight.sm || 'normal'],
    md: `md:${weightClasses[weight.md || weight.sm || 'normal']}`,
    lg: `lg:${weightClasses[weight.lg || weight.md || weight.sm || 'normal']}`,
    xl: `xl:${weightClasses[weight.xl || weight.lg || weight.md || weight.sm || 'normal']}`
  };

  const sizeClass = Object.values(responsiveSizeClasses).join(' ');
  const weightClass = Object.values(responsiveWeightClasses).join(' ');

  return (
    <div className={`${sizeClass} ${weightClass} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Spacing
export function ResponsiveSpacing({ 
  children, 
  className = '', 
  padding = { sm: 'md', md: 'lg', lg: 'xl', xl: '2xl' },
  margin = { sm: 'none', md: 'sm', lg: 'md', xl: 'lg' } 
}: ResponsiveSpacingProps) {
  const spacingClasses = {
    none: '',
    sm: 'p-2 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-12',
    '2xl': 'p-12 sm:p-16'
  };

  const marginClasses = {
    none: '',
    sm: 'm-2 sm:m-4',
    md: 'm-4 sm:m-6',
    lg: 'm-6 sm:m-8',
    xl: 'm-8 sm:m-12',
    '2xl': 'm-12 sm:m-16'
  };

  const responsivePaddingClasses = {
    sm: spacingClasses[padding.sm || 'md'],
    md: `md:${spacingClasses[padding.md || padding.sm || 'md']}`,
    lg: `lg:${spacingClasses[padding.lg || padding.md || padding.sm || 'md']}`,
    xl: `xl:${spacingClasses[padding.xl || padding.lg || padding.md || padding.sm || 'md']}`
  };

  const responsiveMarginClasses = {
    sm: marginClasses[margin.sm || 'none'],
    md: `md:${marginClasses[margin.md || margin.sm || 'none']}`,
    lg: `lg:${marginClasses[margin.lg || margin.md || margin.sm || 'none']}`,
    xl: `xl:${marginClasses[margin.xl || margin.lg || margin.md || margin.sm || 'none']}`
  };

  const paddingClass = Object.values(responsivePaddingClasses).join(' ');
  const marginClass = Object.values(responsiveMarginClasses).join(' ');

  return (
    <div className={`${paddingClass} ${marginClass} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Hidden/Show
export function ResponsiveHidden({ 
  children, 
  className = '', 
  hide = {},
  show = {} 
}: ResponsiveHiddenProps) {
  const hiddenClasses = Object.entries(hide).map(([breakpoint, shouldHide]) => {
    if (shouldHide) {
      return breakpoint === 'sm' ? 'hidden' : `${breakpoint}:hidden`;
    }
    return '';
  }).filter(Boolean);

  const showClasses = Object.entries(show).map(([breakpoint, shouldShow]) => {
    if (shouldShow) {
      return breakpoint === 'sm' ? 'block' : `${breakpoint}:block`;
    }
    return '';
  }).filter(Boolean);

  const visibilityClasses = [...hiddenClasses, ...showClasses].join(' ');

  return (
    <div className={`${visibilityClasses} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Menu
export function ResponsiveMenu({ 
  children, 
  className = '', 
  trigger,
  position = 'bottom',
  align = 'start' 
}: ResponsiveMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2'
  };

  const alignClasses = {
    start: position === 'top' || position === 'bottom' ? 'left-0' : 'top-0',
    center: position === 'top' || position === 'bottom' ? 'left-1/2 -translate-x-1/2' : 'top-1/2 -translate-y-1/2',
    end: position === 'top' || position === 'bottom' ? 'right-0' : 'bottom-0'
  };

  return (
    <div className={`relative ${className}`}>
      {trigger && (
        <div onClick={() => setIsOpen(!isOpen)}>
          {trigger}
        </div>
      )}
      
      {isOpen && (
        <div className={`absolute ${positionClasses[position]} ${alignClasses[align]} z-50`}>
          <div className="bg-theme-bg-secondary border border-theme-border rounded-lg shadow-lg p-2 min-w-[200px]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// Responsive Navigation
export function ResponsiveNavigation({ 
  children, 
  className = '' 
}: ResponsiveDesignProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {children}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-theme-bg-secondary border-t border-theme-border shadow-lg lg:hidden">
            <div className="p-4 space-y-4">
              {children}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Responsive Layout
export function ResponsiveLayout({ 
  children, 
  className = '' 
}: ResponsiveDesignProps) {
  return (
    <div className={`min-h-screen bg-theme-bg-primary ${className}`}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </div>
  );
}

// Responsive Breakpoint Indicator (for development)
export function ResponsiveBreakpointIndicator({ className = '' }: { className?: string }) {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint('sm');
      else if (width < 768) setBreakpoint('md');
      else if (width < 1024) setBreakpoint('lg');
      else if (width < 1280) setBreakpoint('xl');
      else if (width < 1536) setBreakpoint('2xl');
      else setBreakpoint('3xl');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return (
    <div className={`fixed top-4 left-4 z-50 bg-theme-accent text-white px-2 py-1 rounded text-xs font-mono ${className}`}>
      {breakpoint}
    </div>
  );
}

export default function ResponsiveDesign({ children, className = '' }: ResponsiveDesignProps) {
  return (
    <div className={`responsive-design ${className}`}>
      {children}
    </div>
  );
}
