
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Clock, User } from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  host: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Filmmaking Workshop: The Art of Visual Storytelling",
    description: "Learn the fundamentals of visual storytelling from our experienced directors and cinematographers.",
    date: "June 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Elfign Studios, Los Angeles",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlsbW1ha2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    host: "David Anderson, Creative Director"
  },
  {
    id: 2,
    title: "Film Screening: 'Echoes of Tomorrow'",
    description: "Join us for the premiere of our latest documentary exploring the impact of technology on society.",
    date: "July 8, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "Grand Theater, New York",
    category: "Screening",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlYXRlciUyMHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D",
    host: "Elfign Entertainment"
  },
  {
    id: 3,
    title: "Music Production Masterclass",
    description: "A hands-on session with our audio engineers and music producers on creating compelling soundscapes.",
    date: "August 22, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Sound Studio, Nashville",
    category: "Masterclass",
    image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww",
    host: "Sarah Martinez, Head of Audio"
  },
  {
    id: 4,
    title: "Industry Panel: The Future of Entertainment",
    description: "Leading experts discuss emerging trends and the future landscape of the entertainment industry.",
    date: "September 5, 2023",
    time: "6:00 PM - 8:30 PM",
    location: "Conference Center, Los Angeles",
    category: "Panel",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D",
    host: "Elfign Entertainment"
  },
  {
    id: 5,
    title: "Networking Event: Creative Collaborations",
    description: "Connect with fellow creatives, industry professionals, and potential collaborators in a relaxed setting.",
    date: "October 12, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "The Loft, San Francisco",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1511795409834-432e50ce8644?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ldHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    host: "Elfign Entertainment"
  },
  {
    id: 6,
    title: "Animation Workshop for Beginners",
    description: "Learn the basics of animation from our seasoned animators. Perfect for those just starting their creative journey.",
    date: "November 18, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "Creative Hub, Austin",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    host: "Michael Chen, Lead Animator"
  }
];

const Events = () => {
  const [filter, setFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | Elfign Entertainment";
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.category.toLowerCase() === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Events</h1>
              <p className="text-xl text-muted-foreground">
                Join us at our upcoming events, workshops, screenings, and industry meet-ups
              </p>
            </div>

            <div className="my-8">
              <Tabs defaultValue="all" className="w-full justify-center">
                <TabsList className="mx-auto">
                  <TabsTrigger value="all" onClick={() => setFilter("all")}>All Events</TabsTrigger>
                  <TabsTrigger value="workshop" onClick={() => setFilter("workshop")}>Workshops</TabsTrigger>
                  <TabsTrigger value="screening" onClick={() => setFilter("screening")}>Screenings</TabsTrigger>
                  <TabsTrigger value="masterclass" onClick={() => setFilter("masterclass")}>Masterclasses</TabsTrigger>
                  <TabsTrigger value="panel" onClick={() => setFilter("panel")}>Panels</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {event.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.host}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-elfign-red hover:bg-elfign-red/90 text-white">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No events found in this category. Check back later for updates.</p>
              </div>
            )}

            {filteredEvents.length > 0 && (
              <div className="flex justify-center mt-12">
                <Button variant="outline" className="mx-auto">
                  Load More Events
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
