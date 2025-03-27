
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2"
      aria-label="Elfign Entertainment Logo"
    >
      <img 
        src="/lovable-uploads/5583981d-932b-4d6e-bcb7-916eaeaa4fb1.png" 
        alt="Elfign Entertainment Logo" 
        className="h-16 w-auto" // Increased from h-12 to h-16
      />
    </Link>
  );
};

export default NavbarLogo;
