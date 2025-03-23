
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });
  
  const sectionRefs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
    section4: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Elfign Entertainment";

    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        const key = Object.keys(sectionRefs)[index];
        const ref = sectionRefs[key as keyof typeof sectionRefs].current;
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: 'Alexander Reed',
      role: 'CEO & Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1287&q=80',
      bio: 'With 20+ years in film and television, Alex leads our creative vision and strategic direction.'
    },
    {
      name: 'Sophia Chen',
      role: 'Head of Production',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1287&q=80',
      bio: 'Sophia oversees all production activities, ensuring projects are delivered on time and within budget.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Director of Photography',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1287&q=80',
      bio: 'An award-winning cinematographer, Marcus brings a distinctive visual style to every project.'
    },
    {
      name: 'Olivia Martinez',
      role: 'Music Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1287&q=80',
      bio: 'Olivia leads our music production team, creating original compositions and sound design.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617175581263-9a1d36608ae0?auto=format&fit=crop&w=1760&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-elfign-black/70 to-elfign-black/40" />
          
          <div className="relative z-10 container h-full flex flex-col justify-center px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-elfign-red text-white text-sm font-medium rounded-full mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                Crafting Visual Stories That <span className="text-elfign-gold">Inspire</span>
              </h1>
              <div className="h-1 w-20 bg-elfign-gold mb-6"></div>
              <p className="text-xl text-white/90 max-w-xl">
                Founded in 2010, Elfign Entertainment combines technical expertise with artistic vision to create compelling content across multiple mediums.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section 
          ref={sectionRefs.section1}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className={cn(
                  "transition-all duration-1000 transform",
                  isVisible.section1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                )}
              >
                <span className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                  A Journey of Creative <span className="text-elfign-red">Excellence</span>
                </h2>
                <div className="h-1 w-16 bg-elfign-gold mb-6"></div>
                <p className="text-gray-600 mb-4 text-lg">
                  Elfign Entertainment was founded with a simple yet ambitious vision: to tell stories that matter through exceptional visual media.
                </p>
                <p className="text-gray-600 mb-6">
                  What began as a small production team has grown into a comprehensive entertainment company with expertise across film, television, music, and design. Throughout our journey, we've maintained our commitment to quality, creativity, and client satisfaction.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we're proud to work with clients ranging from major studios and networks to independent filmmakers and emerging brands. Our diverse team brings together veteran industry professionals and innovative new talent to create work that engages audiences and achieves our clients' objectives.
                </p>
              </div>
              
              <div 
                className={cn(
                  "relative transition-all duration-1000 transform",
                  isVisible.section1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                )}
              >
                <div className="absolute top-6 -left-6 w-full h-full rounded-lg border-2 border-elfign-gold"></div>
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1740&q=80"
                  alt="Film production team on set"
                  className="rounded-lg relative z-10 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section 
          ref={sectionRefs.section2}
          className="py-16 md:py-24 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div 
              className={cn(
                "max-w-xl mx-auto text-center mb-16 transition-all duration-1000",
                isVisible.section2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <span className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                What Drives <span className="text-elfign-red">Us</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Our core values inform every decision we make and every project we undertake.
              </p>
            </div>

            <div 
              className={cn(
                "grid gap-6 md:grid-cols-2 lg:grid-cols-4 transition-all duration-1000",
                isVisible.section2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-elfign-red/10 rounded-full flex items-center justify-center text-elfign-red mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.78 11.12a3 3 0 1 0-4.24-4.24" />
                    <path d="m21 7-2.4 2.4" />
                    <path d="m3 7 2.4 2.4" />
                    <path d="m21 17-2.4-2.4" />
                    <path d="m3 17 2.4-2.4" />
                    <path d="M10.8 20.4a2.4 2.4 0 1 0 2.4-2.4 2.4 2.4 0 1 0-2.4 2.4Z" />
                    <path d="m8.4 15.6 3.6-3.6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Creative Excellence</h3>
                <p className="text-gray-600">
                  We push boundaries and challenge conventions to create distinctive, memorable content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-elfign-red/10 rounded-full flex items-center justify-center text-elfign-red mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Passion for Storytelling</h3>
                <p className="text-gray-600">
                  We believe in the power of stories to inform, entertain, and inspire positive change.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-elfign-red/10 rounded-full flex items-center justify-center text-elfign-red mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.2 13.8v-3.6a2.4 2.4 0 0 0-2.4-2.4h0a2.4 2.4 0 0 0-2.4 2.4v3.6" />
                    <path d="M13.6 10.6H12" />
                    <rect width="14.4" height="14.4" x="4.8" y="4.8" rx="2.4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Client-Focused Approach</h3>
                <p className="text-gray-600">
                  We build collaborative partnerships with our clients to achieve their vision and goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-elfign-red/10 rounded-full flex items-center justify-center text-elfign-red mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 6 2-2h10l2 2H5Z" />
                    <path d="M17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3" />
                    <path d="M17 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M13 15h-3a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Technical Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of technical quality across all our productions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section 
          ref={sectionRefs.section3}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div 
              className={cn(
                "max-w-xl mx-auto text-center mb-16 transition-all duration-1000",
                isVisible.section3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <span className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Meet the <span className="text-elfign-red">Team</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Our diverse team brings together extensive experience and fresh perspectives.
              </p>
            </div>

            <div 
              className={cn(
                "grid gap-8 md:grid-cols-2 lg:grid-cols-4 transition-all duration-1000",
                isVisible.section3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group text-center"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elfign-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-elfign-red">{member.role}</p>
                </div>
              ))}
            </div>

            <div 
              className={cn(
                "mt-12 text-center transition-all duration-1000 delay-300",
                isVisible.section3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-gray-600 mb-6">
                Our full team includes over 40 talented professionals across production, post-production, music, and design.
              </p>
              <Button 
                asChild
                className="bg-elfign-red hover:bg-elfign-red/90 text-white"
              >
                <Link to="/contact">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section 
          ref={sectionRefs.section4}
          className="py-16 md:py-24 bg-elfign-black text-white"
        >
          <div className="container px-4 md:px-6">
            <div 
              className={cn(
                "max-w-xl mx-auto text-center mb-16 transition-all duration-1000",
                isVisible.section4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <span className="inline-block px-4 py-1 bg-elfign-red/20 text-elfign-red text-sm font-medium rounded-full mb-4">
                Our Achievements
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Recognition & <span className="text-elfign-gold">Awards</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg">
                Our work has been recognized by industry peers and received numerous accolades.
              </p>
            </div>

            <div 
              className={cn(
                "grid gap-6 md:grid-cols-3 transition-all duration-1000",
                isVisible.section4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-elfign-gold/20 rounded-full flex items-center justify-center text-elfign-gold mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                    <path d="M15 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
                    <path d="M9.7 9a3 3 0 1 0 4.6 0" />
                    <path d="M3 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Industry Recognition</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Cannes Film Festival Selection (2020, 2022)</li>
                  <li>Emmy Award for Outstanding Cinematography</li>
                  <li>Grammy Nomination for Score Composition</li>
                  <li>Sundance Film Festival Jury Prize</li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-elfign-gold/20 rounded-full flex items-center justify-center text-elfign-gold mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4" />
                    <path d="m4.93 10.93 2.83-2.83" />
                    <path d="M2 18h4" />
                    <path d="m19.07 10.93-2.83-2.83" />
                    <path d="M18 18h4" />
                    <path d="m10.93 19.07 2.83 2.83" />
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Creative Excellence</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>15+ International Advertising Awards</li>
                  <li>Best Documentary Feature (National Film Board)</li>
                  <li>Excellence in Production Design Award</li>
                  <li>Innovation in Digital Storytelling Award</li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-elfign-gold/20 rounded-full flex items-center justify-center text-elfign-gold mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 16.5V10a4 4 0 0 1 8 0v6.5" />
                    <path d="M18 9a3 3 0 0 0-3-3h-1" />
                    <path d="M18 16.5v-4a2.5 2.5 0 0 0-5 0" />
                    <path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M11 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Music Recognition</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Billboard Music Award for Soundtrack</li>
                  <li>Best Original Score (Film Critics Circle)</li>
                  <li>Music Supervision Excellence Award</li>
                  <li>Outstanding Sound Design (Audio Engineers Society)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Ready to Start Your <span className="text-elfign-red">Project</span>?
              </h2>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Contact us today to discuss how Elfign Entertainment can help bring your vision to life. Our team is ready to collaborate on your next creative project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-elfign-red hover:bg-elfign-red/90 text-white"
                >
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-elfign-black text-elfign-black hover:bg-elfign-black/5"
                >
                  <Link to="/work">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
