
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Team - Elfign Entertainment";
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: 'Alexander Reed',
      role: 'CEO & Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1287&q=80',
      bio: 'With 20+ years in film and television, Alex leads our creative vision and strategic direction. His award-winning work has been featured at major film festivals worldwide.'
    },
    {
      name: 'Sophia Chen',
      role: 'Head of Production',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1287&q=80',
      bio: 'Sophia oversees all production activities, ensuring projects are delivered on time and within budget. Her background in both independent and studio productions gives her a unique perspective on efficient, high-quality production management.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Director of Photography',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1287&q=80',
      bio: 'An award-winning cinematographer, Marcus brings a distinctive visual style to every project. His work has been recognized at Cannes and Sundance film festivals.'
    },
    {
      name: 'Olivia Martinez',
      role: 'Music Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1287&q=80',
      bio: 'Olivia leads our music production team, creating original compositions and sound design. Her background includes work with Grammy-winning artists and major film studios.'
    },
    {
      name: 'James Wilson',
      role: 'Post-Production Supervisor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1287&q=80',
      bio: 'James oversees all aspects of post-production, from editing to color grading and visual effects. His technical expertise ensures our projects meet the highest quality standards.'
    },
    {
      name: 'Emily Thompson',
      role: 'Animation Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1287&q=80', 
      bio: 'Emily leads our animation team with over 15 years of experience in both traditional and digital animation. Her innovative approach has resulted in multiple industry awards.'
    },
    {
      name: 'David Kim',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1287&q=80',
      bio: 'David manages our technical infrastructure and pipeline development, ensuring our production workflows are efficient and cutting-edge.'
    },
    {
      name: 'Sarah Patel',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1287&q=80',
      bio: 'Sarah leads our marketing and publicity efforts, crafting compelling campaigns that showcase our work to the right audiences.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Our Team</h1>
              <p className="text-xl text-muted-foreground">
                Meet the creative minds behind Elfign Entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-elfign-red">{member.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Our full team includes over 40 talented professionals across production, post-production, music, and design.
              </p>
              <Button asChild variant="default" className="bg-elfign-red hover:bg-elfign-red/90 text-white">
                <Link to="/about/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
