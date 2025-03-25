
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface DropdownItemProps {
  title: string;
  href: string;
}

const NavbarDropdownItem = ({ title, href }: DropdownItemProps) => {
  return (
    <Link 
      to={href} 
      className="block rounded-sm px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-elfign-red"
    >
      {title}
    </Link>
  );
};

export default NavbarDropdownItem;
