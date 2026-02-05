import { useInView } from '@/hooks';
import { AnimatedElement } from '@/components/AnimatedElement';
import { Truck, RotateCcw, Shield, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  icon: typeof Truck;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over $100',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '30-day hassle-free returns',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure checkout',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: '24/7 dedicated support',
  },
];

export default function Services() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 bg-white border-t border-gray-100"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animation="fade-up"
              isVisible={isInView}
              delay={index * 100}
              duration={600}
            >
              <div className="group text-center">
                {/* Icon */}
                <div 
                  className={cn(
                    'inline-flex items-center justify-center w-14 h-14 mb-4',
                    'bg-gray-50 rounded-2xl',
                    'group-hover:bg-black group-hover:text-white',
                    'transition-all duration-300',
                    'group-hover:-translate-y-1'
                  )}
                >
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-black mb-1 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  {service.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Connecting Line - Desktop */}
        <AnimatedElement
          animation="fade-in"
          isVisible={isInView}
          delay={500}
          duration={800}
          className="hidden lg:block mt-12"
        >
          <div className="relative h-px bg-gray-200 overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-black transition-all duration-1000"
              style={{
                width: isInView ? '100%' : '0%',
                transitionDelay: '600ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
