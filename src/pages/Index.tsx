
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
import AboutSection from '@/components/home/AboutSection';
import VideoShowcase from '@/components/home/VideoShowcase';
import TeamSection from '@/components/home/TeamSection';
import BehindTheCamera from '@/components/home/BehindTheCamera';
import AIChatWidget from '@/components/common/AIChatWidget';
import { initSmoothScrolling } from '@/lib/smoothScroll';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Set page title
    document.title = "Elfign Entertainment - Premium Film & Music Production";
    // Initialize smooth scrolling
    initSmoothScrolling();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VideoShowcase />
        <AboutSection />
        <About />
        <ConceptToScreen />
        <Services />
        <BehindTheCamera />
        <Stories />
        <BehindScenes />
        <Showcase />
        <TeamSection />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;
