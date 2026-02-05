import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks';
import { ProductCard } from '@/components/ProductCard';
import { AnimatedElement } from '@/components/AnimatedElement';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Linen Blend Shirt',
    price: 89,
    description: 'Lightweight perfection',
    image: '/product-1.jpg',
  },
  {
    id: 2,
    name: 'Tailored Trousers',
    price: 129,
    description: 'Modern silhouette',
    image: '/product-2.jpg',
  },
  {
    id: 3,
    name: 'Minimalist Tote',
    price: 159,
    description: 'Everyday essential',
    image: '/product-3.jpg',
  },
];

export default function FeaturedProducts() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              duration={700}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
                Featured This Week
              </h2>
            </AnimatedElement>
            
            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              delay={150}
              duration={700}
            >
              <p className="text-gray-600 text-lg max-w-md">
                Curated pieces handpicked by our stylists for your wardrobe
              </p>
            </AnimatedElement>
          </div>
          
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            delay={200}
            duration={700}
            className="mt-6 lg:mt-0"
          >
            <a
              href="#"
              className={cn(
                'inline-flex items-center gap-2 text-sm font-medium text-black',
                'link-underline group'
              )}
            >
              View All Featured
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </AnimatedElement>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <AnimatedElement
              key={product.id}
              animation="fade-up"
              isVisible={isInView}
              delay={300 + index * 150}
              duration={800}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                className="card-hover"
              />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
