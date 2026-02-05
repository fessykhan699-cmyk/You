import type { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'fade-in' 
  | 'scale-in' 
  | 'slide-up';

interface AnimatedElementProps<T extends ElementType = 'div'> {
  children: ReactNode;
  animation: AnimationType;
  isVisible: boolean;
  delay?: number;
  duration?: number;
  className?: string;
  as?: T;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-up': 'translate-y-8 opacity-0',
  'fade-down': '-translate-y-8 opacity-0',
  'fade-left': 'translate-x-8 opacity-0',
  'fade-right': '-translate-x-8 opacity-0',
  'fade-in': 'opacity-0',
  'scale-in': 'scale-95 opacity-0',
  'slide-up': 'translate-y-12 opacity-0',
};

export function AnimatedElement<T extends ElementType = 'div'>({
  children,
  animation,
  isVisible,
  delay = 0,
  duration = 700,
  className,
  as,
}: AnimatedElementProps<T>) {
  const Component = as || 'div';
  const baseClasses = 'transition-all will-change-transform';
  const hiddenClasses = animationClasses[animation];
  const visibleClasses = 'translate-x-0 translate-y-0 scale-100 opacity-100';

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <Component
      className={cn(
        baseClasses,
        isVisible ? visibleClasses : hiddenClasses,
        className
      )}
      style={style}
    >
      {children}
    </Component>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
