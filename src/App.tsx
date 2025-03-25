
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import WorkDetail from "./pages/WorkDetail";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Work from "./pages/Work";
import News from "./pages/News";
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

// Inner pages for About section
import OurStory from "./pages/about/OurStory";
import Team from "./pages/about/Team";
import Mission from "./pages/about/Mission";
import Careers from "./pages/about/Careers";

// Inner pages for Services section
import FilmProduction from "./pages/services/FilmProduction";
import MusicProduction from "./pages/services/MusicProduction";
import PostProduction from "./pages/services/PostProduction";
import Animation from "./pages/services/Animation";

// Inner pages for Work section
import Films from "./pages/work/Films";
import MusicVideos from "./pages/work/MusicVideos";
import Commercials from "./pages/work/Commercials";
import AnimationProjects from "./pages/work/AnimationProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/film-production" element={<FilmProduction />} />
          <Route path="/services/music-production" element={<MusicProduction />} />
          <Route path="/services/post-production" element={<PostProduction />} />
          <Route path="/services/animation" element={<Animation />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/films" element={<Films />} />
          <Route path="/work/music-videos" element={<MusicVideos />} />
          <Route path="/work/commercials" element={<Commercials />} />
          <Route path="/work/animation" element={<AnimationProjects />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
