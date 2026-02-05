import { useState } from 'react';
import { useInView } from '@/hooks';
import { AnimatedElement } from '@/components/AnimatedElement';
import { Check, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Newsletter() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.3 });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setEmail('');
    
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-gray-50"
    >
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          {/* Headline */}
          <AnimatedElement
            animation="scale-in"
            isVisible={isInView}
            duration={700}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 tracking-tight">
              Join the YOU Community
            </h2>
          </AnimatedElement>

          {/* Subtext */}
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            delay={150}
            duration={600}
          >
            <p className="text-gray-600 mb-8">
              Be the first to know about new arrivals, exclusive offers, and styling tips.
            </p>
          </AnimatedElement>

          {/* Form */}
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            delay={300}
            duration={700}
          >
            <form onSubmit={handleSubmit} className="relative">
              {status === 'success' ? (
                <div className="flex items-center justify-center gap-3 py-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-black">Thank you for subscribing!</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Enter your email"
                      disabled={status === 'loading'}
                      className={cn(
                        'w-full px-6 py-4 bg-white border-2 rounded-full',
                        'text-black placeholder:text-gray-400',
                        'outline-none transition-all duration-300',
                        'disabled:opacity-60 disabled:cursor-not-allowed',
                        isFocused 
                          ? 'border-black shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      )}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    className={cn(
                      'px-8 py-4 bg-black text-white text-sm font-medium rounded-full',
                      'hover:bg-gray-800 transition-all duration-300',
                      'disabled:opacity-60 disabled:cursor-not-allowed',
                      'flex items-center justify-center gap-2',
                      'hover:scale-105 hover:shadow-lg'
                    )}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </AnimatedElement>

          {/* Privacy Note */}
          <AnimatedElement
            animation="fade-in"
            isVisible={isInView}
            delay={400}
            duration={600}
            className="mt-4"
          >
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our{' '}
              <a href="#" className="underline hover:text-black transition-colors">
                Privacy Policy
              </a>
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
