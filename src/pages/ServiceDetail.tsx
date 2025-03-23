
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock service data
const serviceData = {
  'feature-films': {
    title: 'Feature Films',
    description: 'Award-winning feature film production from concept to screen.',
    longDescription: 'Our feature film production encompasses the entire lifecycle from concept development and screenplay to filming, post-production, and distribution. With state-of-the-art equipment and a team of experienced professionals, we create compelling cinematic experiences that resonate with audiences worldwide.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1740&q=80',
    process: [
      { title: 'Development', description: 'Concept creation, screenplay writing, and pre-visualization.' },
      { title: 'Pre-production', description: 'Location scouting, casting, crew assembly, and scheduling.' },
      { title: 'Production', description: 'Principal photography with experienced crew and cutting-edge equipment.' },
      { title: 'Post-production', description: 'Editing, sound design, visual effects, and color grading.' },
      { title: 'Distribution', description: 'Festival submissions, theatrical release, and streaming platform placement.' }
    ],
    caseStudies: [
      { title: 'The Forgotten Path', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1625&q=80' },
      { title: 'Horizon Line', image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Urban Solitude', image: 'https://images.unsplash.com/photo-1533488069324-a0a11d10ab40?auto=format&fit=crop&w=1740&q=80' }
    ]
  },
  'tv-series': {
    title: 'TV Series',
    description: 'Compelling episodic content for television and streaming platforms.',
    longDescription: 'Our television production team specializes in creating episodic content that keeps viewers engaged season after season. From drama to comedy, documentary to reality, we develop and produce series that meet the highest standards of quality for both traditional broadcast networks and streaming platforms.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1746&q=80',
    process: [
      { title: 'Series Development', description: 'Concept creation, pilot writing, and season arc planning.' },
      { title: 'Pre-production', description: 'Location scouting, casting, crew assembly, and scheduling for the series.' },
      { title: 'Production', description: 'Episodic filming with consistent quality and efficiency.' },
      { title: 'Post-production', description: 'Episode editing, sound design, and visual continuity.' },
      { title: 'Distribution', description: 'Network pitching, streaming platform negotiation, and promotional strategy.' }
    ],
    caseStudies: [
      { title: 'Urban Chronicles', image: 'https://images.unsplash.com/photo-1578674473215-9e451d8f9bb4?auto=format&fit=crop&w=1548&q=80' },
      { title: 'The Night Shift', image: 'https://images.unsplash.com/photo-1606085718603-a9ecb94c6de2?auto=format&fit=crop&w=1640&q=80' },
      { title: 'Family Matters', image: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f?auto=format&fit=crop&w=1740&q=80' }
    ]
  },
  'documentary-films': {
    title: 'Documentary Films',
    description: 'Powerful documentary storytelling that informs and inspires.',
    longDescription: 'Our documentary film division is dedicated to telling important true stories that educate, inspire, and create impact. Through careful research, authentic interviews, and compelling visual storytelling, we craft documentaries that shine a light on fascinating subjects and important issues.',
    image: 'https://images.unsplash.com/photo-1516281717304-181e285c6e58?auto=format&fit=crop&w=1742&q=80',
    process: [
      { title: 'Research & Development', description: 'Topic research, subject interviews, and storyline development.' },
      { title: 'Pre-production', description: 'Location scouting, scheduling, and documentary treatment.' },
      { title: 'Field Production', description: 'On-location filming, interviews, and b-roll capture.' },
      { title: 'Post-production', description: 'Documentary structure editing, narrative crafting, and finishing.' },
      { title: 'Distribution', description: 'Festival circuit, educational distribution, and streaming placement.' }
    ],
    caseStudies: [
      { title: 'Ocean Life', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1569&q=80' },
      { title: 'Urban Explorers', image: 'https://images.unsplash.com/photo-1596207891316-23851be3cc20?auto=format&fit=crop&w=1632&q=80' },
      { title: 'The Artisan Way', image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1740&q=80' }
    ]
  },
  'advertisement': {
    title: 'Advertisement',
    description: 'Creative and effective commercial production for brands.',
    longDescription: 'Our advertising production team works closely with brands and agencies to create compelling commercials that drive results. From concept to completion, we combine creativity and strategic thinking to produce advertisements that capture attention and communicate effectively across all platforms.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1742&q=80',
    process: [
      { title: 'Creative Concept', description: 'Brand strategy, concept development, and storyboarding.' },
      { title: 'Pre-production', description: 'Casting, location scouting, and production planning.' },
      { title: 'Production', description: 'High-quality filming with attention to brand details.' },
      { title: 'Post-production', description: 'Editing, motion graphics, sound design, and color grading.' },
      { title: 'Delivery', description: 'Multi-platform optimization and campaign implementation support.' }
    ],
    caseStudies: [
      { title: 'Brand Reimagined', image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Lifestyle Series', image: 'https://images.unsplash.com/photo-1575535468632-345892291673?auto=format&fit=crop&w=1742&q=80' },
      { title: 'Product Launch', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1740&q=80' }
    ]
  },
  'events-documentation': {
    title: 'Events Documentation',
    description: 'Comprehensive coverage of corporate and special events.',
    longDescription: 'Our event documentation services provide comprehensive coverage of corporate meetings, conferences, product launches, and special occasions. We create polished, professional recordings that capture the essence of your event for archives, marketing materials, or online distribution.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1740&q=80',
    process: [
      { title: 'Event Planning', description: 'Timeline analysis, shot list creation, and technical preparation.' },
      { title: 'Technical Setup', description: 'Multiple camera positioning, audio engineering, and lighting design.' },
      { title: 'Live Coverage', description: 'Professional filming of presentations, interactions, and key moments.' },
      { title: 'Post-production', description: 'Editing, highlight creation, and full event documentation.' },
      { title: 'Delivery', description: 'Fast turnaround options and various delivery formats.' }
    ],
    caseStudies: [
      { title: 'Global Summit 2023', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Tech Conference', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Charity Gala', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1740&q=80' }
    ]
  },
  'commercial-photography': {
    title: 'Commercial Photography',
    description: 'High-quality photography for commercial and editorial use.',
    longDescription: 'Our photography team delivers striking images for advertising, editorial, and corporate needs. From product photography to lifestyle shoots, corporate portraits to architectural documentation, we provide images that communicate your message with clarity and visual impact.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1740&q=80',
    process: [
      { title: 'Creative Brief', description: 'Client needs assessment, shot list development, and style direction.' },
      { title: 'Pre-production', description: 'Location/studio preparation, prop styling, and technical planning.' },
      { title: 'Photography Session', description: 'Professional shooting with lighting expertise and creative direction.' },
      { title: 'Post-processing', description: 'Image selection, retouching, and color correction.' },
      { title: 'Delivery', description: 'High-resolution images optimized for print and digital use.' }
    ],
    caseStudies: [
      { title: 'Product Launch', image: 'https://images.unsplash.com/photo-1603706613896-8b61d7ee3e18?auto=format&fit=crop&w=1742&q=80' },
      { title: 'Corporate Identity', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Lifestyle Campaign', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1740&q=80' }
    ]
  },
  'graphics-design': {
    title: 'Graphics Design',
    description: 'Creative visual design solutions for all media formats.',
    longDescription: 'Our graphic design team creates visual solutions for brand identity, marketing materials, digital media, and film projects. With a focus on clear communication and aesthetic excellence, we develop designs that strengthen your brand and engage your audience across all platforms.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1742&q=80',
    process: [
      { title: 'Design Brief', description: 'Client goals assessment, audience analysis, and creative direction.' },
      { title: 'Concept Development', description: 'Sketching, ideation, and preliminary design options.' },
      { title: 'Design Refinement', description: 'Concept selection, detailed design work, and client feedback incorporation.' },
      { title: 'Finalization', description: 'File preparation, color calibration, and technical optimization.' },
      { title: 'Implementation', description: 'Asset delivery, brand guidelines, and application support.' }
    ],
    caseStudies: [
      { title: 'Modern Identity', image: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?auto=format&fit=crop&w=1554&q=80' },
      { title: 'Campaign Materials', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Digital Platform', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1732&q=80' }
    ]
  },
  'music-production': {
    title: 'Music Production',
    description: 'Original music composition and production for all mediums.',
    longDescription: 'Our music production department creates original compositions, scores, and sound design for film, television, advertising, and standalone projects. From orchestral arrangements to electronic music, our composers and producers craft audio that enhances storytelling and creates emotional impact.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1742&q=80',
    process: [
      { title: 'Creative Direction', description: 'Project brief, reference tracks, and stylistic approach.' },
      { title: 'Composition', description: 'Theme development, arrangement, and demo creation.' },
      { title: 'Production', description: 'Recording sessions, performance direction, and sound engineering.' },
      { title: 'Post-production', description: 'Mixing, mastering, and technical optimization.' },
      { title: 'Integration', description: 'Synchronization to visual media and final delivery.' }
    ],
    caseStudies: [
      { title: 'Harmony', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Film Score', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1740&q=80' },
      { title: 'Commercial Soundtrack', image: 'https://images.unsplash.com/photo-1571678432797-0fd4f9061c4a?auto=format&fit=crop&w=1726&q=80' }
    ]
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [service, setService] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      if (slug && serviceData[slug as keyof typeof serviceData]) {
        setService(serviceData[slug as keyof typeof serviceData]);
        document.title = `${serviceData[slug as keyof typeof serviceData].title} - Elfign Entertainment`;
      }
      setIsLoading(false);
      setIsVisible(true);
    }, 300);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse w-12 h-12 rounded-full bg-elfign-red/50"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Service Not Found</h1>
            <p className="mb-6 text-gray-600">The service you're looking for doesn't exist or has been moved.</p>
            <Button asChild className="bg-elfign-red hover:bg-elfign-red/90 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-elfign-black/70 to-elfign-black/40" />
          
          <div className="relative z-10 container h-full flex flex-col justify-center px-4 md:px-6">
            <div 
              className={cn(
                "max-w-3xl transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <Link 
                to="/services" 
                className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                {service.title}
              </h1>
              <div className="h-1 w-20 bg-elfign-gold mb-6"></div>
              <p className="text-xl text-white/90 max-w-xl">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  Service <span className="text-elfign-red">Overview</span>
                </h2>
                <div className="h-1 w-16 bg-elfign-gold mb-6"></div>
                <p className="text-gray-600 mb-6 text-lg">
                  {service.longDescription}
                </p>
                <Button 
                  asChild
                  className="bg-elfign-red hover:bg-elfign-red/90 text-white"
                >
                  <Link to="/contact">
                    Discuss Your Project
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-elfign-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-elfign-red/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {service.caseStudies.slice(0, 2).map((caseStudy: any, index: number) => (
                    <div 
                      key={index}
                      className="overflow-hidden rounded-lg aspect-[4/3]"
                    >
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                  <div className="overflow-hidden rounded-lg aspect-[4/3] col-span-2">
                    <img
                      src={service.caseStudies[2].image}
                      alt={service.caseStudies[2].title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Our <span className="text-elfign-red">Process</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                How we bring your vision to life through our proven methodology.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
              <div className="space-y-12 relative z-10">
                {service.process.map((step: any, index: number) => (
                  <div 
                    key={index}
                    className={cn(
                      "flex flex-col lg:flex-row lg:items-center gap-6",
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse text-right"
                    )}
                  >
                    <div className={cn(
                      "flex items-center",
                      index % 2 === 0 ? "lg:justify-end" : "lg:justify-start",
                      "lg:w-1/2"
                    )}>
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-md lg:max-w-sm">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="flex items-center justify-center rounded-full bg-elfign-red/10 w-10 h-10 text-elfign-red font-medium">
                            {index + 1}
                          </div>
                          <h3 className="text-lg font-medium">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-0">
                      <div className="w-4 h-4 rounded-full bg-elfign-gold"></div>
                    </div>
                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-elfign-black text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Ready to Start Your <span className="text-elfign-gold">Project</span>?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us today to discuss how our {service.title.toLowerCase()} services can bring your vision to life.
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
                  className="border-white text-white hover:bg-white/10"
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

export default ServiceDetail;
