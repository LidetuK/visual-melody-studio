
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MusicVideo {
  id: string;
  title: string;
  artist: string;
  year: string;
  genre: string;
  director: string;
  image: string;
}

const MusicVideos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Music Videos - Elfign Entertainment";
  }, []);

  const musicVideos: MusicVideo[] = [
    {
      id: "neon-dreams",
      title: "Neon Dreams",
      artist: "Midnight Synth",
      year: "2023",
      genre: "Electronic",
      director: "Olivia Martinez",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "lost-in-time",
      title: "Lost in Time",
      artist: "The Chronos",
      year: "2022",
      genre: "Alternative Rock",
      director: "Marcus Johnson",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "summer-nights",
      title: "Summer Nights",
      artist: "Coastal Wave",
      year: "2022",
      genre: "Indie Pop",
      director: "Sophia Chen",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "heartbeat-city",
      title: "Heartbeat City",
      artist: "Urban Pulse",
      year: "2021",
      genre: "Hip Hop",
      director: "James Wilson",
      image: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "ethereal",
      title: "Ethereal",
      artist: "Aurora Dreams",
      year: "2021",
      genre: "Ambient",
      director: "Emily Thompson",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "revolution",
      title: "Revolution",
      artist: "The Uprising",
      year: "2020",
      genre: "Rock",
      director: "Alexander Reed",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1650&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Music Videos</h1>
              <p className="text-xl text-muted-foreground">
                Innovative visual storytelling that brings music to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {musicVideos.map((video) => (
                <Link 
                  key={video.id} 
                  to={`/work/${video.id}`}
                  className="group block"
                >
                  <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{video.year}</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {video.genre}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-base font-medium mb-2">{video.artist}</p>
                      <p className="text-sm text-muted-foreground">Directed by {video.director}</p>
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

export default MusicVideos;
