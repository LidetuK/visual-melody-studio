
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2"
      aria-label="Elfign Entertainment Logo"
    >
      <img 
        src="/lovable-uploads/3fd2d827-539a-4190-8fa3-8ea20e83b812.png" 
        alt="Elfign Entertainment Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;
