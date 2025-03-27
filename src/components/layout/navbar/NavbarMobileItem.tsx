
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { NavItem } from './navData';

interface NavbarMobileItemProps {
  item: NavItem;
  activePathname: string;
  onItemClick: () => void;
  isHomePage: boolean;
}

const NavbarMobileItem = ({ item, activePathname, onItemClick, isHomePage }: NavbarMobileItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = activePathname === item.href || activePathname.startsWith(`${item.href}/`);

  // Handle dropdown menu toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle click on main item or child item
  const handleClick = () => {
    onItemClick();
    setIsOpen(false);
  };

  // Simple link without dropdown
  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          "block py-2 text-xl font-medium transition-colors hover:text-elfign-gold",
          isActive ? "text-elfign-gold" : "text-foreground"
        )}
        onClick={handleClick}
      >
        {item.label}
      </Link>
    );
  }

  // Link with dropdown
  return (
    <div className="py-2">
      <button
        onClick={handleToggle}
        className={cn(
          "flex w-full items-center justify-between text-xl font-medium transition-colors hover:text-elfign-gold",
          isActive ? "text-elfign-gold" : "text-foreground"
        )}
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="mt-2 ml-4 space-y-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className={cn(
                "block py-1 text-base transition-colors hover:text-elfign-gold",
                activePathname === child.href
                  ? "text-elfign-gold"
                  : "text-foreground/80"
              )}
              onClick={handleClick}
            >
              {child.label}
            </Link>
          ))}
          {item.viewAllHref && (
            <Link
              to={item.viewAllHref}
              className="block py-1 text-base font-medium text-elfign-gold hover:text-elfign-gold/80"
              onClick={handleClick}
            >
              View All {item.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarMobileItem;
