
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Showcase from '@/components/home/Showcase';
import Contact from '@/components/home/Contact';
import ConceptToScreen from '@/components/home/ConceptToScreen';
import BehindScenes from '@/components/home/BehindScenes';
import Stories from '@/components/home/Stories';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Set page title
    document.title = "Elfign Entertainment - Premium Film & Music Production";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <ConceptToScreen />
        <Services />
        <BehindScenes />
        <Stories />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
