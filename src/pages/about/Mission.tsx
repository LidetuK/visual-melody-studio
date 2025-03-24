
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Mission - Elfign Entertainment";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-center">Our Mission</h1>
              
              <div className="prose prose-lg mx-auto">
                <p className="lead text-xl text-muted-foreground mb-8 text-center">
                  At Elfign Entertainment, we believe in the power of storytelling to connect, inspire, and transform.
                </p>
                
                <h2 className="text-2xl font-medium mt-12 mb-4">Our Vision</h2>
                <p>
                  To be a leading creative force in the entertainment industry, known for innovative storytelling, 
                  technical excellence, and meaningful content that resonates with audiences worldwide.
                </p>
                
                <h2 className="text-2xl font-medium mt-12 mb-4">Our Mission</h2>
                <p>
                  We create exceptional visual and musical content that entertains, educates, and inspires. 
                  Through our work, we aim to:
                </p>
                
                <ul className="space-y-2 my-6">
                  <li>Tell authentic stories that reflect diverse perspectives and experiences</li>
                  <li>Push creative boundaries through technical innovation and artistic vision</li>
                  <li>Build lasting partnerships with clients, collaborators, and audiences</li>
                  <li>Nurture emerging talent and contribute to the evolution of our industry</li>
                  <li>Create content that stands the test of time and makes a positive impact</li>
                </ul>
                
                <h2 className="text-2xl font-medium mt-12 mb-4">Our Values</h2>
                
                <h3 className="text-xl font-medium mt-8 mb-2">Creative Excellence</h3>
                <p>
                  We are committed to the highest standards of creativity and craftsmanship in everything we do.
                  Our work reflects our dedication to quality and our passion for our craft.
                </p>
                
                <h3 className="text-xl font-medium mt-8 mb-2">Collaboration</h3>
                <p>
                  We believe the best work emerges from diverse perspectives coming together.
                  We foster an environment where ideas are freely shared and every voice is valued.
                </p>
                
                <h3 className="text-xl font-medium mt-8 mb-2">Integrity</h3>
                <p>
                  We conduct our business with honesty, transparency, and respect.
                  We honor our commitments and take responsibility for our work.
                </p>
                
                <h3 className="text-xl font-medium mt-8 mb-2">Innovation</h3>
                <p>
                  We embrace new technologies, techniques, and ideas that advance our craft and enhance our storytelling.
                  We're not afraid to take creative risks and explore uncharted territory.
                </p>
                
                <h3 className="text-xl font-medium mt-8 mb-2">Impact</h3>
                <p>
                  We create content that matters – work that entertains while also inspiring thought, emotion, and action.
                  We measure our success not just by commercial metrics, but by the lasting impact of our stories.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
