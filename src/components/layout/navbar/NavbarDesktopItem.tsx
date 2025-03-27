
import { NavItem } from './navData';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import NavbarDropdownItem from './NavbarDropdownItem';
import NavbarViewAllLink from './NavbarViewAllLink';

interface NavbarDesktopItemProps {
  item: NavItem;
  activePathname: string;
  isHomePage: boolean;
  scrolled: boolean;
}

const NavbarDesktopItem = ({ item, activePathname, isHomePage, scrolled }: NavbarDesktopItemProps) => {
  const isActive = activePathname === item.href || activePathname.startsWith(`${item.href}/`);
  const textColor = isHomePage && !scrolled ? "text-white" : "";
  
  // Simple link without dropdown
  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-elfign-gold relative line-animation",
          isActive ? "text-elfign-gold" : textColor
        )}
      >
        {item.label}
      </Link>
    );
  }

  // Link with dropdown
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-elfign-gold bg-transparent hover:bg-transparent focus:bg-transparent",
              isActive ? "text-elfign-gold" : textColor
            )}
          >
            {item.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
              {item.children.map((child) => (
                <NavbarDropdownItem
                  key={child.href}
                  title={child.label}
                  href={child.href}
                  description={child.description}
                  isActive={activePathname === child.href}
                />
              ))}
              {item.viewAllHref && (
                <NavbarViewAllLink
                  href={item.viewAllHref}
                  label={`View All ${item.label}`}
                />
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarDesktopItem;
