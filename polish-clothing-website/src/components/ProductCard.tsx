import { useState } from 'react';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description?: string;
  image: string;
  variant?: 'default' | 'compact' | 'horizontal';
  showQuickActions?: boolean;
  className?: string;
}

export function ProductCard({
  name,
  price,
  description,
  image,
  variant = 'default',
  showQuickActions = true,
  className,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isCompact = variant === 'compact';
  const isHorizontal = variant === 'horizontal';

  return (
    <div
      className={cn(
        'group relative',
        isHorizontal && 'flex gap-4',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div
        className={cn(
          'relative overflow-hidden bg-gray-100',
          isHorizontal ? 'w-32 h-40 flex-shrink-0' : 'aspect-[3/4]',
          !isHorizontal && 'rounded-2xl'
        )}
      >
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className={cn(
            'w-full h-full object-cover transition-all duration-500',
            isHovered && 'scale-105',
            !imageLoaded && 'opacity-0',
            imageLoaded && 'opacity-100'
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Quick Actions Overlay */}
        {showQuickActions && !isHorizontal && (
          <div
            className={cn(
              'absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              style={{ transitionDelay: '0ms' }}
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              style={{ transitionDelay: '50ms' }}
              aria-label="Add to cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={cn(
            'absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white',
            isLiked && 'bg-red-50'
          )}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={cn(
              'w-4 h-4 transition-all duration-300',
              isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600'
            )}
          />
        </button>

        {/* Sale Badge (example) */}
        {price < 60 && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-black text-white text-xs font-medium rounded">
            SALE
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={cn('flex-1', !isHorizontal && 'mt-4')}>
        {description && !isCompact && (
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {description}
          </p>
        )}
        <h3
          className={cn(
            'font-medium text-black group-hover:text-gray-700 transition-colors',
            isCompact ? 'text-sm' : 'text-base'
          )}
        >
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <p
            className={cn(
              'font-semibold text-black',
              isCompact ? 'text-sm' : 'text-base'
            )}
          >
            ${price}
          </p>
          {price < 60 && (
            <p className="text-sm text-gray-400 line-through">
              ${Math.round(price * 1.3)}
            </p>
          )}
        </div>

        {/* Quick Add for Compact Variant */}
        {isCompact && (
          <button
            className={cn(
              'mt-3 w-full py-2 text-xs font-medium border border-black rounded-lg transition-all duration-300',
              isHovered
                ? 'bg-black text-white'
                : 'bg-transparent text-black'
            )}
          >
            Quick Add
          </button>
        )}
      </div>
    </div>
  );
}
