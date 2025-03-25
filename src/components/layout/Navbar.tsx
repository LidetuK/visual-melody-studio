
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavbarLogo from './navbar/NavbarLogo';
import NavbarDesktop from './navbar/NavbarDesktop';
import NavbarMobile from './navbar/NavbarMobile';
import useScrollEffect from './navbar/useScrollEffect';
import useSmoothScroll from './navbar/useSmoothScroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect();
  const location = useLocation();
  
  // Initialize smooth scrolling
  useSmoothScroll();

  const handleAskAIClick = () => {
    document.getElementById('chat-widget')?.classList.toggle('hidden');
  };

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
          <NavbarLogo />

          {/* Desktop Navigation */}
          <NavbarDesktop 
            activePathname={location.pathname} 
            onAskAIClick={handleAskAIClick} 
          />

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
      <NavbarMobile 
        isOpen={isOpen} 
        activePathname={location.pathname}
        onClose={() => setIsOpen(false)}
        onAskAIClick={handleAskAIClick} 
      />
    </header>
  );
};

export default Navbar;
