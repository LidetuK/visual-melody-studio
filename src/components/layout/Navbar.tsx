import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, Info, Newspaper, CalendarDays, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import * as React from 'react';

interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  icon?: React.ReactNode;
}

const servicesItems = [
  { title: 'Film Production', description: 'Full-service film production from concept to final delivery', href: '/services/film-production' },
  { title: 'Music Production', description: 'Professional music production, recording, and mixing', href: '/services/music-production' },
  { title: 'Post-Production', description: 'High-quality editing, color grading, and visual effects', href: '/services/post-production' },
  { title: 'Animation', description: 'Custom 2D and 3D animation for various media', href: '/services/animation' },
];

const workItems = [
  { title: 'Films', description: 'Our award-winning films and documentaries', href: '/work/films' },
  { title: 'Music Videos', description: 'Creative music videos for artists and bands', href: '/work/music-videos' },
  { title: 'Commercials', description: 'Engaging commercial content for brands', href: '/work/commercials' },
  { title: 'Animation Projects', description: 'Stunning animation work for various clients', href: '/work/animation' },
];

const aboutItems = [
  { title: 'Our Story', description: 'The journey of Elfign Entertainment', href: '/about/our-story' },
  { title: 'Team', description: 'Meet the creative minds behind our work', href: '/about/team' },
  { title: 'Mission & Values', description: 'What drives us and what we believe in', href: '/about/mission' },
  { title: 'Careers', description: 'Join our team of passionate creatives', href: '/about/careers' },
];

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMegaMenu: true, icon: <Settings className="h-4 w-4" /> },
  { label: 'Work', href: '/work', hasMegaMenu: true, icon: <Briefcase className="h-4 w-4" /> },
  { label: 'About', href: '/about', hasMegaMenu: true, icon: <Info className="h-4 w-4" /> },
  { label: 'News', href: '/news', icon: <Newspaper className="h-4 w-4" /> },
  { label: 'Events', href: '/events', icon: <CalendarDays className="h-4 w-4" /> },
  { label: 'Contact', href: '/contact' },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

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

          {/* Desktop Navigation with Mega Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  item.hasMegaMenu ? (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger className={cn(
                        "text-sm font-medium transition-colors",
                        location.pathname.includes(item.href)
                          ? "text-elfign-red"
                          : "text-foreground/80 hover:text-elfign-red"
                      )}>
                        <span className="flex items-center">
                          {item.icon}
                          <span className="ml-1">{item.label}</span>
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                          {item.label === 'Services' && servicesItems.map((service) => (
                            <ListItem
                              key={service.href}
                              title={service.title}
                              href={service.href}
                            >
                              {service.description}
                            </ListItem>
                          ))}
                          {item.label === 'Work' && workItems.map((work) => (
                            <ListItem
                              key={work.href}
                              title={work.title}
                              href={work.href}
                            >
                              {work.description}
                            </ListItem>
                          ))}
                          {item.label === 'About' && aboutItems.map((about) => (
                            <ListItem
                              key={about.href}
                              title={about.title}
                              href={about.href}
                            >
                              {about.description}
                            </ListItem>
                          ))}
                          <div className="col-span-full mt-4 pt-4 border-t border-border/50">
                            <Link 
                              to={item.href} 
                              className="text-sm font-medium text-elfign-red hover:underline flex items-center"
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
                          </div>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.href}>
                      <Link
                        to={item.href}
                        className={cn(
                          'text-sm font-medium transition-colors flex items-center line-animation',
                          location.pathname === item.href
                            ? 'text-elfign-red'
                            : 'text-foreground/80 hover:text-elfign-red'
                        )}
                      >
                        {item.icon && <span className="mr-1">{item.icon}</span>}
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
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
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-lg font-medium transition-colors flex items-center',
                location.pathname === item.href
                  ? 'text-elfign-red'
                  : 'text-foreground hover:text-elfign-red'
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
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
