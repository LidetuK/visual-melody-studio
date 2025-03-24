
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Commercial {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  director: string;
  image: string;
}

const Commercials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Commercials - Elfign Entertainment";
  }, []);

  const commercials: Commercial[] = [
    {
      id: "nova-tech-launch",
      title: "Innovation Redefined",
      client: "Nova Tech",
      year: "2023",
      category: "Technology",
      director: "Alexander Reed",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "azure-luxury",
      title: "The Essence of Luxury",
      client: "Azure Fragrances",
      year: "2023",
      category: "Luxury",
      director: "Sophia Chen",
      image: "https://images.unsplash.com/photo-1594035795389-20dcfeb103cc?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "pulse-athletics",
      title: "Beyond Limits",
      client: "Pulse Athletics",
      year: "2022",
      category: "Sports",
      director: "Marcus Johnson",
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "greenearth-initiative",
      title: "A Sustainable Tomorrow",
      client: "GreenEarth Initiative",
      year: "2022",
      category: "Non-profit",
      director: "Emily Thompson",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "urban-eats",
      title: "Taste of the City",
      client: "Urban Eats",
      year: "2021",
      category: "Food & Beverage",
      director: "Olivia Martinez",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: "voyager-travel",
      title: "Discover Your Journey",
      client: "Voyager Travel",
      year: "2021",
      category: "Travel",
      director: "James Wilson",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1650&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Commercials</h1>
              <p className="text-xl text-muted-foreground">
                Compelling brand stories that engage and inspire audiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {commercials.map((commercial) => (
                <Link 
                  key={commercial.id} 
                  to={`/work/${commercial.id}`}
                  className="group block"
                >
                  <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={commercial.image}
                        alt={commercial.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{commercial.year}</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {commercial.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">
                        {commercial.title}
                      </h3>
                      <p className="text-base font-medium mb-2">Client: {commercial.client}</p>
                      <p className="text-sm text-muted-foreground">Directed by {commercial.director}</p>
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

export default Commercials;
