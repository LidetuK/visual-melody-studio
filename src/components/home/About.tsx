
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const About = () => {
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
    <section ref={sectionRef} className="bg-gray-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image column with parallax effect */}
          <div 
            className={cn(
              "overflow-hidden rounded-lg relative aspect-square md:aspect-auto md:h-[600px]",
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-elfign-red/20 to-elfign-gold/20 mix-blend-multiply rounded-lg z-10" />
            <img
              src="/c7b69243-2ae5-48f0-a6ca-11dde5305e17.png"
              alt="Film production team"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent z-20" />
            <div 
              className={cn(
                "absolute left-8 bottom-8 z-30 transition-all duration-1000 delay-300 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <span className="inline-block px-4 py-1 bg-elfign-red text-white text-sm font-medium rounded-full mb-4">
                Established 2010
              </span>
              <h3 className="text-white text-2xl font-medium">Award-winning production company</h3>
            </div>
          </div>
          
          {/* Content column */}
          <div 
            className={cn(
              "flex flex-col space-y-6 transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Crafting Exceptional <span className="text-elfign-red">Visual Stories</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mb-6"></div>
              <p className="text-gray-600 mb-4 text-lg">
                Elfign Entertainment is a premier production company specializing in creating compelling visual content across multiple mediums.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2010, we have established ourselves as industry leaders in film production, photography, and music creation. Our team of passionate creatives brings technical expertise and artistic vision to every project, ensuring exceptional results that captivate audiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-elfign-red mb-2">120+</div>
                <p className="text-gray-600">Completed Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-elfign-red mb-2">15+</div>
                <p className="text-gray-600">Industry Awards</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-elfign-red mb-2">40+</div>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-elfign-red mb-2">30+</div>
                <p className="text-gray-600">Global Clients</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                asChild
                className="bg-elfign-red hover:bg-elfign-red/90 text-white"
              >
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
