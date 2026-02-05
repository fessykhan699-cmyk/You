import { useState, useCallback } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useScrolled } from '@/hooks';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: string[];
}

const navItems: NavItem[] = [
  { 
    name: 'Collections', 
    href: '#collections', 
    hasDropdown: true,
    dropdownItems: ['Spring/Summer 2025', 'The Essential Edit', 'Workwear', 'Weekend Wear', 'View All']
  },
  { name: 'New Arrivals', href: '#new-arrivals', hasDropdown: false },
  { 
    name: 'Men', 
    href: '#men', 
    hasDropdown: true,
    dropdownItems: ['Shirts', 'Trousers', 'Outerwear', 'Knitwear', 'Accessories']
  },
  { 
    name: 'Women', 
    href: '#women', 
    hasDropdown: true,
    dropdownItems: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories']
  },
  { name: 'Accessories', href: '#accessories', hasDropdown: false },
  { name: 'About', href: '#about', hasDropdown: false },
];

interface DropdownMenuProps {
  items: string[];
  isOpen: boolean;
}

function DropdownMenu({ items, isOpen }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
      role="menu"
    >
      <div className="py-2">
        {items.map((item, index) => (
          <a
            key={item}
            href="#"
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
            style={{ animationDelay: `${index * 30}ms` }}
            role="menuitem"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-40 lg:hidden transition-all duration-500',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      )}
    >
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'absolute top-16 left-0 right-0 bg-white shadow-2xl transition-transform duration-500',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav className="px-6 py-6 space-y-1" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-lg font-medium text-gray-800 py-3 border-b border-gray-100 last:border-0 hover:text-black transition-colors"
              style={{ 
                animationDelay: `${index * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.3s ease ${index * 50}ms`
              }}
              onClick={onClose}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Navbar() {
  const isScrolled = useScrolled(50);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownEnter = useCallback((itemName: string) => {
    setActiveDropdown(itemName);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'backdrop-blur-xl bg-white/95 shadow-sm' 
            : 'bg-transparent'
        )}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl lg:text-3xl font-semibold tracking-tight transition-all duration-300 hover:tracking-wider"
              aria-label="YOU - Home"
            >
              YOU
            </a>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center space-x-8"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium py-2 relative group',
                      'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black',
                      'after:transition-all after:duration-300 hover:after:w-full'
                    )}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={cn(
                          'w-4 h-4 transition-transform duration-300',
                          activeDropdown === item.name && 'rotate-180'
                        )} 
                      />
                    )}
                  </a>

                  <DropdownMenu 
                    items={item.dropdownItems || []} 
                    isOpen={item.hasDropdown && activeDropdown === item.name} 
                  />
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button 
                className="p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                className="hidden sm:flex p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              
              <button 
                className="p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 relative"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-black text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
