
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Film {
  id: string;
  title: string;
  year: string;
  genre: string;
  director: string;
  description: string;
  image: string;
}

const Films = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Films - Elfign Entertainment";
  }, []);

  const films: Film[] = [
    {
      id: "echoes-of-tomorrow",
      title: "Echoes of Tomorrow",
      year: "2023",
      genre: "Science Fiction",
      director: "Alexander Reed",
      description: "A thought-provoking exploration of humanity's relationship with artificial intelligence and the ethical dilemmas of a near future.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "beyond-the-horizon",
      title: "Beyond the Horizon",
      year: "2022",
      genre: "Drama",
      director: "Sophia Chen",
      description: "An intimate portrait of a family across three generations as they navigate love, loss, and reconciliation against the backdrop of a changing world.",
      image: "https://images.unsplash.com/photo-1518134346374-184f9d21cea2?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "midnight-rhythm",
      title: "Midnight Rhythm",
      year: "2021",
      genre: "Musical Drama",
      director: "Marcus Johnson",
      description: "Set in the underground jazz scene of New Orleans, this film follows a talented pianist's journey through fame, addiction, and redemption.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "the-silent-valley",
      title: "The Silent Valley",
      year: "2020",
      genre: "Thriller",
      director: "Olivia Martinez",
      description: "A psychological thriller about a remote mountain community harboring dark secrets that are uncovered when a stranger arrives in town.",
      image: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "urban-legends",
      title: "Urban Legends",
      year: "2019",
      genre: "Documentary",
      director: "David Kim",
      description: "An award-winning documentary examining the origin and evolution of urban myths in the digital age.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "the-last-lighthouse",
      title: "The Last Lighthouse",
      year: "2018",
      genre: "Adventure",
      director: "James Wilson",
      description: "A visually stunning adventure film about a lighthouse keeper on a remote island who embarks on an unexpected journey of discovery.",
      image: "https://images.unsplash.com/photo-1551373884-8a0750074df7?auto=format&fit=crop&w=1650&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Our Films</h1>
              <p className="text-xl text-muted-foreground">
                Explore our diverse collection of feature films spanning multiple genres and styles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {films.map((film) => (
                <Link 
                  key={film.id} 
                  to={`/work/${film.id}`}
                  className="group block"
                >
                  <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{film.year}</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {film.genre}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {film.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">Directed by {film.director}</p>
                      <p className="text-sm line-clamp-3">{film.description}</p>
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

export default Films;
