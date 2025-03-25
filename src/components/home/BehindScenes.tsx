
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Camera, Film, Monitor, Mic, Video, Users, Music, Lightbulb } from 'lucide-react';

const BehindScenes = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        threshold: 0.1,
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
      className="py-20 md:py-32 bg-elfign-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-elfign-black/80 z-10" />
        <img 
          src="public/lovable-uploads/46cd21d6-4fec-4a57-aed4-43769efe5f83.png" 
          alt="Behind the scenes" 
          className="object-cover w-full h-full opacity-40"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-20">
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight mb-6">
            behind the scenes.
          </h2>
          <div className="h-1 w-16 bg-elfign-gold mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            First-class footage is no feat of quality, which is why our team has the latest professional video equipment. We are not just able to provide aerial footage from drones, we make sure every footage is the highest quality and produce filming with a RED film cameras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className={cn(
            "aspect-video rounded-lg overflow-hidden transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <img 
              src="public/lovable-uploads/23e8ff29-a776-4d5f-b4a3-1172f355de2d.png" 
              alt="Production team filming on location" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className={cn(
            "aspect-video rounded-lg overflow-hidden transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <img 
              src="public/lovable-uploads/1d451c75-8255-4927-bd64-b8d4c575d89c.png" 
              alt="Forest scene production setup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div 
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-8",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {[
            { icon: <Camera size={32} />, title: "Professional Cameras", description: "RED & ARRI cameras for cinema-quality footage" },
            { icon: <Film size={32} />, title: "Lighting Equipment", description: "Studio-grade lighting for perfect exposure" },
            { icon: <Monitor size={32} />, title: "Post-Production", description: "High-end editing and color grading suites" },
            { icon: <Mic size={32} />, title: "Sound Equipment", description: "Professional audio recording and mixing" },
            { icon: <Video size={32} />, title: "Drones & Gimbals", description: "Stabilized aerial and motion footage" },
            { icon: <Music size={32} />, title: "Music Production", description: "Custom composition and sound design" },
            { icon: <Users size={32} />, title: "Expert Team", description: "Experienced directors and cinematographers" },
            { icon: <Lightbulb size={32} />, title: "Creative Vision", description: "Innovative storytelling approaches" }
          ].map((item, index) => (
            <div 
              key={index}
              className={cn(
                "bg-elfign-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-500 hover:bg-elfign-red/20 hover:border-elfign-red/30",
                "transform transition-all duration-500",
                isVisible ? `opacity-100 translate-y-0 delay-${index * 100}` : "opacity-0 translate-y-8"
              )}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              <div className="text-elfign-gold mb-4">{item.icon}</div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindScenes;
