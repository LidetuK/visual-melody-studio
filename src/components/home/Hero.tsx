import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bringing Stories to Life",
      subtitle: "Award-winning film and music production",
      cta: "Our Work",
      link: "/work"
    },
    {
      title: "Create. Inspire. Entertain.",
      subtitle: "Premium entertainment production services",
      cta: "Services",
      link: "/services"
    },
    {
      title: "Exceptional Visuals",
      subtitle: "Captivating audiences through compelling storytelling",
      cta: "About Us",
      link: "/about"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-elfign-black">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <div className={cn("absolute inset-0 bg-elfign-black transition-opacity duration-1000", {
          "opacity-0": isVideoLoaded,
          "opacity-100": !isVideoLoaded
        })} />
        
        <div className="absolute inset-0 h-full w-full">
          <iframe 
            ref={videoRef}
            src="https://www.youtube.com/embed/U3wlC7gocKo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=U3wlC7gocKo"
            className="absolute inset-0 h-[calc(100%+200px)] w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              pointerEvents: 'none',
              top: '-100px',
              left: '0',
              zIndex: '0',
              opacity: 0.6
            }}
            title="Elfign Entertainment Showreel"
          ></iframe>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-elfign-black/70 via-transparent to-elfign-black/90" />
      </div>

      {/* Content moved to bottom */}
      <div className="relative z-10 flex h-full items-end justify-center pb-20">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-elfign-red hover:bg-elfign-red/90 text-white text-lg px-8"
          >
            <Link to={slides[currentSlide].link}>
              {slides[currentSlide].cta}
            </Link>
          </Button>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-elfign-gold w-8"
                : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
