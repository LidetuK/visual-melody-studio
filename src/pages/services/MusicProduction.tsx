
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const MusicProduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Music Production | Elfign Entertainment";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Music Production</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Elevate your music with professional production services that bring your creative vision to life.
                </p>
                <div className="space-y-2">
                  <p>
                    At Elfign Entertainment, our music production services combine technical expertise with artistic
                    sensibility to create exceptional sonic experiences. Our state-of-the-art recording studios and 
                    experienced producers are ready to help you craft your unique sound.
                  </p>
                  <p>
                    Whether you're recording a single, an EP, or a full album, we offer comprehensive music production
                    services tailored to your needs and artistic goals.
                  </p>
                </div>
                <div className="pt-4">
                  <Button className="bg-elfign-red hover:bg-elfign-red/90 text-white">
                    Start Your Project
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D" 
                  alt="Music Production Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-heading mb-12 text-center">Our Music Production Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Pre-Production</h3>
                <p className="text-muted-foreground">
                  We work with you to refine your songs, arrangements, and overall concept before recording begins.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Recording</h3>
                <p className="text-muted-foreground">
                  Capture your performance with high-quality equipment and experienced engineers in our professional studios.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Mixing</h3>
                <p className="text-muted-foreground">
                  Our mixing engineers balance and enhance each element of your recording to create a cohesive sound.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Mastering</h3>
                <p className="text-muted-foreground">
                  The final polish that ensures your music sounds professional across all listening platforms and formats.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-heading mb-4">Our Music Production Services</h2>
              <p className="text-muted-foreground">
                Comprehensive solutions for artists, bands, and composers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Studio Recording</h3>
                <p className="text-muted-foreground mb-4">Professional recording services in our state-of-the-art studios.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Mixing & Mastering</h3>
                <p className="text-muted-foreground mb-4">Expert mixing and mastering to perfect your sound.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Arrangement</h3>
                <p className="text-muted-foreground mb-4">Thoughtful musical arrangement to enhance your compositions.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Sound Design</h3>
                <p className="text-muted-foreground mb-4">Creative sound design for unique sonic textures and effects.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Film Scoring</h3>
                <p className="text-muted-foreground mb-4">Original music composition for film, TV, and other visual media.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Remote Sessions</h3>
                <p className="text-muted-foreground mb-4">Collaborate with our producers and engineers from anywhere in the world.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-elfign-black text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading mb-6">Ready to Create Your Next Hit?</h2>
              <p className="text-lg mb-8">
                Contact us today to discuss your project and discover how Elfign Entertainment can help bring your musical vision to life.
              </p>
              <Button size="lg" className="bg-elfign-red hover:bg-elfign-red/90 text-white">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MusicProduction;
