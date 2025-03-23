
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - Elfign Entertainment";
  }, []);

  const services = [
    {
      title: "Feature Films",
      description: "From concept to screen, we produce compelling feature films that captivate audiences worldwide. Our team of experienced filmmakers brings stories to life with stunning visuals and powerful narratives.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3"
    },
    {
      title: "TV Series",
      description: "We create binge-worthy television series with compelling characters and storylines that keep viewers coming back for more. Our productions span genres from drama to comedy to documentary.",
      icon: "📺",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3"
    },
    {
      title: "Documentary Films",
      description: "Our documentary films explore real-world stories with depth and nuance. We shine a light on important issues and fascinating subjects through thoughtful, well-researched storytelling.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
      title: "Advertisements",
      description: "Create impactful brand messages with our premium advertising production services. We bring your marketing vision to life with high-quality visuals that connect with your target audience.",
      icon: "📣",
      image: "https://images.unsplash.com/photo-1581077968192-f6a5597c0223?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
      title: "Event Documentation",
      description: "Preserve your special moments with professional event documentation. Our team captures the essence of your event with cinematic quality and attention to detail.",
      icon: "📽️",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
      title: "Commercial Photoshoots",
      description: "Elevate your brand with stunning commercial photography. Our professional photographers create compelling visual content that tells your brand's story.",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
      title: "Graphic Design",
      description: "Our team of talented designers creates visually stunning graphics that enhance your brand identity across all platforms, from print to digital media.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3"
    },
    {
      title: "Music Production",
      description: "Create the perfect soundtrack for your project with our professional music production services. From original compositions to sound design, we bring your vision to sonic life.",
      icon: "🎵",
      image: "https://images.unsplash.com/photo-1519075619163-c6e5554d3a28?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=2070&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-elfign-black/70 to-elfign-black/40" />
          
          <div className="relative z-10 container h-full flex flex-col justify-center px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-elfign-red text-white text-sm font-medium rounded-full mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                Premium <span className="text-elfign-gold">Production</span> Services
              </h1>
              <div className="h-1 w-20 bg-elfign-gold mb-6"></div>
              <p className="text-xl text-white/90 max-w-xl">
                From concept to screen, we bring your vision to life with exceptional quality and creativity.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Our <span className="text-elfign-red">Expertise</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                We offer a comprehensive range of production services to meet all your entertainment needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elfign-black to-transparent opacity-90" />
                  </div>
                  
                  <div className="relative z-10 p-8 md:p-10">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-2xl font-medium text-white mb-3">{service.title}</h3>
                    <div className="h-1 w-12 bg-elfign-gold mb-4"></div>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Our <span className="text-elfign-red">Process</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                We follow a streamlined process to ensure your project is completed to the highest standards.
              </p>
            </div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-12 md:space-y-0 relative">
                {[
                  { 
                    step: "01", 
                    title: "Consultation", 
                    description: "We begin with a thorough consultation to understand your vision, goals, and requirements for the project."
                  },
                  { 
                    step: "02", 
                    title: "Pre-Production", 
                    description: "Our team develops a detailed plan, including script development, storyboarding, casting, location scouting, and scheduling."
                  },
                  { 
                    step: "03", 
                    title: "Production", 
                    description: "We execute the production phase with our experienced crew, state-of-the-art equipment, and attention to detail."
                  },
                  { 
                    step: "04", 
                    title: "Post-Production", 
                    description: "Our editors, color graders, sound designers, and VFX artists work to perfect your project in post-production."
                  },
                  { 
                    step: "05", 
                    title: "Delivery", 
                    description: "We deliver your finished project in your required format, ready for distribution or exhibition."
                  }
                ].map((process, index) => (
                  <div key={index} className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-6 md:mb-0`}>
                      <div className={`space-y-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <div className={`inline-flex items-center text-elfign-red ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          <span className="text-4xl font-bold">{process.step}</span>
                          <div className="h-0.5 w-8 bg-elfign-red mx-4"></div>
                        </div>
                        <h3 className="text-2xl font-medium">{process.title}</h3>
                        <p className="text-gray-600 max-w-md">{process.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 relative">
                      {/* Circle marker */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                        <div className="h-6 w-6 rounded-full border-4 border-elfign-gold bg-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-elfign-black text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-elfign-black/80" />
            <img 
              src="https://images.unsplash.com/photo-1599240211563-c1bd9496cdf7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
              alt="Background" 
              className="object-cover h-full w-full opacity-40"
            />
          </div>
          
          <div className="container relative z-10 px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to bring your <span className="text-elfign-gold">vision</span> to life?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project and discover how Elfign Entertainment can help you create something extraordinary.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-elfign-red hover:bg-elfign-red/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
