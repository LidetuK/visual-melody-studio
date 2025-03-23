
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

const ConceptToScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
        threshold: 0.3,
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

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 bg-elfign-black text-white overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            )}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              from concept to screen.
            </h2>
            <div className="h-1 w-16 bg-elfign-gold mb-8"></div>
            <p className="text-gray-300 text-lg mb-8">
              We transform ideas into compelling visual narratives. Our comprehensive production workflow ensures every project is executed with precision and creativity, from initial concept through to final delivery.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-elfign-red/20 flex items-center justify-center text-elfign-red mr-4">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Pre-Production</h3>
                  <p className="text-gray-400">Scriptwriting, storyboarding, location scouting, and production planning.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-elfign-red/20 flex items-center justify-center text-elfign-red mr-4">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Production</h3>
                  <p className="text-gray-400">High-quality filming with expert cinematography and direction.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-elfign-red/20 flex items-center justify-center text-elfign-red mr-4">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Post-Production</h3>
                  <p className="text-gray-400">Editing, color grading, sound design, and visual effects.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "relative overflow-hidden rounded-lg aspect-video transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            )}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-elfign-black via-transparent to-transparent z-10"
            />
            <img 
              src="https://images.unsplash.com/photo-1595859703065-2259982784bb?q=80&w=2940&auto=format&fit=crop" 
              alt="Boxing scene from film production" 
              className={cn(
                "w-full h-full object-cover transition-transform duration-700 ease-out",
                isHovering ? "scale-105" : "scale-100"
              )}
            />
            <div 
              className={cn(
                "absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300",
                isHovering ? "opacity-100" : "opacity-0"
              )}
            >
              <button className="h-20 w-20 rounded-full bg-elfign-red/80 hover:bg-elfign-red flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <Play size={36} className="text-white ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptToScreen;
