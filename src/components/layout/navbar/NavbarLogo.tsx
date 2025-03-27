
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2"
      aria-label="Elfign Entertainment Logo"
    >
      <img 
        src="/lovable-uploads/fc4226e0-5ee9-4086-94b9-e1908995f50a.png" 
        alt="Elfign Entertainment Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;
