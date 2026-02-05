import { useState, useEffect, useRef, type RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions & { animationDelay?: number } = {}
): [RefObject<T | null>, boolean, number] {
  const { animationDelay = 0, ...inViewOptions } = options;
  const [ref, isInView] = useInView<T>(inViewOptions);
  const [delayedInView, setDelayedInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setDelayedInView(true);
      }, animationDelay);
      return () => clearTimeout(timer);
    }
  }, [isInView, animationDelay]);

  return [ref, delayedInView, animationDelay];
}
