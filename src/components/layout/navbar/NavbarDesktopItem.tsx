
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import NavbarDropdownItem from './NavbarDropdownItem';
import NavbarViewAllLink from './NavbarViewAllLink';

interface NavItemProps {
  item: {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: { title: string; href: string; }[];
  };
  activePathname: string;
}

const NavbarDesktopItem = ({ item, activePathname }: NavItemProps) => {
  if (item.hasDropdown) {
    return (
      <div className="relative group">
        <Link
          to={item.href}
          className={cn(
            'flex items-center text-sm font-medium transition-colors line-animation group-hover:text-elfign-red',
            activePathname.includes(item.href)
              ? 'text-elfign-red'
              : 'text-foreground/80'
          )}
        >
          <span>{item.label}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </Link>
        <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-background/95 backdrop-blur-sm border border-border/30 p-1 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {item.dropdownItems?.map((dropdownItem) => (
            <NavbarDropdownItem 
              key={dropdownItem.href} 
              title={dropdownItem.title} 
              href={dropdownItem.href} 
            />
          ))}
          <NavbarViewAllLink href={item.href} label={item.label} />
        </div>
      </div>
    );
  }
  
  return (
    <Link
      to={item.href}
      className={cn(
        'text-sm font-medium transition-colors line-animation',
        activePathname === item.href
          ? 'text-elfign-red'
          : 'text-foreground/80 hover:text-elfign-red'
      )}
    >
      {item.label}
    </Link>
  );
};

export default NavbarDesktopItem;
