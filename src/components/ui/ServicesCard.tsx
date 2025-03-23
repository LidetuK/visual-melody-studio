
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  slug: string;
  index: number;
}

const ServicesCard = ({ title, description, icon, image, slug, index }: ServicesCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/services/${slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg transition-all duration-500',
        'transform hover:-translate-y-2 h-[300px] md:h-[400px]',
        'animate-fade-in',
        { 'animation-delay-100': index % 3 === 0 },
        { 'animation-delay-200': index % 3 === 1 },
        { 'animation-delay-300': index % 3 === 2 }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0 bg-elfign-black/40 transition-opacity duration-500" />
      
      <div 
        className="absolute inset-0 z-0 image-scale"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.7s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div 
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-elfign-black/90 to-transparent p-6 pt-24', 
            'transform transition-all duration-500',
            isHovered ? 'h-full' : 'h-2/3'
          )}
        />
        
        <div className="relative flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center rounded-full bg-elfign-red p-2 text-white">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        
        <p 
          className={cn(
            'relative text-sm text-gray-200 transition-opacity duration-300 line-clamp-2 md:line-clamp-3',
            isHovered ? 'opacity-100' : 'opacity-0 md:opacity-100' 
          )}
        >
          {description}
        </p>
        
        <div 
          className={cn(
            'relative mt-4 flex items-center text-sm font-medium text-elfign-gold transition-all duration-300',
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          )}
        >
          <span>Learn more</span>
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
        </div>
      </div>
    </Link>
  );
};

export default ServicesCard;
