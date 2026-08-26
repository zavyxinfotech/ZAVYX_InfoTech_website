import React, { useEffect, useRef, useState } from 'react';

/**
 * High-performance, GPU-accelerated scroll reveal component.
 * Uses IntersectionObserver to trigger animations via style state.
 */
export default function ScrollReveal({ 
  children, 
  variant = 'fade-up', 
  duration = 350, 
  delay = 0, 
  threshold = 0.08,
  className = ''
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion media query
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, { threshold });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getVariantStyles = () => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
      };
    }

    switch (variant) {
      case 'fade-up':
        return { opacity: 0, transform: 'translate3d(0, 20px, 0)' };
      case 'fade-down':
        return { opacity: 0, transform: 'translate3d(0, -20px, 0)' };
      case 'fade-left':
        return { opacity: 0, transform: 'translate3d(20px, 0, 0)' };
      case 'fade-right':
        return { opacity: 0, transform: 'translate3d(-20px, 0, 0)' };
      case 'scale':
        return { opacity: 0, transform: 'translate3d(0, 0, 0) scale(0.95)' };
      case 'fade':
      default:
        return { opacity: 0, transform: 'translate3d(0, 0, 0)' };
    }
  };

  const style = {
    ...getVariantStyles(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)', // ease-out match
    willChange: isVisible ? 'auto' : 'transform, opacity',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
