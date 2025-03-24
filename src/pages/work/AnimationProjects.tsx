
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AnimationProject {
  id: string;
  title: string;
  year: string;
  type: string;
  director: string;
  description: string;
  image: string;
}

const AnimationProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Animation Projects - Elfign Entertainment";
  }, []);

  const projects: AnimationProject[] = [
    {
      id: "celestial-dreams",
      title: "Celestial Dreams",
      year: "2023",
      type: "Animated Feature",
      director: "Emily Thompson",
      description: "A magical journey through dreamscapes and celestial worlds that explores the power of imagination.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "robot-revolution",
      title: "Robot Revolution",
      year: "2022",
      type: "Animated Series",
      director: "David Kim",
      description: "Set in a futuristic world where robots and humans coexist, this series follows a group of robots discovering their autonomy.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "wilderland",
      title: "Wilderland",
      year: "2021",
      type: "Animated Feature",
      director: "Alexander Reed",
      description: "A visually stunning adventure exploring the delicate balance between nature and civilization through the eyes of forest creatures.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "mystic-isles",
      title: "Mystic Isles",
      year: "2021",
      type: "Animated Series",
      director: "Sophia Chen",
      description: "A group of adventurers discover a chain of magical islands, each with its own unique ecosystem and mythical creatures.",
      image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "quantum-quest",
      title: "Quantum Quest",
      year: "2020",
      type: "Interactive Animation",
      director: "Marcus Johnson",
      description: "A groundbreaking interactive experience that combines traditional animation with cutting-edge technology to create a choose-your-own-adventure story.",
      image: "https://images.unsplash.com/photo-1532289735118-8a2c0b882e4a?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "ocean-secrets",
      title: "Ocean Secrets",
      year: "2019",
      type: "Animated Short",
      director: "Olivia Martinez",
      description: "Award-winning short film depicting the wonders and mysteries of deep ocean ecosystems through stylized animation.",
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1650&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Animation Projects</h1>
              <p className="text-xl text-muted-foreground">
                Imaginative worlds brought to life through cutting-edge animation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map((project) => (
                <Link 
                  key={project.id} 
                  to={`/work/${project.id}`}
                  className="group block"
                >
                  <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">Directed by {project.director}</p>
                      <p className="text-sm line-clamp-3">{project.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild variant="outline">
                <Link to="/work">Explore All Works</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnimationProjects;
