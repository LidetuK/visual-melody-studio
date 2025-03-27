
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/smoothScroll';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-elfign-black text-white">
      {/* Top "Back to top" bar */}
      <div className="bg-elfign-gold text-elfign-black py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="font-medium">Bringing stories to life...</p>
          </div>
          <Button 
            variant="ghost" 
            className="flex items-center space-x-1 text-elfign-black hover:text-elfign-red"
            onClick={handleScrollToTop}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left column - Links & Social media */}
          <div className="space-y-6">
            <SocialMediaIcons iconSize={24} className="mb-6" />
            
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-400 hover:text-elfign-gold transition-colors text-sm">
                  Website Feedback
                </Link>
              </li>
            </ul>

            <div className="pt-6">
              <p className="text-sm text-gray-400">123 Production Avenue</p>
              <p className="text-sm text-gray-400">Los Angeles, CA 90028</p>
              <p className="text-sm text-gray-400 mt-2">1-800-ELFIGN (353-4446)</p>
            </div>
          </div>

          {/* Center column - Logo */}
          <div className="flex justify-center items-center">
            <Link to="/" className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/3fd2d827-539a-4190-8fa3-8ea20e83b812.png" 
                alt="Elfign Entertainment Logo" 
                className="h-28 w-auto"
              />
            </Link>
          </div>

          {/* Right column - News/Blog highlights */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Latest News</h3>
            
            <div className="space-y-6">
              <article className="border-b border-gray-800 pb-4">
                <p className="text-xs text-elfign-gold mb-1">Friday, June 14, 2024</p>
                <Link to="/news/new-film-release" className="text-white hover:text-elfign-gold transition-colors">
                  <h4 className="text-base font-medium">New Film Release: "Echoes of Tomorrow" coming this summer</h4>
                </Link>
              </article>
              
              <article className="border-b border-gray-800 pb-4">
                <p className="text-xs text-elfign-gold mb-1">Wednesday, June 5, 2024</p>
                <Link to="/news/industry-award" className="text-white hover:text-elfign-gold transition-colors">
                  <h4 className="text-base font-medium">Elfign Entertainment wins prestigious industry award</h4>
                </Link>
              </article>
              
              <article className="border-b border-gray-800 pb-4">
                <p className="text-xs text-elfign-gold mb-1">Monday, May 27, 2024</p>
                <Link to="/news/summer-courses" className="text-white hover:text-elfign-gold transition-colors">
                  <h4 className="text-base font-medium">Summer filmmaking courses now open for enrollment</h4>
                </Link>
              </article>
              
              <article>
                <p className="text-xs text-elfign-gold mb-1">Thursday, May 16, 2024</p>
                <Link to="/news/partnership-announcement" className="text-white hover:text-elfign-gold transition-colors">
                  <h4 className="text-base font-medium">New partnership announced with Skyline Studios</h4>
                </Link>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Elfign Entertainment. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
