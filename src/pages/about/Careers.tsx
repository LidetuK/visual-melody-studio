
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Careers - Elfign Entertainment";
  }, []);

  const jobOpenings: JobOpening[] = [
    {
      title: "Senior Film Editor",
      department: "Post-Production",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "We're seeking an experienced film editor with a strong portfolio of narrative work to join our post-production team."
    },
    {
      title: "Music Composer",
      department: "Music Production",
      location: "Nashville, TN",
      type: "Contract",
      description: "Looking for talented composers to create original scores for our upcoming film and television projects."
    },
    {
      title: "3D Animator",
      department: "Animation",
      location: "Remote",
      type: "Full-time",
      description: "Join our animation team to create stunning 3D animations for films, commercials, and interactive media."
    },
    {
      title: "Production Coordinator",
      department: "Production",
      location: "New York, NY",
      type: "Full-time",
      description: "Organized and detail-oriented professional needed to coordinate logistics for our East Coast productions."
    },
    {
      title: "VFX Artist",
      department: "Post-Production",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Skilled VFX artist with experience in compositing and integration of visual effects for film and television."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Miami, FL",
      type: "Full-time",
      description: "Creative marketer with experience in entertainment promotion to develop campaigns for our content releases."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Join Our Team</h1>
              <p className="text-xl text-muted-foreground">
                We're always looking for talented individuals who are passionate about storytelling and entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {job.department}
                      </span>
                    </div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Location</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Employment Type</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-medium mb-4">Don't see the right position?</h2>
              <p className="text-muted-foreground mb-6">
                We're always interested in connecting with talented professionals. Send us your resume and 
                portfolio, and we'll keep you in mind for future opportunities.
              </p>
              <Button variant="outline" size="lg">
                Submit General Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
