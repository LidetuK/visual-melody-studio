
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2"
      aria-label="Elfign Entertainment Logo"
    >
      <span className="font-heading text-xl font-medium tracking-tight text-elfign-red">
        ELFIGN
        <span className="ml-1 text-elfign-gold">ENTERTAINMENT</span>
      </span>
    </Link>
  );
};

export default NavbarLogo;
