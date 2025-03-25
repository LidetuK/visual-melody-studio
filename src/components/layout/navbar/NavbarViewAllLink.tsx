
import { Link } from 'react-router-dom';

interface ViewAllLinkProps {
  label: string;
  href: string;
}

const NavbarViewAllLink = ({ label, href }: ViewAllLinkProps) => {
  return (
    <Link 
      to={href} 
      className="mt-1 pt-1 block border-t border-border/30 rounded-sm px-3 py-2 text-sm text-elfign-red hover:bg-accent flex items-center"
    >
      View all {label.toLowerCase()}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor" 
        className="w-4 h-4 ml-1"
      >
        <path 
          fillRule="evenodd" 
          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
          clipRule="evenodd" 
        />
      </svg>
    </Link>
  );
};

export default NavbarViewAllLink;
