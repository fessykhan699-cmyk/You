import { useInView } from '@/hooks';
import { AnimatedElement } from '@/components/AnimatedElement';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Shop',
    links: [
      { name: 'New Arrivals', href: '#' },
      { name: 'Bestsellers', href: '#' },
      { name: 'Collections', href: '#' },
      { name: 'Sale', href: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Contact Us', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Sustainability', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export default function Footer() {
  const [footerRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <footer ref={footerRef} className="bg-black text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <AnimatedElement
            animation="fade-up"
            isVisible={isInView}
            duration={600}
            className="col-span-2 md:col-span-4 lg:col-span-1"
          >
            <a href="#" className="text-3xl font-semibold tracking-tight mb-6 block">
              YOU
            </a>
            <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
              Minimalist fashion for the modern individual. Clean aesthetics, quality craftsmanship, timeless design.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={cn(
                    'w-10 h-10 bg-white/10 rounded-full',
                    'flex items-center justify-center',
                    'hover:bg-white hover:text-black',
                    'transition-all duration-300',
                    'hover:scale-110 hover:rotate-6'
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </AnimatedElement>

          {/* Link Columns */}
          {footerSections.map((section, sectionIndex) => (
            <AnimatedElement
              key={section.title}
              animation="fade-up"
              isVisible={isInView}
              delay={(sectionIndex + 1) * 100}
              duration={600}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        'text-gray-400 text-sm',
                        'hover:text-white transition-colors duration-200',
                        'link-underline inline-block'
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <AnimatedElement
            animation="fade-in"
            isVisible={isInView}
            delay={500}
            duration={600}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm">
                © 2025 YOU. All rights reserved.
              </p>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </footer>
  );
}
