import { useInView } from '@/hooks';
import { AnimatedElement } from '@/components/AnimatedElement';
import { ArrowRight, Leaf, Recycle, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  { icon: Leaf, text: '100% Organic Cotton' },
  { icon: Recycle, text: 'Sustainable Production' },
  { icon: Heart, text: 'Timeless Design' },
];

export default function CollectionShowcase() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="women"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left - Image */}
        <AnimatedElement
          animation="fade-right"
          isVisible={isInView}
          duration={1000}
          className="relative w-full lg:w-[55%] h-[50vh] lg:h-auto overflow-hidden"
        >
          <div
            className={cn(
              'absolute inset-0 transition-all duration-1000',
              isInView ? 'scale-100' : 'scale-110'
            )}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <img
              src="/collection-summer.jpg"
              alt="Summer Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 lg:to-white/50" />
          </div>
        </AnimatedElement>

        {/* Right - Content */}
        <div className="w-full lg:w-[45%] flex items-center px-6 lg:px-12 xl:px-16 py-12 lg:py-0">
          <div className="max-w-lg">
            {/* Collection Name */}
            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              delay={300}
              duration={800}
            >
              <span className="inline-block text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                Summer 2025
              </span>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              delay={400}
              duration={800}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6">
                The Summer Edit
              </h2>
            </AnimatedElement>

            {/* Description */}
            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              delay={500}
              duration={700}
            >
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Light fabrics, breathable cuts, and effortless style for warm days. 
                Discover pieces designed to move with you from sunrise to sunset.
              </p>
            </AnimatedElement>

            {/* Features */}
            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              delay={600}
              duration={700}
            >
              <div className="flex flex-wrap gap-3 mb-10">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-full',
                      'transition-all duration-300 hover:bg-gray-100'
                    )}
                  >
                    <feature.icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedElement>

            {/* CTAs */}
            <AnimatedElement
              animation="fade-up"
              isVisible={isInView}
              delay={700}
              duration={700}
            >
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Explore Collection
                  <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                <button className="group px-8 py-4 bg-transparent text-black text-sm font-medium border border-black/20 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 inline-flex items-center gap-2">
                  Shop the Edit
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
