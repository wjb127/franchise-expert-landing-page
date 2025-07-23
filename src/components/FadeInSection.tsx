'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

export default function FadeInSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 800
}: FadeInSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const getTransformStyle = () => {
    if (isVisible) return 'translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      default:
        return 'translate-y-8';
    }
  };

  const getOpacity = () => {
    return isVisible ? 'opacity-100' : 'opacity-0';
  };

  return (
    <div
      ref={ref as any}
      className={`
        transition-all ease-out
        ${getOpacity()}
        ${getTransformStyle()}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
} 