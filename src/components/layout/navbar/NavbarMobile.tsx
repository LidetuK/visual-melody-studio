
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import NavbarMobileItem from './NavbarMobileItem';
import { navItems } from './navData';

interface NavbarMobileProps {
  isOpen: boolean;
  activePathname: string;
  onClose: () => void;
  onAskAIClick: () => void;
  isHomePage: boolean;
}

const NavbarMobile = ({ isOpen, activePathname, onClose, onAskAIClick, isHomePage }: NavbarMobileProps) => {
  const handleAIButtonClick = () => {
    onClose();
    onAskAIClick();
  };

  return (
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
            <NavbarMobileItem 
              item={item} 
              activePathname={activePathname} 
              onItemClick={onClose} 
              isHomePage={isHomePage}
            />
          </div>
        ))}
        
        {/* Social Media Icons for mobile */}
        <div className="pt-4 w-full max-w-xs flex justify-center">
          <SocialMediaIcons />
        </div>
        
        <Button
          variant="default"
          className="bg-elfign-red hover:bg-elfign-red/90 text-white mt-4 w-full max-w-xs"
          onClick={handleAIButtonClick}
        >
          Ask AI
        </Button>
      </div>
    </div>
  );
};

export default NavbarMobile;
