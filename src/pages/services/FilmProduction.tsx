
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const FilmProduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Film Production | Elfign Entertainment";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Film Production</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  From concept to final delivery, our film production services bring your vision to life with creativity and technical excellence.
                </p>
                <div className="space-y-2">
                  <p>
                    At Elfign Entertainment, we offer comprehensive film production services that cover every aspect of the filmmaking process. Our experienced team brings together creative vision and technical expertise to deliver exceptional results for features, shorts, documentaries, and more.
                  </p>
                  <p>
                    We understand that each project is unique, which is why we provide customized solutions tailored to your specific needs, budget, and timeline.
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
                  src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbSUyMHByb2R1Y3Rpb258ZW58MHx8MHx8fDA%3D" 
                  alt="Film Production" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-heading mb-12 text-center">Our Film Production Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Development</h3>
                <p className="text-muted-foreground">
                  We work with you to develop concepts, scripts, and storyboards that align with your vision and goals.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Pre-Production</h3>
                <p className="text-muted-foreground">
                  Our team handles casting, location scouting, scheduling, and all logistical aspects to ensure a smooth production.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Production</h3>
                <p className="text-muted-foreground">
                  Using state-of-the-art equipment and industry-leading techniques, we capture your story with precision and artistic flair.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Post-Production</h3>
                <p className="text-muted-foreground">
                  Our editing, sound, color, and visual effects specialists refine your project into its final, polished form.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-heading mb-4">Our Film Production Services</h2>
              <p className="text-muted-foreground">
                Comprehensive solutions for every stage of your film project
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Feature Films</h3>
                <p className="text-muted-foreground mb-4">Full-service production for feature-length films across all genres.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Documentaries</h3>
                <p className="text-muted-foreground mb-4">Compelling storytelling that captures real-world subjects and events.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Short Films</h3>
                <p className="text-muted-foreground mb-4">Concise, impactful films for festivals, promotions, or specific audiences.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Corporate Videos</h3>
                <p className="text-muted-foreground mb-4">Professional videos that effectively communicate your brand message.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Music Videos</h3>
                <p className="text-muted-foreground mb-4">Creative visual interpretations that enhance musical experiences.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Commercials</h3>
                <p className="text-muted-foreground mb-4">Engaging advertisements that capture attention and drive results.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-elfign-black text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading mb-6">Ready to Bring Your Film to Life?</h2>
              <p className="text-lg mb-8">
                Contact us today to discuss your project and discover how Elfign Entertainment can help turn your vision into reality.
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

export default FilmProduction;
