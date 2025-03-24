
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  attendees: number;
}

const events: Event[] = [
  {
    id: 1,
    title: "Film Industry Networking Night",
    description: "Connect with professionals from across the film and entertainment industry in a relaxed setting.",
    date: "June 15, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "Downtown Arts Center, Los Angeles",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    attendees: 120
  },
  {
    id: 2,
    title: "Documentary Filmmaking Workshop",
    description: "Learn essential techniques for compelling documentary storytelling from award-winning filmmakers.",
    date: "July 8, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Elfign Studio, New York",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    attendees: 45
  },
  {
    id: 3,
    title: "Music Production Masterclass",
    description: "A hands-on masterclass exploring advanced techniques in modern music production.",
    date: "August 22, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Sound Studio, Nashville",
    category: "Masterclass",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww",
    attendees: 35
  },
  {
    id: 4,
    title: "Animation Festival",
    description: "Celebrating innovation in animation with screenings, panels, and hands-on demonstrations.",
    date: "September 10-12, 2023",
    time: "Various Times",
    location: "Creative Arts Building, San Francisco",
    category: "Festival",
    image: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    attendees: 350
  },
  {
    id: 5,
    title: "Film Screening & Director Q&A",
    description: "Special screening of our latest production followed by a Q&A session with the director and cast.",
    date: "October 5, 2023",
    time: "6:30 PM - 9:30 PM",
    location: "Grand Theater, Chicago",
    category: "Screening",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBzY3JlZW5pbmd8ZW58MHx8MHx8fDA%3D",
    attendees: 180
  },
  {
    id: 6,
    title: "Industry Panel: The Future of Entertainment",
    description: "Leading experts discuss emerging trends and the future landscape of entertainment production.",
    date: "November 18, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Media Conference Center, Miami",
    category: "Panel",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbmVsJTIwZGlzY3Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    attendees: 95
  }
];

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | Elfign Entertainment";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Upcoming Events</h1>
              <p className="text-xl text-muted-foreground">
                Join us at our upcoming events, workshops, and gatherings to connect with industry professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {event.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mx-auto">
                View All Events
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
