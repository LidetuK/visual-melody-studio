
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SocialMediaIcons } from "@/components/common/SocialMediaIcons";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alexandra Reynolds",
    role: "Creative Director",
    bio: "Award-winning director with over 15 years of experience in film and commercial production.",
    initials: "AR",
    image: "/lovable-uploads/3090da7d-ed7e-44c1-8000-3596c8500119.png"
  },
  {
    name: "Marcus Chen",
    role: "Head of Production",
    bio: "Former studio executive who has overseen the production of over 30 feature films and documentaries.",
    initials: "MC"
  },
  {
    name: "Sophia Williams",
    role: "Music Producer",
    bio: "Grammy-nominated producer with extensive experience in film scoring and soundtrack development.",
    initials: "SW"
  },
  {
    name: "David Okafor",
    role: "Animation Director",
    bio: "Pioneering animator who has worked with major studios and created groundbreaking visual effects.",
    initials: "DO"
  },
  {
    name: "Ela Patel",
    role: "Post-Production Supervisor",
    bio: "Technical genius who ensures every project maintains the highest quality standards from shoot to delivery.",
    initials: "EP"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Meet Our Team</h2>
          <div className="w-16 h-1 bg-elfign-red mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            The creative minds behind Elfign Entertainment's award-winning productions.
            Each member brings unique expertise and passion to every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-background overflow-hidden">
              <div className="aspect-square relative bg-muted/20 flex items-center justify-center overflow-hidden">
                <Avatar className="w-full h-full rounded-none">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  ) : (
                    <AvatarFallback className="text-5xl bg-elfign-red/10 text-elfign-red w-full h-full rounded-none">
                      {member.initials}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                <p className="text-elfign-red text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center">
                  <SocialMediaIcons iconSize={16} className="justify-center" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
