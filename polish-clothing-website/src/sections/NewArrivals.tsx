import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useInView } from '@/hooks';
import { ProductCard } from '@/components/ProductCard';
import { AnimatedElement } from '@/components/AnimatedElement';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Cotton Essential Tee', price: 45, image: '/product-4.jpg' },
  { id: 2, name: 'Relaxed Fit Denim', price: 98, image: '/product-5.jpg' },
  { id: 3, name: 'Knit Cardigan', price: 78, image: '/product-6.jpg' },
  { id: 4, name: 'Leather Belt', price: 55, image: '/product-7.jpg' },
  { id: 5, name: 'Oxford Shirt', price: 85, image: '/product-8.jpg' },
  { id: 6, name: 'Chino Shorts', price: 65, image: '/product-9.jpg' },
  { id: 7, name: 'Canvas Sneakers', price: 120, image: '/product-10.jpg' },
  { id: 8, name: 'Wool Scarf', price: 48, image: '/product-11.jpg' },
];

export default function NewArrivals() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    scrollEl.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    
    return () => scrollEl.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="new-arrivals"
      className="section-padding bg-gray-50"
    >
      <div className="w-full">
        {/* Header */}
        <div className="container-custom mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <div>
              <AnimatedElement
                animation="fade-up"
                isVisible={isInView}
                duration={700}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
                  New Arrivals
                </h2>
              </AnimatedElement>
              
              <AnimatedElement
                animation="fade-up"
                isVisible={isInView}
                delay={150}
                duration={700}
              >
                <p className="text-gray-600 text-lg">
                  Fresh styles just landed
                </p>
              </AnimatedElement>
            </div>

            {/* Navigation & Progress */}
            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              delay={200}
              duration={700}
              className="flex items-center gap-6 mt-6 lg:mt-0"
            >
              {/* Progress Bar */}
              <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-300"
                  style={{ 
                    width: `${Math.max(15, Math.min(100, scrollProgress * 100 + 15))}%` 
                  }}
                />
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={cn(
                    'w-10 h-10 rounded-full border flex items-center justify-center',
                    'transition-all duration-300',
                    canScrollLeft
                      ? 'border-gray-300 hover:bg-black hover:text-white hover:border-black'
                      : 'border-gray-200 opacity-40 cursor-not-allowed'
                  )}
                  aria-label="Scroll left"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={cn(
                    'w-10 h-10 rounded-full border flex items-center justify-center',
                    'transition-all duration-300',
                    canScrollRight
                      ? 'border-gray-300 hover:bg-black hover:text-white hover:border-black'
                      : 'border-gray-200 opacity-40 cursor-not-allowed'
                  )}
                  aria-label="Scroll right"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar px-6 lg:px-12 xl:px-24 pb-4 snap-x snap-mandatory"
        >
          {products.map((product, index) => (
            <AnimatedElement
              key={product.id}
              animation="fade-right"
              isVisible={isInView}
              delay={300 + index * 80}
              duration={600}
              className="flex-shrink-0 w-64 snap-start"
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                variant="compact"
                showQuickActions={false}
              />
            </AnimatedElement>
          ))}
        </div>

        {/* View All Link */}
        <AnimatedElement
          animation="fade-up"
          isVisible={isInView}
          delay={600}
          duration={700}
          className="container-custom mt-8"
        >
          <a
            href="#"
            className={cn(
              'inline-flex items-center gap-2 text-sm font-medium text-black',
              'link-underline group'
            )}
          >
            Shop All New
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}
