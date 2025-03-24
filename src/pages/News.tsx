
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Elfign Entertainment Launches New Film Division",
    excerpt: "Expanding our creative capabilities with a dedicated team focused on feature film production.",
    date: "May 15, 2023",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBzZXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Award-Winning Documentary Series Announced",
    excerpt: "Our team is set to produce a groundbreaking documentary series exploring cultural innovations.",
    date: "April 28, 2023",
    category: "Productions",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBzZXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "Elfign Partners with International Film Festival",
    excerpt: "Exciting new partnership to showcase emerging talent and innovative storytelling approaches.",
    date: "March 12, 2023",
    category: "Partnerships",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlsbSUyMGZlc3RpdmFsfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    title: "New Music Production Studio Completed",
    excerpt: "State-of-the-art facility designed to deliver exceptional audio quality for all productions.",
    date: "February 5, 2023",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    title: "Elfign Announces Mentorship Program for Young Filmmakers",
    excerpt: "New initiative aims to support and develop the next generation of creative talent.",
    date: "January 20, 2023",
    category: "Community",
    image: "https://images.unsplash.com/photo-1604122230482-206383986882?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmlsbW1ha2luZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    title: "Latest Production Receives Critical Acclaim",
    excerpt: "Our recent documentary has been praised for its innovative approach and powerful storytelling.",
    date: "December 8, 2022",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXdhcmRzfGVufDB8fDB8fHww"
  }
];

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "News | Elfign Entertainment";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Latest News</h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest developments, announcements, and stories from Elfign Entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {item.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" className="p-0 text-elfign-red hover:text-elfign-red/90">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mx-auto">
                Load More News
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
