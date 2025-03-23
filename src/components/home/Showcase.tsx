
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ShowcaseCard from '@/components/ui/ShowcaseCard';

const projects = [
  {
    title: 'The Forgotten Path',
    category: 'Feature Film',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1625&q=80',
    slug: 'the-forgotten-path'
  },
  {
    title: 'Urban Chronicles',
    category: 'TV Series',
    image: 'https://images.unsplash.com/photo-1578674473215-9e451d8f9bb4?auto=format&fit=crop&w=1548&q=80',
    slug: 'urban-chronicles'
  },
  {
    title: 'Harmony',
    category: 'Music Production',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1740&q=80',
    slug: 'harmony'
  },
  {
    title: 'Ocean Life',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1569&q=80',
    slug: 'ocean-life'
  },
  {
    title: 'Brand Reimagined',
    category: 'Advertisement',
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1740&q=80',
    slug: 'brand-reimagined'
  },
  {
    title: 'Global Summit 2023',
    category: 'Event Documentation',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1740&q=80',
    slug: 'global-summit-2023'
  },
  {
    title: 'Product Launch',
    category: 'Commercial Photography',
    image: 'https://images.unsplash.com/photo-1603706613896-8b61d7ee3e18?auto=format&fit=crop&w=1742&q=80',
    slug: 'product-launch'
  },
  {
    title: 'Modern Identity',
    category: 'Graphics Design',
    image: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?auto=format&fit=crop&w=1554&q=80',
    slug: 'modern-identity'
  }
];

const Showcase = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-elfign-black text-white">
      <div className="container px-4 md:px-6">
        <div 
          className={cn(
            "max-w-xl mx-auto text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="inline-block px-4 py-1 bg-elfign-red/20 text-elfign-red text-sm font-medium rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Featured <span className="text-elfign-gold">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Explore our showcase of award-winning work across various production categories.
          </p>
        </div>

        <div 
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {projects.map((project, index) => (
            <ShowcaseCard
              key={project.slug}
              title={project.title}
              category={project.category}
              image={project.image}
              slug={project.slug}
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
            to="/work" 
            className="inline-flex items-center text-elfign-gold hover:text-elfign-gold/80 font-medium"
          >
            View All Projects
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

export default Showcase;
