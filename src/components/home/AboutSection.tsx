
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
          <h2 className="text-6xl sm:text-7xl font-bold mb-12 text-center font-heading">
            about<span className="text-white">.</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl leading-relaxed mb-16 font-sans">
              Our company, based in Ethiopia, specializes in the production and
              post-production of high-quality audiovisual content, with a
              particular focus on video productions and music. With over 12
              years of experience, our dynamic team has worked on both local and
              international projects, gaining invaluable expertise in delivering
              exceptional brand videos, commercials, and testimonial videos.
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                variant="default"
                className="bg-elfign-red hover:bg-elfign-red/90 text-white rounded-md px-8 py-3 text-base font-medium transition-all hover:scale-105"
              >
                <Link to="/about">Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
