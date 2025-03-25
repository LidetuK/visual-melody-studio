
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const storyItems = [
  {
    title: "The Last Mission",
    category: "Feature Film",
    image: "public/lovable-uploads/0a9e5c94-302a-4d24-9fc9-71d4641bdc9e.png",
    video: "https://player.vimeo.com/video/559615068?h=9fcbe3d1d0",
    slug: "the-last-mission"
  },
  {
    title: "City Shadows",
    category: "TV Series",
    image: "public/lovable-uploads/a652a96f-b15a-4526-b10b-2157eeafe2fa.png",
    video: "https://player.vimeo.com/video/631242660?h=99d08e237d",
    slug: "city-shadows"
  },
  {
    title: "Beyond Borders",
    category: "Documentary",
    image: "public/lovable-uploads/f35326e6-bba4-4e43-923a-685116abfcd1.png",
    video: "https://player.vimeo.com/video/581886427?h=d87215b96b",
    slug: "beyond-borders"
  },
  {
    title: "Midnight Express",
    category: "Short Film",
    image: "public/lovable-uploads/2e3e23f2-101a-4275-82b4-95373ae796b5.png",
    video: "https://player.vimeo.com/video/500040871?h=1f76e1f0e6",
    slug: "midnight-express"
  },
  {
    title: "Urban Pulse",
    category: "Music Video",
    image: "public/lovable-uploads/59f4682a-8a68-44ee-a25f-f5f2ed224079.png",
    video: "https://player.vimeo.com/video/714031933?h=2985d3388c",
    slug: "urban-pulse"
  }
];

const Stories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(Array(storyItems.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLIFrameElement[]>([]);

  // Set up intersection observer for animations
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

  const handleVideoPlay = (index: number) => {
    const newIsPlaying = Array(storyItems.length).fill(false);
    newIsPlaying[index] = true;
    setIsPlaying(newIsPlaying);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveStory(index);
  };

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

        {/* Main video showcase section */}
        <div 
          className={cn(
            "relative transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Featured video */}
            <div 
              className={cn(
                "relative overflow-hidden rounded-lg aspect-video transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
              )}
            >
              <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                <iframe
                  ref={el => el && (videoRefs.current[activeStory] = el)}
                  src={`${storyItems[activeStory].video}?autoplay=${isPlaying[activeStory] ? 1 : 0}&loop=1&background=1&muted=${isPlaying[activeStory] ? 0 : 1}`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="absolute inset-0 w-full h-full"
                  style={{ opacity: isPlaying[activeStory] ? 1 : 0.7 }}
                  title={storyItems[activeStory].title}
                ></iframe>
                
                {!isPlaying[activeStory] && (
                  <>
                    <img 
                      src={storyItems[activeStory].image}
                      alt={storyItems[activeStory].title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={() => handleVideoPlay(activeStory)}
                        className="w-16 h-16 bg-elfign-red rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
                        aria-label="Play video"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </button>
                    </div>
                  </>
                )}
                
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <span className="text-sm bg-elfign-red px-3 py-1 rounded-full mb-2 inline-block">
                    {storyItems[activeStory].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium mt-2">{storyItems[activeStory].title}</h3>
                </div>
              </div>
            </div>
            
            {/* Video description */}
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
              
              {/* Indicator buttons */}
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
          
          {/* Video carousel */}
          <div 
            className={cn(
              "mt-16 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {storyItems.map((story, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/5">
                    <div
                      onClick={() => handleThumbnailClick(index)}
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
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-elfign-red/80 rounded-full flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <Play className="w-5 h-5 ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white text-xs md:text-sm font-medium">
                        {story.title}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                className="absolute -left-4 md:-left-5 bg-white/80 hover:bg-white border-none shadow-md text-elfign-black"
              />
              <CarouselNext 
                className="absolute -right-4 md:-right-5 bg-white/80 hover:bg-white border-none shadow-md text-elfign-black"
              />
            </Carousel>
          </div>
        </div>
        
        {/* View all projects link */}
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
