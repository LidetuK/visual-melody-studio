
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileNavItemProps {
  item: {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: { title: string; href: string; }[];
  };
  activePathname: string;
  onItemClick: () => void;
}

const NavbarMobileItem = ({ item, activePathname, onItemClick }: MobileNavItemProps) => {
  if (item.hasDropdown) {
    return (
      <div className="space-y-3">
        <div 
          className={cn(
            'text-lg font-medium transition-colors mb-2 pb-1 border-b border-border/30',
            activePathname.includes(item.href)
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
              onClick={onItemClick}
            >
              {dropdownItem.title}
            </Link>
          ))}
          <Link 
            to={item.href}
            className="block text-base text-elfign-red hover:text-elfign-red/80 mt-2"
            onClick={onItemClick}
          >
            View all
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <Link
      to={item.href}
      className={cn(
        'text-lg font-medium transition-colors block',
        activePathname === item.href
          ? 'text-elfign-red'
          : 'text-foreground hover:text-elfign-red'
      )}
      onClick={onItemClick}
    >
      {item.label}
    </Link>
  );
};

export default NavbarMobileItem;
