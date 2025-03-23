
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

// Mock project data
const projectData = {
  'the-forgotten-path': {
    title: 'The Forgotten Path',
    category: 'Feature Film',
    year: '2023',
    client: 'Parallel Studios',
    description: 'A feature film about a man who returns to his childhood home to confront his past and discover a forgotten truth.',
    longDescription: 'The Forgotten Path is a dramatic feature film that follows the journey of Daniel Hayes, who returns to his rural hometown after 20 years to settle his recently deceased father\'s estate. What begins as a simple trip becomes a profound exploration of memory, identity, and reconciliation as Daniel uncovers long-buried family secrets that challenge everything he thought he knew about his childhood.',
    services: ['Screenplay Development', 'Production', 'Cinematography', 'Post-production', 'Festival Strategy'],
    mainImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1625&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518930259200-3e5b29f42096?auto=format&fit=crop&w=1626&q=80',
      'https://images.unsplash.com/photo-1597910037310-7dd8ddb93e24?auto=format&fit=crop&w=1742&q=80',
      'https://images.unsplash.com/photo-1532800783378-1bed60adad76?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?auto=format&fit=crop&w=1740&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4'
  },
  'urban-chronicles': {
    title: 'Urban Chronicles',
    category: 'TV Series',
    year: '2022',
    client: 'Metro Networks',
    description: 'A television series exploring the interconnected lives of diverse characters in a bustling metropolis.',
    longDescription: 'Urban Chronicles is an ensemble drama series that weaves together the stories of twelve diverse characters whose lives intersect in unexpected ways across a sprawling urban landscape. Each episode explores themes of connection, isolation, ambition, and redemption in modern city life. The series has been praised for its authentic portrayal of urban experiences and its innovative narrative structure.',
    services: ['Series Development', 'Production', 'Cinematography', 'Editing', 'Sound Design'],
    mainImage: 'https://images.unsplash.com/photo-1578674473215-9e451d8f9bb4?auto=format&fit=crop&w=1548&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?auto=format&fit=crop&w=1642&q=80',
      'https://images.unsplash.com/photo-1531425058292-401bb2c8383d?auto=format&fit=crop&w=1738&q=80',
      'https://images.unsplash.com/photo-1473588848210-9e72f46c3a70?auto=format&fit=crop&w=1738&q=80',
      'https://images.unsplash.com/photo-1517235670158-60614a115235?auto=format&fit=crop&w=1740&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-bright-metropolitan-lights-at-night-4264-large.mp4'
  },
  'harmony': {
    title: 'Harmony',
    category: 'Music Production',
    year: '2023',
    client: 'Azura Records',
    description: 'A complete album production for emerging artist Maya Lin, blending classical influences with modern electronic elements.',
    longDescription: 'Harmony is the debut album of classical-electronic fusion artist Maya Lin. Elfign Entertainment provided full-service music production, from composition consulting and arrangement to recording, mixing, and mastering. The project incorporated a 12-piece string ensemble with cutting-edge electronic production techniques to create a unique soundscape that bridges classical tradition and contemporary innovation.',
    services: ['Composition Consulting', 'Arrangement', 'Recording', 'Mixing', 'Mastering'],
    mainImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1740&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1742&q=80',
      'https://images.unsplash.com/photo-1571678432797-0fd4f9061c4a?auto=format&fit=crop&w=1726&q=80',
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1740&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-man-playing-drums-on-a-stage-with-led-lights-410-large.mp4'
  },
  'ocean-life': {
    title: 'Ocean Life',
    category: 'Documentary',
    year: '2022',
    client: 'National Geographic',
    description: 'A breathtaking documentary exploring the hidden wonders of our ocean ecosystems and the urgent need for conservation.',
    longDescription: 'Ocean Life is a feature-length documentary that takes viewers on a journey through the world\'s most extraordinary marine environments. From vibrant coral reefs to mysterious deep-sea trenches, the film combines stunning underwater cinematography with compelling storytelling to highlight the diversity, beauty, and fragility of ocean ecosystems. The documentary also examines the impact of human activity on marine life and showcases conservation efforts around the globe.',
    services: ['Research & Development', 'Underwater Cinematography', 'Editing', 'Sound Design', 'Distribution Strategy'],
    mainImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1569&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1597626259989-a11e97b7772d?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1576153846485-a68b362a0e3e?auto=format&fit=crop&w=1712&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-blue-underwater-water-bubbles-1742-large.mp4'
  },
  'brand-reimagined': {
    title: 'Brand Reimagined',
    category: 'Advertisement',
    year: '2023',
    client: 'Apex Innovations',
    description: 'A comprehensive advertising campaign for the relaunch of a major tech brand, featuring multiple video spots and photography.',
    longDescription: 'Brand Reimagined was an ambitious marketing campaign for Apex Innovations, a technology company undergoing a complete brand transformation. Elfign Entertainment produced a series of interconnected video advertisements that told the story of the company\'s evolution while highlighting their cutting-edge products. The campaign included cinematic commercials for television broadcast, social media content, website videos, and a comprehensive photography package.',
    services: ['Concept Development', 'Production', 'Cinematography', 'Motion Graphics', 'Photography'],
    mainImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1740&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=1742&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-blue-background-34537-large.mp4'
  },
  'global-summit-2023': {
    title: 'Global Summit 2023',
    category: 'Event Documentation',
    year: '2023',
    client: 'World Economic Forum',
    description: 'Comprehensive video and photography coverage of a major international economic summit.',
    longDescription: 'The Global Summit 2023 was an international gathering of political leaders, business executives, and thought leaders discussing critical economic and environmental challenges. Elfign Entertainment provided complete event documentation services, including multi-camera coverage of keynote speeches, panel discussions, and behind-the-scenes moments. The team delivered daily highlight videos for social media, a comprehensive event documentary, and a curated collection of professional photographs.',
    services: ['Multi-camera Coverage', 'Live Editing', 'Interview Production', 'Photography', 'Daily Highlights'],
    mainImage: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1740&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1740&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-audience-in-a-rock-concert-1485-large.mp4'
  },
  'product-launch': {
    title: 'Product Launch',
    category: 'Commercial Photography',
    year: '2023',
    client: 'Lumina Designs',
    description: 'A high-end product photography campaign for a luxury home lighting collection.',
    longDescription: 'Elfign Entertainment provided comprehensive photography services for the launch of Lumina Designs\' newest collection of luxury lighting fixtures. The project included studio product photography highlighting the craftsmanship and materials of each piece, lifestyle photography showing the products in designed spaces, and atmospheric detail shots that captured the unique lighting effects. The images were used for the brand\'s catalog, website, social media, and print advertising campaign.',
    services: ['Creative Direction', 'Studio Photography', 'Location Photography', 'Retouching', 'Image Licensing'],
    mainImage: 'https://images.unsplash.com/photo-1603706613896-8b61d7ee3e18?auto=format&fit=crop&w=1742&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=1854&q=80',
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=1740&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-man-photographing-a-young-woman-5259-large.mp4'
  },
  'modern-identity': {
    title: 'Modern Identity',
    category: 'Graphics Design',
    year: '2022',
    client: 'Nexus Foundation',
    description: 'A complete brand identity system for a non-profit organization focused on educational innovation.',
    longDescription: 'Modern Identity was a comprehensive branding project for the Nexus Foundation, an organization dedicated to advancing educational opportunities through technology and innovation. Elfign Entertainment\'s design team developed a complete visual identity including logo design, color palette, typography system, design templates for print and digital materials, motion graphics package for video content, and a detailed brand guidelines document to ensure consistent implementation across all platforms.',
    services: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Assets', 'Motion Graphics'],
    mainImage: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?auto=format&fit=crop&w=1554&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1732&q=80',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1746&q=80',
    ],
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-graphic-designer-working-on-a-computer-5495-large.mp4'
  },
};

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      if (slug && projectData[slug as keyof typeof projectData]) {
        setProject(projectData[slug as keyof typeof projectData]);
        document.title = `${projectData[slug as keyof typeof projectData].title} - Elfign Entertainment`;
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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Project Not Found</h1>
            <p className="mb-6 text-gray-600">The project you're looking for doesn't exist or has been moved.</p>
            <Button asChild className="bg-elfign-red hover:bg-elfign-red/90 text-white">
              <Link to="/work">View All Projects</Link>
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
        <section className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.mainImage})` }}
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
                to="/work" 
                className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </Link>
              <span className="inline-block px-4 py-1 bg-elfign-red text-white text-sm font-medium rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                {project.title}
              </h1>
              <div className="h-1 w-20 bg-elfign-gold mb-6"></div>
              <p className="text-xl text-white/90 max-w-xl">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  Project <span className="text-elfign-red">Overview</span>
                </h2>
                <div className="h-1 w-16 bg-elfign-gold mb-6"></div>
                <p className="text-gray-600 mb-8 text-lg">
                  {project.longDescription}
                </p>

                <h3 className="text-xl font-medium mb-4">Services Provided</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {project.services.map((service: string, index: number) => (
                    <li 
                      key={index}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-elfign-gold"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-elfign-red hover:bg-elfign-red/90 text-white"
                    >
                      <Play size={18} className="mr-2" />
                      Watch Project Video
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <video
                        src={project.videoURL}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-medium mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-600">Client</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium">{project.category}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-600">Year</span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-600">Services</span>
                      <span className="font-medium text-right">{project.services.length} Services</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="text-xl font-medium mb-4">Interested in a similar project?</h3>
                  <p className="text-gray-600 mb-4">Contact us to discuss how we can bring your vision to life.</p>
                  <Button 
                    asChild
                    className="w-full bg-elfign-red hover:bg-elfign-red/90 text-white"
                  >
                    <Link to="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Project <span className="text-elfign-red">Gallery</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                A visual showcase of our work on this project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((image: string, index: number) => (
                <div 
                  key={index}
                  className={cn(
                    "overflow-hidden rounded-lg image-scale",
                    index === 0 || index === 3 ? "md:col-span-2" : ""
                  )}
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects Teaser */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Related <span className="text-elfign-red">Projects</span>
              </h2>
              <div className="h-1 w-16 bg-elfign-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Explore more of our work in {project.category}.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(projectData)
                .filter(([key, value]) => 
                  key !== slug && (value as any).category === project.category
                )
                .slice(0, 3)
                .map(([key, value]) => (
                  <Link
                    key={key}
                    to={`/work/${key}`}
                    className="group relative flex flex-col overflow-hidden rounded-lg h-[280px]"
                  >
                    <div className="absolute inset-0 z-0 bg-elfign-black/40 transition-opacity duration-500 group-hover:opacity-70" />
                    
                    <div 
                      className="absolute inset-0 z-0 image-scale"
                      style={{
                        backgroundImage: `url(${(value as any).mainImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    
                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                      <span className="text-xs font-medium text-elfign-gold uppercase tracking-wider">
                        {(value as any).category}
                      </span>
                      <h3 className="text-xl font-medium text-white mt-1 group-hover:underline">
                        {(value as any).title}
                      </h3>
                    </div>
                  </Link>
                ))
              }
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                asChild
                className="bg-elfign-red hover:bg-elfign-red/90 text-white"
              >
                <Link to="/work">
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkDetail;
