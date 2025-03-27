
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface DropdownItemProps {
  title: string;
  href: string;
  isActive?: boolean;
}

const NavbarDropdownItem = ({ title, href, isActive }: DropdownItemProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "block rounded-sm px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-elfign-red",
        isActive && "text-elfign-gold"
      )}
    >
      {title}
    </Link>
  );
};

export default NavbarDropdownItem;
