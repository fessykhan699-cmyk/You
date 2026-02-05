import { useState, useCallback, useEffect, useRef } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

export function useCarousel({
  totalSlides,
  autoPlay = true,
  autoPlayInterval = 6000,
}: UseCarouselOptions) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isPaused, nextSlide]);

  return {
    currentSlide,
    isAnimating,
    goToSlide,
    nextSlide,
    prevSlide,
    pause,
    resume,
  };
}
