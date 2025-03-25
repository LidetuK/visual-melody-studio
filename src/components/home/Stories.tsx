
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const storyItems = [
  {
    title: "The Last Mission",
    category: "Feature Film",
    image: "public/lovable-uploads/0a9e5c94-302a-4d24-9fc9-71d4641bdc9e.png",
    slug: "the-last-mission"
  },
  {
    title: "City Shadows",
    category: "TV Series",
    image: "public/lovable-uploads/a652a96f-b15a-4526-b10b-2157eeafe2fa.png",
    slug: "city-shadows"
  },
  {
    title: "Beyond Borders",
    category: "Documentary",
    image: "public/lovable-uploads/f35326e6-bba4-4e43-923a-685116abfcd1.png",
    slug: "beyond-borders"
  },
  {
    title: "Midnight Express",
    category: "Short Film",
    image: "public/lovable-uploads/2e3e23f2-101a-4275-82b4-95373ae796b5.png",
    slug: "midnight-express"
  },
  {
    title: "Urban Pulse",
    category: "Music Video",
    image: "public/lovable-uploads/59f4682a-8a68-44ee-a25f-f5f2ed224079.png",
    slug: "urban-pulse"
  }
];

const Stories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStory((prev) => (prev + 1) % storyItems.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, storyItems.length]);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 bg-white text-elfign-black overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            A SELECTION OF OUR STORIES
          </h2>
          <div className="h-1 w-16 bg-elfign-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our diverse portfolio of award-winning productions spanning feature films, documentaries, commercials, and more.
          </p>
        </div>

        <div 
          className={cn(
            "relative min-h-[600px] transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Main featured project */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div 
              className={cn(
                "relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-square transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
              )}
            >
              <img 
                src={storyItems[activeStory].image} 
                alt={storyItems[activeStory].title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-sm bg-elfign-red px-3 py-1 rounded-full mb-2 inline-block">
                  {storyItems[activeStory].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium mt-2">{storyItems[activeStory].title}</h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <div 
                className={cn(
                  "transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                )}
              >
                <h3 className="text-2xl md:text-3xl font-medium mb-4">{storyItems[activeStory].title}</h3>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.
                </p>
                <Link 
                  to={`/work/${storyItems[activeStory].slug}`}
                  className="inline-flex items-center text-elfign-red hover:text-elfign-red/80 font-medium group"
                >
                  View Project 
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="flex space-x-4 mt-8">
                {storyItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={cn(
                      "h-1 transition-all duration-300 bg-gray-300",
                      activeStory === index ? "w-10 bg-elfign-red" : "w-6 hover:bg-gray-400"
                    )}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Thumbnails row */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {storyItems.map((story, index) => (
              <div
                key={index}
                onClick={() => setActiveStory(index)}
                className={cn(
                  "relative overflow-hidden rounded-md aspect-[3/4] cursor-pointer transition-all duration-300",
                  activeStory === index 
                    ? "ring-2 ring-elfign-red ring-offset-2" 
                    : "opacity-70 hover:opacity-100"
                )}
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 text-white text-xs">
                  {story.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className={cn(
            "mt-12 text-center transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Link 
            to="/work" 
            className="inline-flex items-center text-elfign-red hover:text-elfign-red/80 font-medium"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stories;
