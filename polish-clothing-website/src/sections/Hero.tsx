import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '@/hooks';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  tag: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    tag: 'NEW ARRIVAL',
    headline: 'Spring Collection 2025',
    subheadline: 'Effortless elegance for the modern wardrobe',
    primaryCta: 'Shop Now',
    secondaryCta: 'Explore Lookbook',
    image: '/hero-1.jpg',
  },
  {
    id: 2,
    tag: 'BESTSELLER',
    headline: 'The Essential Edit',
    subheadline: 'Timeless pieces crafted with precision',
    primaryCta: 'Discover',
    secondaryCta: 'View Collection',
    image: '/hero-2.jpg',
  },
  {
    id: 3,
    tag: 'ECO-FRIENDLY',
    headline: 'Conscious Style',
    subheadline: 'Sustainable materials, lasting quality',
    primaryCta: 'Learn More',
    secondaryCta: 'Shop Sustainable',
    image: '/hero-3.jpg',
  },
];

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
  isLoaded: boolean;
}

function SlideContent({ slide, isActive, isLoaded }: SlideContentProps) {
  const baseDelay = 0;
  
  return (
    <div className="relative z-20 h-full flex items-center">
      <div className="w-full px-6 lg:px-12 xl:px-24">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            className={cn(
              'inline-block px-4 py-1.5 bg-black text-white text-xs font-semibold tracking-widest mb-6',
              'transition-all duration-700',
              isLoaded && isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            )}
            style={{ transitionDelay: `${baseDelay + 300}ms` }}
          >
            {slide.tag}
          </div>

          {/* Headline */}
          <h1
            className={cn(
              'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black leading-[1.1] mb-5',
              'transition-all duration-800',
              isLoaded && isActive
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            )}
            style={{ 
              transitionDelay: `${baseDelay + 400}ms`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {slide.headline}
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              'text-lg sm:text-xl text-gray-600 mb-10 max-w-lg',
              'transition-all duration-700',
              isLoaded && isActive
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: `${baseDelay + 550}ms` }}
          >
            {slide.subheadline}
          </p>

          {/* CTAs */}
          <div
            className={cn(
              'flex flex-wrap gap-4',
              'transition-all duration-700',
              isLoaded && isActive
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: `${baseDelay + 700}ms` }}
          >
            <button className="group px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              {slide.primaryCta}
              <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-black text-sm font-medium border border-black/20 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              {slide.secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

function NavigationButton({ direction, onClick, disabled }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 z-30 w-14 h-14',
        'bg-white/90 backdrop-blur-md rounded-full',
        'flex items-center justify-center shadow-lg',
        'hover:bg-black hover:text-white transition-all duration-300',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black',
        'group',
        direction === 'left' ? 'left-4 lg:left-8' : 'right-4 lg:right-8'
      )}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
      ) : (
        <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </button>
  );
}

interface DotNavigationProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
  disabled: boolean;
}

function DotNavigation({ total, current, onSelect, disabled }: DotNavigationProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          disabled={disabled}
          className={cn(
            'h-2 rounded-full transition-all duration-500',
            index === current
              ? 'w-8 bg-black'
              : 'w-2 bg-gray-400 hover:bg-gray-600'
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === current ? 'true' : 'false'}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentSlide, isAnimating, goToSlide, nextSlide, prevSlide, pause, resume } = useCarousel({
    totalSlides: slides.length,
    autoPlay: true,
    autoPlayInterval: 6000,
  });

  useEffect(() => {
    // Small delay to ensure smooth initial animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-gray-100"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label="Hero carousel"
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        
        return (
          <div
            key={slide.id}
            className={cn(
              'absolute inset-0 transition-all duration-1000',
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            )}
            aria-hidden={!isActive}
          >
            {/* Background Image with Ken Burns effect */}
            <div
              className={cn(
                'absolute inset-0 transition-transform duration-[10000ms] ease-linear',
                isActive ? 'scale-[1.03]' : 'scale-100'
              )}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
            </div>

            <SlideContent slide={slide} isActive={isActive} isLoaded={isLoaded} />
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <NavigationButton direction="left" onClick={prevSlide} disabled={isAnimating} />
      <NavigationButton direction="right" onClick={nextSlide} disabled={isAnimating} />

      {/* Dots Navigation */}
      <DotNavigation 
        total={slides.length} 
        current={currentSlide} 
        onSelect={goToSlide}
        disabled={isAnimating}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:flex flex-col items-center gap-3">
        <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gray-300 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-black animate-scroll-indicator" 
            style={{ height: '50%' }}
          />
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-8 z-30 hidden lg:block">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <span className="text-black">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
