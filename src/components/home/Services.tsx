
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Film, Tv, Camera, Music, Video, PenTool, FileVideo, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import ServicesCard from '@/components/ui/ServicesCard';

const services = [
  {
    title: 'Feature Films',
    description: 'Award-winning feature film production from concept to screen.',
    icon: <Film size={20} />,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1740&q=80',
    slug: 'feature-films'
  },
  {
    title: 'TV Series',
    description: 'Compelling episodic content for television and streaming platforms.',
    icon: <Tv size={20} />,
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1746&q=80',
    slug: 'tv-series'
  },
  {
    title: 'Documentary Films',
    description: 'Powerful documentary storytelling that informs and inspires.',
    icon: <FileVideo size={20} />,
    image: 'https://images.unsplash.com/photo-1516281717304-181e285c6e58?auto=format&fit=crop&w=1742&q=80',
    slug: 'documentary-films'
  },
  {
    title: 'Advertisement',
    description: 'Creative and effective commercial production for brands.',
    icon: <Video size={20} />,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1742&q=80',
    slug: 'advertisement'
  },
  {
    title: 'Events Documentation',
    description: 'Comprehensive coverage of corporate and special events.',
    icon: <Users size={20} />,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1740&q=80',
    slug: 'events-documentation'
  },
  {
    title: 'Commercial Photography',
    description: 'High-quality photography for commercial and editorial use.',
    icon: <Camera size={20} />,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1740&q=80',
    slug: 'commercial-photography'
  },
  {
    title: 'Graphics Design',
    description: 'Creative visual design solutions for all media formats.',
    icon: <PenTool size={20} />,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1742&q=80',
    slug: 'graphics-design'
  },
  {
    title: 'Music Production',
    description: 'Original music composition and production for all mediums.',
    icon: <Music size={20} />,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1742&q=80',
    slug: 'music-production'
  }
];

const Services = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div 
          className={cn(
            "max-w-xl mx-auto text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Comprehensive Production <span className="text-elfign-red">Services</span>
          </h2>
          <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Explore our wide range of entertainment and production services tailored to bring your vision to life.
          </p>
        </div>

        <div 
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {services.map((service, index) => (
            <ServicesCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>

        <div 
          className={cn(
            "mt-12 text-center transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center text-elfign-red hover:text-elfign-red/80 font-medium"
          >
            View All Services
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-5 h-5 ml-1"
            >
              <path 
                fillRule="evenodd" 
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
