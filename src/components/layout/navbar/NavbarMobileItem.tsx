
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
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Handle click on main item or child item
  const handleClick = () => {
    onItemClick();
    if (!item.hasDropdown) {
      setIsOpen(false);
    }
  };

  // Handle click on child item
  const handleChildClick = () => {
    onItemClick();
    setIsOpen(false);
  };

  // Simple link without dropdown
  if (!item.hasDropdown) {
    return (
      <Link
        to={item.href}
        className={cn(
          "block py-3 text-xl font-medium transition-colors hover:text-elfign-gold border-b border-gray-200/10",
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
    <div className="py-2 border-b border-gray-200/10 w-full">
      <button
        onClick={handleToggle}
        className={cn(
          "flex w-full items-center justify-between text-xl font-medium transition-colors hover:text-elfign-gold py-2",
          isActive ? "text-elfign-gold" : "text-foreground"
        )}
        aria-expanded={isOpen}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mt-2 ml-4 space-y-3 py-2">
          {item.dropdownItems && item.dropdownItems.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className={cn(
                "block py-1 text-base transition-colors hover:text-elfign-gold",
                activePathname === child.href
                  ? "text-elfign-gold"
                  : "text-foreground/80"
              )}
              onClick={handleChildClick}
            >
              {child.title}
            </Link>
          ))}
          <Link
            to={item.href}
            className="block py-1 text-base font-medium text-elfign-gold hover:text-elfign-gold/80"
            onClick={handleChildClick}
          >
            View All {item.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileItem;
