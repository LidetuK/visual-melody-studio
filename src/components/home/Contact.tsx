
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import ContactForm from '@/components/ui/ContactForm';

const Contact = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-5 items-center">
          {/* Contact info column */}
          <div 
            className={cn(
              "md:col-span-2 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <span className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Let's Discuss Your <span className="text-elfign-red">Project</span>
            </h2>
            <div className="h-1 w-16 bg-elfign-gold mb-6"></div>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to bring your vision to life? Contact us today to discuss your project requirements.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-elfign-red/10 text-elfign-red">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-900">Phone</span>
                  <span className="block text-gray-600">+1 (555) 123-4567</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-elfign-red/10 text-elfign-red">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-900">Email</span>
                  <span className="block text-gray-600">info@elfignentertainment.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-elfign-red/10 text-elfign-red">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-900">Address</span>
                  <span className="block text-gray-600">
                    123 Production Drive, Suite 101<br />
                    Los Angeles, CA 90028
                  </span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact form column */}
          <div 
            className={cn(
              "md:col-span-3 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
