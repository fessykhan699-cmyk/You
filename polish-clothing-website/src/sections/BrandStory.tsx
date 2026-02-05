import { useInView } from '@/hooks';
import { AnimatedElement } from '@/components/AnimatedElement';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const values = [
  { title: 'Minimal Design', description: 'Less is more' },
  { title: 'Quality First', description: 'Built to last' },
  { title: 'Sustainable Practices', description: 'For the planet' },
];

export default function BrandStory() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)`,
            backgroundSize: '48px 48px',
          }} 
        />
      </div>

      {/* Decorative Elements */}
      <div 
        className={cn(
          'absolute top-20 left-[10%] w-32 h-32 border border-white/10 rounded-full',
          'transition-all duration-1000',
          isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        )}
        style={{ transitionDelay: '500ms' }}
      />
      <div 
        className={cn(
          'absolute bottom-20 right-[15%] w-20 h-20 border border-white/10 rounded-full',
          'transition-all duration-1000',
          isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        )}
        style={{ transitionDelay: '700ms' }}
      />
      <div 
        className={cn(
          'absolute top-1/3 right-[20%] w-3 h-3 bg-white/20 rounded-full',
          'transition-all duration-1000 animate-float',
          isInView ? 'opacity-100' : 'opacity-0'
        )}
        style={{ transitionDelay: '900ms', animationDelay: '1s' }}
      />

      <div className="relative container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            delay={200}
            duration={800}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-8 tracking-tight">
              Less, But Better
            </h2>
          </AnimatedElement>

          {/* Body Text */}
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            delay={350}
            duration={700}
          >
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              At YOU, we believe in the power of simplicity. Every piece is designed 
              with intention, crafted with care, and made to last. We don't follow 
              trends—we create timeless essentials that become part of your story.
            </p>
          </AnimatedElement>

          {/* Values */}
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            delay={500}
            duration={700}
          >
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* CTA */}
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            delay={650}
            duration={700}
          >
            <a
              href="#"
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4',
                'bg-white text-black text-sm font-medium rounded-full',
                'hover:bg-gray-100 transition-all duration-300 hover:scale-105',
                'group'
              )}
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
