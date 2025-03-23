
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        {
          'bg-background/80 backdrop-blur-md shadow-sm': scrolled,
          'bg-transparent': !scrolled
        }
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Elfign Entertainment Logo"
          >
            <span className="font-heading text-xl font-medium tracking-tight text-elfign-red">
              ELFIGN
              <span className="ml-1 text-elfign-gold">ENTERTAINMENT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors line-animation',
                  location.pathname === item.href
                    ? 'text-elfign-red'
                    : 'text-foreground/80 hover:text-elfign-red'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" className="bg-elfign-red hover:bg-elfign-red/90 text-white">
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden',
          {
            'opacity-100 pointer-events-auto': isOpen,
            'opacity-0 pointer-events-none': !isOpen
          },
          'transition-opacity duration-300 ease-in-out'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-lg font-medium transition-colors',
                location.pathname === item.href
                  ? 'text-elfign-red'
                  : 'text-foreground hover:text-elfign-red'
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="default"
            className="bg-elfign-red hover:bg-elfign-red/90 text-white mt-4 w-full max-w-xs"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
