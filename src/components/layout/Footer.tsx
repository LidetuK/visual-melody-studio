
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-elfign-black text-white">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and company info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-heading text-xl font-medium tracking-tight text-elfign-red">
                ELFIGN
                <span className="ml-1 text-elfign-gold">ENTERTAINMENT</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Creating compelling visual stories through film, photography, and music production.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-elfign-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-elfign-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-elfign-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-elfign-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/feature-films" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Feature Films
                </Link>
              </li>
              <li>
                <Link to="/services/tv-series" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  TV Series
                </Link>
              </li>
              <li>
                <Link to="/services/documentary-films" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Documentary Films
                </Link>
              </li>
              <li>
                <Link to="/services/advertisement" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Advertisement
                </Link>
              </li>
              <li>
                <Link to="/services/music-production" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Music Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-elfign-gold" />
                <span>info@elfignentertainment.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-elfign-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link 
                to="/contact"
                className="inline-flex items-center text-sm font-medium text-elfign-gold hover:text-elfign-red transition-colors"
              >
                Get in Touch
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-5 h-5 ml-1"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Elfign Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
