
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Story | Elfign Entertainment";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Our Story</h1>
              <p className="text-xl text-muted-foreground">
                The journey of Elfign Entertainment from its humble beginnings to industry recognition
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbG0lMjBzdHVkaW98ZW58MHx8MHx8fDA%3D" 
                  alt="Elfign Entertainment founding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-heading mb-4">The Beginning</h2>
                <p className="text-muted-foreground">
                  Elfign Entertainment was founded in 2010 by a collective of passionate filmmakers, musicians, and visual artists who shared a common vision: to create compelling content that moves audiences and tells authentic stories.
                </p>
                <p className="text-muted-foreground">
                  Starting with just a small studio in downtown Los Angeles, our team began producing independent short films and music for local artists. Our commitment to quality and innovative storytelling quickly earned us recognition in the local creative community.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
              <div className="space-y-4 order-2 lg:order-1">
                <h2 className="text-3xl font-heading mb-4">Growth & Evolution</h2>
                <p className="text-muted-foreground">
                  As our reputation grew, so did our team and capabilities. By 2015, we had expanded into a full-service production company, adding expertise in animation, post-production, and dedicated music production facilities.
                </p>
                <p className="text-muted-foreground">
                  This period marked our first major commercial successes, with several of our films gaining festival recognition and our music productions reaching wider audiences through strategic partnerships with established distribution channels.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fHww" 
                  alt="Elfign Entertainment studio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF3YXJkc3xlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Elfign Entertainment awards" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-heading mb-4">Recognition & Achievement</h2>
                <p className="text-muted-foreground">
                  The past five years have been a period of accelerated growth and recognition for Elfign Entertainment. Our productions have received numerous industry awards, including prestigious film festival honors and music production accolades.
                </p>
                <p className="text-muted-foreground">
                  We've had the privilege of working with major studios, independent artists, and global brands, bringing our unique creative vision to diverse projects across multiple platforms and media.
                </p>
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto mt-24">
              <h2 className="text-3xl font-heading mb-4">Where We Are Today</h2>
              <p className="text-muted-foreground mb-6">
                Today, Elfign Entertainment stands as a respected name in the entertainment industry, known for our commitment to artistic integrity, technical excellence, and innovative storytelling. With studios in Los Angeles, New York, and Nashville, our team of over 100 creatives continues to push boundaries and set new standards in film and music production.
              </p>
              <p className="text-muted-foreground mb-6">
                While we've grown significantly since our founding, our core mission remains unchanged: to create meaningful content that resonates with audiences and stands the test of time.
              </p>
              <Button className="bg-elfign-red hover:bg-elfign-red/90 text-white mt-4">
                Join Our Journey
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading mb-6">Our Timeline</h2>
              <p className="text-muted-foreground mb-12">
                Key milestones in the Elfign Entertainment journey
              </p>
            </div>
            
            <div className="relative border-l border-elfign-red/30 ml-4 md:ml-0 md:mx-auto md:max-w-3xl space-y-12 pl-8 md:pl-0">
              {/* Timeline items */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-medium">2010</h3>
                  <p className="text-muted-foreground">Founding of Elfign Entertainment</p>
                </div>
                <div className="md:pl-8 relative">
                  <div className="absolute top-0 -left-12 md:-left-4 w-4 h-4 rounded-full bg-elfign-red"></div>
                  <p>Established our first small studio in downtown Los Angeles, focusing on independent film and music production.</p>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-medium">2013</h3>
                  <p className="text-muted-foreground">First Major Recognition</p>
                </div>
                <div className="md:pl-8 relative">
                  <div className="absolute top-0 -left-12 md:-left-4 w-4 h-4 rounded-full bg-elfign-red"></div>
                  <p>Our short film "Echoes" wins at three independent film festivals, putting Elfign on the map.</p>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-medium">2015</h3>
                  <p className="text-muted-foreground">Expansion</p>
                </div>
                <div className="md:pl-8 relative">
                  <div className="absolute top-0 -left-12 md:-left-4 w-4 h-4 rounded-full bg-elfign-red"></div>
                  <p>Added animation and expanded post-production capabilities. Opened our music production studio in Nashville.</p>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-medium">2018</h3>
                  <p className="text-muted-foreground">New York Office</p>
                </div>
                <div className="md:pl-8 relative">
                  <div className="absolute top-0 -left-12 md:-left-4 w-4 h-4 rounded-full bg-elfign-red"></div>
                  <p>Opened our East Coast office to better serve clients and tap into the New York creative community.</p>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-medium">2020</h3>
                  <p className="text-muted-foreground">Major Industry Award</p>
                </div>
                <div className="md:pl-8 relative">
                  <div className="absolute top-0 -left-12 md:-left-4 w-4 h-4 rounded-full bg-elfign-red"></div>
                  <p>Our feature film "Beyond the Horizon" receives industry recognition and critical acclaim.</p>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-medium">2022</h3>
                  <p className="text-muted-foreground">Global Partnerships</p>
                </div>
                <div className="md:pl-8 relative">
                  <div className="absolute top-0 -left-12 md:-left-4 w-4 h-4 rounded-full bg-elfign-red"></div>
                  <p>Established strategic partnerships with global distribution platforms and major studios.</p>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-medium">Today</h3>
                  <p className="text-muted-foreground">Continued Growth</p>
                </div>
                <div className="md:pl-8 relative">
                  <div className="absolute top-0 -left-12 md:-left-4 w-4 h-4 rounded-full bg-elfign-red"></div>
                  <p>Expanding our team, capabilities, and global reach while staying true to our founding vision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
