
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const PostProduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Post-Production | Elfign Entertainment";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Post-Production</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Transform your raw footage into cinematic masterpieces with our comprehensive post-production services.
                </p>
                <div className="space-y-2">
                  <p>
                    At Elfign Entertainment, our post-production team combines technical expertise with creative vision to 
                    elevate your project. From editing and color grading to sound design and visual effects, we provide 
                    the finishing touches that turn good content into exceptional content.
                  </p>
                  <p>
                    We understand that post-production is where the magic happens, where all the elements come together 
                    to create a cohesive and impactful final product.
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
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvc3QlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww" 
                  alt="Post-Production Suite" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-heading mb-12 text-center">Our Post-Production Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Video Editing</h3>
                <p className="text-muted-foreground">
                  Our editors craft compelling narratives, ensuring smooth pacing, seamless transitions, and engaging storytelling.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Color Grading</h3>
                <p className="text-muted-foreground">
                  Enhance mood, atmosphere, and visual consistency with our expert color grading services.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Sound Design & Mixing</h3>
                <p className="text-muted-foreground">
                  Create immersive audio experiences with our comprehensive sound design, editing, and mixing services.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Visual Effects (VFX)</h3>
                <p className="text-muted-foreground">
                  Add stunning visual elements and effects that enhance your storytelling and create memorable moments.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Motion Graphics</h3>
                <p className="text-muted-foreground">
                  Enhance your content with dynamic text, animated logos, and engaging graphic elements.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Finishing & Delivery</h3>
                <p className="text-muted-foreground">
                  Complete quality control, format conversions, and delivery preparation for any distribution channel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1574717024453-354056aad6d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww" 
                  alt="Post-Production Workflow" 
                  className="rounded-lg w-full"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-heading mb-4">Our Post-Production Approach</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center shrink-0 mr-4 mt-1">
                      <span className="font-medium">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Initial Review</h3>
                      <p className="text-muted-foreground">We thoroughly review your raw footage and assets to understand your vision and identify the best approach.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center shrink-0 mr-4 mt-1">
                      <span className="font-medium">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Collaborative Planning</h3>
                      <p className="text-muted-foreground">We work closely with you to define clear objectives, style preferences, and creative direction.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center shrink-0 mr-4 mt-1">
                      <span className="font-medium">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Specialized Execution</h3>
                      <p className="text-muted-foreground">Our team of specialists applies their expertise to each aspect of post-production, from editing to color grading.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-elfign-red/10 text-elfign-red rounded-full flex items-center justify-center shrink-0 mr-4 mt-1">
                      <span className="font-medium">04</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Review & Refinement</h3>
                      <p className="text-muted-foreground">We provide opportunities for feedback and make revisions to ensure the final product meets your expectations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-elfign-black text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading mb-6">Ready to Finalize Your Project?</h2>
              <p className="text-lg mb-8">
                Contact us today to discuss your post-production needs and discover how our expert team can help bring your vision to life.
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

export default PostProduction;
