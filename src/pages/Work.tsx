
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Work - Elfign Entertainment";
  }, []);

  const [filter, setFilter] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState<string | null>(null);

  const projects = [
    {
      id: "beyond-horizon",
      title: "Beyond The Horizon",
      category: "feature-film",
      categoryLabel: "Feature Film",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1618329340733-ab49d9a5762d?auto=format&fit=crop&q=80&w=2091&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "A story of discovery and adventure as our protagonists journey to uncover ancient mysteries."
    },
    {
      id: "city-echoes",
      title: "City Echoes",
      category: "tv-series",
      categoryLabel: "TV Series",
      year: "2022",
      thumbnail: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "An urban drama exploring the interconnected lives of city dwellers in modern metropolis."
    },
    {
      id: "natures-voice",
      title: "Nature's Voice",
      category: "documentary",
      categoryLabel: "Documentary",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1516383607781-913a19294fd1?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "An intimate look at the endangered ecosystems and the efforts to preserve them for future generations."
    },
    {
      id: "pure-motion",
      title: "Pure Motion",
      category: "advertisement",
      categoryLabel: "Advertisement",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1606293926989-43e9bea08b2b?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "A dynamic advertisement campaign for a luxury car brand, showcasing precision and elegance."
    },
    {
      id: "urban-symphony",
      title: "Urban Symphony",
      category: "music-production",
      categoryLabel: "Music Production",
      year: "2022",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "A musical journey through the rhythms and melodies inspired by city life."
    },
    {
      id: "vivid-moments",
      title: "Vivid Moments",
      category: "commercial-photo",
      categoryLabel: "Commercial Photography",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "A series of striking commercial photographs for a major fashion brand's seasonal campaign."
    },
    {
      id: "digital-dreamscape",
      title: "Digital Dreamscape",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "Creative digital designs that push the boundaries of imagination and visual storytelling."
    },
    {
      id: "festival-highlights",
      title: "Global Arts Festival",
      category: "event-documentation",
      categoryLabel: "Event Documentation",
      year: "2022",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3",
      videoUrl: "https://player.vimeo.com/video/517638626",
      description: "Comprehensive documentation of an international arts festival, capturing key moments and performances."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'feature-film', label: 'Feature Films' },
    { id: 'tv-series', label: 'TV Series' },
    { id: 'documentary', label: 'Documentaries' },
    { id: 'advertisement', label: 'Advertisements' },
    { id: 'event-documentation', label: 'Events' },
    { id: 'commercial-photo', label: 'Photography' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'music-production', label: 'Music Production' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596262594491-671d8224c354?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-elfign-black/70 to-elfign-black/40" />
          
          <div className="relative z-10 container h-full flex flex-col justify-center px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-elfign-red text-white text-sm font-medium rounded-full mb-4">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                Showcasing Our <span className="text-elfign-gold">Work</span>
              </h1>
              <div className="h-1 w-20 bg-elfign-gold mb-6"></div>
              <p className="text-xl text-white/90 max-w-xl">
                Explore our portfolio of premium productions across film, television, music, and more.
              </p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Filter */}
        <section className="py-12 bg-white sticky top-20 z-20 border-b border-gray-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category.id 
                      ? 'bg-elfign-red text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elfign-black to-transparent opacity-70" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        onClick={() => setShowVideoModal(project.id)}
                        size="lg"
                        className="bg-elfign-red hover:bg-elfign-red/90 text-white"
                      >
                        <Play size={20} className="mr-2" />
                        Watch Preview
                      </Button>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-elfign-gold/90 text-elfign-black text-xs font-medium rounded-full mb-2">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-xl font-medium text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">{project.year}</span>
                      <Link 
                        to={`/work/${project.id}`}
                        className="text-elfign-red hover:text-elfign-red/80 text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-800">No projects found in this category</h3>
                <p className="text-gray-600 mt-2">Please select another category or check back later for updates.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Awards Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Award-Winning <span className="text-elfign-red">Productions</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Our work has been recognized by leading industry awards and festivals.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { name: "Golden Globe Award", year: "2023", category: "Best Feature Film" },
                { name: "Cannes Film Festival", year: "2022", category: "Official Selection" },
                { name: "Emmy Award", year: "2023", category: "Outstanding Documentary" },
                { name: "Clio Award", year: "2022", category: "Best Advertisement" },
                { name: "Berlin Film Festival", year: "2023", category: "Audience Choice" },
                { name: "Sundance Film Festival", year: "2022", category: "Special Jury Prize" },
                { name: "Grammy Award", year: "2023", category: "Best Score" },
                { name: "D&AD Award", year: "2022", category: "Best Design" }
              ].map((award, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm border border-gray-100"
                >
                  <div className="mb-4">
                    <div className="h-16 w-16 bg-elfign-gold/10 rounded-full flex items-center justify-center text-elfign-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
                        <path d="M15 7a4 4 0 1 0-8 0" />
                        <path d="M17 14v7" />
                        <path d="M7 14v7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium">{award.name}</h3>
                  <p className="text-gray-500 text-sm">{award.year}</p>
                  <p className="text-elfign-red font-medium text-sm mt-2">{award.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-elfign-black text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-elfign-black/80" />
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1740&q=80" 
              alt="Background" 
              className="object-cover h-full w-full opacity-40"
            />
          </div>
          
          <div className="container relative z-10 px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to create your next <span className="text-elfign-gold">masterpiece</span>?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate on your next project and create something extraordinary together.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-elfign-red hover:bg-elfign-red/90 transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in">
          <div className="relative w-11/12 max-w-5xl aspect-video bg-black">
            <button 
              onClick={() => setShowVideoModal(null)}
              className="absolute -top-10 right-0 text-white hover:text-elfign-gold"
            >
              Close
            </button>
            <iframe 
              src={projects.find(p => p.id === showVideoModal)?.videoUrl} 
              className="w-full h-full" 
              frameBorder="0" 
              allow="autoplay; fullscreen" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Work;
