
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; href: string; }[];
}

const servicesItems = [
  { title: 'Film Production', href: '/services/film-production' },
  { title: 'Music Production', href: '/services/music-production' },
  { title: 'Post-Production', href: '/services/post-production' },
  { title: 'Animation', href: '/services/animation' },
];

const workItems = [
  { title: 'Films', href: '/work/films' },
  { title: 'Music Videos', href: '/work/music-videos' },
  { title: 'Commercials', href: '/work/commercials' },
  { title: 'Animation Projects', href: '/work/animation' },
];

const aboutItems = [
  { title: 'Our Story', href: '/about/our-story' },
  { title: 'Team', href: '/about/team' },
  { title: 'Mission & Values', href: '/about/mission' },
  { title: 'Careers', href: '/about/careers' },
];

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services', 
    hasDropdown: true,
    dropdownItems: servicesItems
  },
  { 
    label: 'Work', 
    href: '/work', 
    hasDropdown: true,
    dropdownItems: workItems
  },
  { 
    label: 'About', 
    href: '/about', 
    hasDropdown: true,
    dropdownItems: aboutItems
  },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
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

  // Initialize smooth scrolling
  useEffect(() => {
    document.documentElement.classList.add('smooth-scrolling');
    
    // Add click event listeners to anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

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

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors focus:outline-none">
                      <span className={cn(
                        'text-sm font-medium transition-colors',
                        location.pathname.includes(item.href)
                          ? 'text-elfign-red'
                          : 'text-foreground/80 hover:text-elfign-red'
                      )}>
                        {item.label}
                      </span>
                      <ChevronDown 
                        className="ml-1 h-4 w-4" 
                        aria-hidden="true" 
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48 bg-background/95 backdrop-blur-sm border border-border/30">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.href} asChild>
                          <Link 
                            to={dropdownItem.href} 
                            className="w-full cursor-pointer px-3 py-2 text-sm hover:bg-accent"
                          >
                            {dropdownItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuItem asChild className="border-t border-border/30 mt-1 pt-1">
                        <Link 
                          to={item.href} 
                          className="w-full cursor-pointer px-3 py-2 text-sm text-elfign-red hover:bg-accent flex items-center"
                        >
                          View all {item.label.toLowerCase()}
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="w-4 h-4 ml-1"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
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
                )
              ))}
            </nav>
            
            {/* Social Media Icons for desktop */}
            <div className="hidden lg:flex lg:items-center lg:border-l lg:border-border/30 lg:ml-4 lg:pl-4">
              <SocialMediaIcons iconSize={16} />
            </div>
            
            <Button variant="default" className="bg-elfign-red hover:bg-elfign-red/90 text-white">
              Get in Touch
            </Button>
          </div>

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
            <div key={item.href} className="w-full max-w-xs">
              {item.hasDropdown ? (
                <div className="space-y-3">
                  <div 
                    className={cn(
                      'text-lg font-medium transition-colors mb-2 pb-1 border-b border-border/30',
                      location.pathname.includes(item.href)
                        ? 'text-elfign-red'
                        : 'text-foreground hover:text-elfign-red'
                    )}
                  >
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        to={dropdownItem.href}
                        className="block text-base text-foreground/80 hover:text-elfign-red"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                    <Link 
                      to={item.href}
                      className="block text-base text-elfign-red hover:text-elfign-red/80 mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      View all
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    'text-lg font-medium transition-colors block',
                    location.pathname === item.href
                      ? 'text-elfign-red'
                      : 'text-foreground hover:text-elfign-red'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Social Media Icons for mobile */}
          <div className="pt-4 w-full max-w-xs flex justify-center">
            <SocialMediaIcons />
          </div>
          
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
