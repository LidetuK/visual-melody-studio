
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import NavbarDesktopItem from './NavbarDesktopItem';
import { navItems } from './navData';

interface NavbarDesktopProps {
  activePathname: string;
  onAskAIClick: () => void;
}

const NavbarDesktop = ({ activePathname, onAskAIClick }: NavbarDesktopProps) => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      <nav className="flex items-center space-x-6">
        {navItems.map((item) => (
          <NavbarDesktopItem 
            key={item.href} 
            item={item} 
            activePathname={activePathname} 
          />
        ))}
      </nav>
      
      {/* Social Media Icons for desktop */}
      <div className="hidden lg:flex lg:items-center lg:border-l lg:border-border/30 lg:ml-4 lg:pl-4">
        <SocialMediaIcons iconSize={16} />
      </div>
      
      <Button 
        variant="default" 
        className="bg-elfign-red hover:bg-elfign-red/90 text-white"
        onClick={onAskAIClick}
      >
        Ask AI
      </Button>
    </div>
  );
};

export default NavbarDesktop;
