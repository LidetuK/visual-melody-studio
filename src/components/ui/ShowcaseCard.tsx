
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface ShowcaseCardProps {
  title: string;
  category: string;
  image: string;
  video?: string; // New optional video URL prop
  slug: string;
  index: number;
}

const ShowcaseCard = ({ title, category, image, video, slug, index }: ShowcaseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/work/${slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg h-[280px] md:h-[400px]',
        'animate-fade-in transition-all duration-500 transform hover:z-10',
        { 'animation-delay-100': index % 4 === 0 },
        { 'animation-delay-200': index % 4 === 1 },
        { 'animation-delay-300': index % 4 === 2 },
        { 'animation-delay-400': index % 4 === 3 }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'absolute inset-0 z-0 bg-elfign-black/50 transition-all duration-500',
          isHovered ? 'opacity-70' : 'opacity-40'
        )}
      />

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

      {/* Video play button that appears on hover if video exists */}
      {video && (
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20",
            "w-14 h-14 bg-elfign-red rounded-full flex items-center justify-center",
            "transition-all duration-500 transform",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
        >
          <Play className="w-6 h-6 text-white ml-1" />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col p-6 justify-end">
        <div 
          className={cn(
            'transform transition-all duration-500 flex flex-col',
            isHovered ? 'translate-y-0' : 'translate-y-2'
          )}
        >
          <span className="text-xs font-medium text-elfign-gold uppercase tracking-wider">
            {category}
          </span>
          <h3 
            className={cn(
              'text-xl md:text-2xl font-medium text-white mt-1',
              'transform transition-all duration-300',
              isHovered ? 'translate-x-0' : 'translate-x-0'
            )}
          >
            {title}
          </h3>
          
          <div 
            className={cn(
              'mt-3 h-0.5 bg-elfign-gold transition-all duration-500',
              isHovered ? 'w-16' : 'w-0'
            )}
          />
          
          <span 
            className={cn(
              'mt-3 inline-flex items-center text-sm font-medium text-white transition-all duration-300',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            View Project
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
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ShowcaseCard;
