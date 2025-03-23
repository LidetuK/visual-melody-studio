
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
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
    // Handle video loading
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }

    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-elfign-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className={cn("absolute inset-0 bg-elfign-black transition-opacity duration-1000", {
          "opacity-0": isVideoLoaded,
          "opacity-100": !isVideoLoaded
        })} />
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-elfign-black/70 via-transparent to-elfign-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-1000 absolute inset-0 flex flex-col items-center justify-center",
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                )}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-elfign-red hover:bg-elfign-red/90 text-white"
                  >
                    <Link to={slide.link}>
                      {slide.cta}
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Link to="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
            
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
          </div>
        </div>
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
