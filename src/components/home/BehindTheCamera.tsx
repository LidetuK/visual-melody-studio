
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Collection of behind-the-scenes images
const behindSceneImages = [
  {
    id: 1,
    url: "public/lovable-uploads/1d451c75-8255-4927-bd64-b8d4c575d89c.png",
    caption: "Forest scene: Capturing traditional costumes in a natural setting"
  },
  {
    id: 2,
    url: "public/lovable-uploads/46cd21d6-4fec-4a57-aed4-43769efe5f83.png",
    caption: "Directors evaluating footage during a scene shoot"
  },
  {
    id: 3,
    url: "public/lovable-uploads/23e8ff29-a776-4d5f-b4a3-1172f355de2d.png",
    caption: "Cityscape filming: Production team on location in urban setting"
  },
  {
    id: 4,
    url: "public/lovable-uploads/c7b69243-2ae5-48f0-a6ca-11dde5305e17.png",
    caption: "Two directors discussing the production details"
  },
  {
    id: 5,
    url: "public/lovable-uploads/59f4682a-8a68-44ee-a25f-f5f2ed224079.png",
    caption: "Portrait session with local talent in traditional setting"
  },
  {
    id: 6,
    url: "public/lovable-uploads/0a9e5c94-302a-4d24-9fc9-71d4641bdc9e.png",
    caption: "Silhouette portrait against studio lighting"
  }
];

const BehindTheCamera = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
        setActiveIndex((prev) => (prev + 1) % behindSceneImages.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 bg-elfign-black text-white overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div 
          className={cn(
            "max-w-xl mx-auto text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="inline-block px-4 py-1 bg-elfign-red/20 text-elfign-red text-sm font-medium rounded-full mb-4">
            Behind the Lens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight mb-6">
            the making of <span className="text-elfign-gold">magic</span>
          </h2>
          <div className="h-1 w-16 bg-elfign-gold mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Step behind the scenes with our production team as they bring stories to life through expert cinematography, direction, and creative vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Featured large image */}
          <div 
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            )}
          >
            {behindSceneImages.map((image, index) => (
              <div 
                key={image.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeIndex === index ? "opacity-100" : "opacity-0"
                )}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm sm:text-base font-light">{image.caption}</p>
                </div>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {behindSceneImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-elfign-gold w-6"
                      : "bg-white/60 hover:bg-white"
                  )}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Content and gallery */}
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          )}>
            <h3 className="text-2xl md:text-3xl font-medium mb-4">
              Where Creativity Meets Execution
            </h3>
            <p className="text-gray-300 mb-8">
              Our production team works diligently on location across diverse settings, from lush forests to urban rooftops. Each shoot is meticulously planned and executed with state-of-the-art equipment and techniques to achieve the perfect shot.
            </p>
            
            {/* Small image gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img 
                src="public/lovable-uploads/a4ba62f2-a6da-4881-a9d4-a9d4ca6a771c.png" 
                alt="Behind the scenes" 
                className="rounded-lg aspect-[4/3] object-cover"
              />
              <img 
                src="public/lovable-uploads/f35326e6-bba4-4e43-923a-685116abfcd1.png" 
                alt="Behind the scenes" 
                className="rounded-lg aspect-[4/3] object-cover"
              />
              <img 
                src="public/lovable-uploads/2e3e23f2-101a-4275-82b4-95373ae796b5.png" 
                alt="Behind the scenes" 
                className="rounded-lg aspect-[4/3] object-cover"
              />
              <img 
                src="public/lovable-uploads/e53e5850-a2df-466a-95a8-553d64baf378.png" 
                alt="Behind the scenes" 
                className="rounded-lg aspect-[4/3] object-cover"
              />
            </div>
            
            <Link 
              to="/work" 
              className="inline-flex items-center text-elfign-gold hover:text-elfign-gold/80 font-medium group"
            >
              Explore Our Work 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Featured image - Beyond */}
        <div 
          className={cn(
            "mt-16 relative aspect-video overflow-hidden rounded-lg transition-all duration-1000 transform",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <img 
            src="public/lovable-uploads/f35326e6-bba4-4e43-923a-685116abfcd1.png" 
            alt="Beyond - Production artwork" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-5xl md:text-7xl font-bold tracking-widest text-white">
              B E Y O N D
            </h3>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xl font-light">Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheCamera;
