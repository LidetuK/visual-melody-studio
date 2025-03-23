
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
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
        rootMargin: "0px",
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
      className="bg-elfign-black py-24 sm:py-32 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-7xl sm:text-8xl font-bold mb-12 text-center">
            about<span className="text-white">.</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl leading-relaxed mb-16">
              Our company focuses mainly on production and post-production of audiovisual
              material of all kinds but especially on brand videos, commercials and testimonial
              videos, and does it for over 12 years now. During this period of time, our young team
              managed to acquire plenty of valued experience, especially with working on both
              domestic and international projects.
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white/10 px-10 py-6 text-base h-auto"
              >
                <Link to="/about">our team.</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
