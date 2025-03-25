
// Sample courses data

export interface Lesson {
  title: string;
  duration: string;
}

export interface CourseModule {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  description: string;
  instructor?: string;
  instructorTitle?: string;
  instructorBio?: string;
  duration: string;
  level: string;
  lessons: number;
  language?: string;
  certificate?: boolean;
  prerequisites: string;
  learningOutcomes: string[];
  curriculum: CourseModule[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Film Production",
    slug: "intro-film-production",
    category: "Film Production",
    price: 499,
    image: "/lovable-uploads/004e0452-14e6-4f4f-90bc-f35f86d9c732.png",
    shortDescription: "Learn the fundamentals of film production from concept to screen.",
    description: "This comprehensive course covers all aspects of film production, from scriptwriting and pre-production to shooting, editing, and post-production. You'll learn essential techniques, tools, and workflows used by professional filmmakers. Through practical exercises and projects, you'll develop the skills needed to create compelling visual stories.",
    instructor: "Michael Rodriguez",
    instructorTitle: "Senior Film Director",
    instructorBio: "Michael Rodriguez is an award-winning film director with over 15 years of experience in the industry. He has directed feature films, commercials, and music videos for major clients and has taught filmmaking at renowned film schools.",
    duration: "10 weeks",
    level: "Beginner",
    lessons: 24,
    language: "English",
    certificate: true,
    prerequisites: "No prior experience required. Basic computer skills and access to a camera (even a smartphone) is recommended.",
    learningOutcomes: [
      "Understand the film production pipeline from concept to distribution",
      "Develop skills in scriptwriting and storyboarding",
      "Learn camera operation, composition, and lighting techniques",
      "Master the basics of directing actors and crew",
      "Gain experience in video editing and post-production",
      "Create a short film as your final project"
    ],
    curriculum: [
      {
        title: "Introduction to Filmmaking",
        lessons: [
          { title: "The Filmmaking Process Overview", duration: "45 min" },
          { title: "Film Industry Roles and Responsibilities", duration: "1 hr" },
          { title: "Visual Storytelling Fundamentals", duration: "1.5 hrs" }
        ]
      },
      {
        title: "Pre-Production",
        lessons: [
          { title: "Scriptwriting Basics", duration: "1.5 hrs" },
          { title: "Storyboarding Your Vision", duration: "1 hr" },
          { title: "Shot Lists and Production Planning", duration: "1 hr" }
        ]
      },
      {
        title: "Production Techniques",
        lessons: [
          { title: "Camera Operation and Movement", duration: "2 hrs" },
          { title: "Lighting for Film", duration: "1.5 hrs" },
          { title: "Sound Recording Essentials", duration: "1 hr" }
        ]
      },
      {
        title: "Post-Production",
        lessons: [
          { title: "Editing Basics", duration: "2 hrs" },
          { title: "Sound Design and Music", duration: "1 hr" },
          { title: "Color Grading Introduction", duration: "1.5 hrs" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced Music Production",
    slug: "advanced-music-production",
    category: "Music Production",
    price: 699,
    image: "/lovable-uploads/2e3e23f2-101a-4275-82b4-95373ae796b5.png",
    shortDescription: "Take your music production skills to professional levels.",
    description: "Designed for intermediate producers looking to advance their skills, this course covers advanced techniques in music composition, arrangement, mixing, and mastering. You'll learn professional workflow strategies, advanced sound design, and industry-standard practices to elevate your productions to commercial quality.",
    instructor: "Sarah Johnson",
    instructorTitle: "Music Producer & Audio Engineer",
    instructorBio: "Sarah Johnson is a Grammy-nominated music producer and audio engineer who has worked with major artists across multiple genres. With over a decade of studio experience, she brings real-world insights into the music production process.",
    duration: "12 weeks",
    level: "Intermediate",
    lessons: 30,
    language: "English",
    certificate: true,
    prerequisites: "Basic understanding of music production and familiarity with at least one digital audio workstation (DAW).",
    learningOutcomes: [
      "Master advanced mixing and mastering techniques",
      "Create professional-quality productions across different genres",
      "Develop your unique sound and production style",
      "Understand advanced sound design and synthesis",
      "Learn mix automation and dynamic processing",
      "Build a professional portfolio of music productions"
    ],
    curriculum: [
      {
        title: "Advanced Production Techniques",
        lessons: [
          { title: "Professional Workflow Strategies", duration: "1.5 hrs" },
          { title: "Advanced Arrangement Techniques", duration: "2 hrs" },
          { title: "Creating Dynamic Productions", duration: "2 hrs" }
        ]
      },
      {
        title: "Sound Design Masterclass",
        lessons: [
          { title: "Advanced Synthesis Techniques", duration: "2.5 hrs" },
          { title: "Creating Unique Sound Palettes", duration: "2 hrs" },
          { title: "Processing and Effects Chains", duration: "2 hrs" }
        ]
      },
      {
        title: "Professional Mixing Techniques",
        lessons: [
          { title: "Frequency Management and EQ", duration: "2 hrs" },
          { title: "Dynamic Range Control", duration: "1.5 hrs" },
          { title: "Spatial Processing and Depth", duration: "2 hrs" }
        ]
      },
      {
        title: "Mastering for Commercial Release",
        lessons: [
          { title: "The Mastering Chain", duration: "2 hrs" },
          { title: "Final Polishing Techniques", duration: "1.5 hrs" },
          { title: "Preparing for Distribution", duration: "1 hr" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Post-Production Workflow",
    slug: "post-production-workflow",
    category: "Post-Production",
    price: 599,
    image: "/lovable-uploads/a652a96f-b15a-4526-b10b-2157eeafe2fa.png",
    shortDescription: "Master professional post-production techniques and workflows.",
    description: "This specialized course takes you through the entire post-production process for film and video projects. You'll learn advanced editing techniques, color grading, visual effects, sound design, and how to manage complex post-production workflows. The course focuses on industry-standard software and professional practices to help you deliver polished final products.",
    instructor: "David Chen",
    instructorTitle: "Post-Production Supervisor",
    instructorBio: "David Chen has supervised post-production for feature films, television series, and commercials at major studios. His expertise spans editing, VFX, color grading, and sound design, with credits on award-winning productions.",
    duration: "8 weeks",
    level: "Intermediate to Advanced",
    lessons: 20,
    language: "English",
    certificate: true,
    prerequisites: "Basic understanding of video editing and familiarity with at least one editing software.",
    learningOutcomes: [
      "Develop advanced video editing techniques",
      "Master color grading workflows",
      "Learn professional sound design and audio mixing",
      "Understand visual effects integration",
      "Manage complex post-production projects",
      "Deliver content to various platforms with appropriate specifications"
    ],
    curriculum: [
      {
        title: "Advanced Editing Techniques",
        lessons: [
          { title: "Narrative Editing Principles", duration: "1.5 hrs" },
          { title: "Rhythm and Pacing", duration: "1.5 hrs" },
          { title: "Advanced Timeline Management", duration: "1 hr" }
        ]
      },
      {
        title: "Color Grading Masterclass",
        lessons: [
          { title: "Color Theory for Film", duration: "1 hr" },
          { title: "Primary and Secondary Color Correction", duration: "2 hrs" },
          { title: "Developing Film Looks and Styles", duration: "2 hrs" }
        ]
      },
      {
        title: "Sound Design and Audio Post",
        lessons: [
          { title: "Dialogue Editing and ADR", duration: "1.5 hrs" },
          { title: "Sound Effects and Foley", duration: "1.5 hrs" },
          { title: "Audio Mixing for Film", duration: "2 hrs" }
        ]
      },
      {
        title: "Visual Effects Integration",
        lessons: [
          { title: "Compositing Basics", duration: "2 hrs" },
          { title: "Green Screen and Rotoscoping", duration: "2 hrs" },
          { title: "Motion Tracking and Stabilization", duration: "1.5 hrs" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "3D Animation Fundamentals",
    slug: "3d-animation-fundamentals",
    category: "Animation",
    price: 799,
    image: "/lovable-uploads/46cd21d6-4fec-4a57-aed4-43769efe5f83.png",
    shortDescription: "Learn the principles and techniques of 3D animation from industry professionals.",
    description: "This course introduces students to the world of 3D animation, covering modeling, rigging, animation principles, texturing, lighting, and rendering. You'll learn industry-standard software while developing the artistic and technical skills needed to create compelling animated content.",
    instructor: "Emily Zhang",
    instructorTitle: "Senior 3D Animator",
    instructorBio: "Emily Zhang has worked as a 3D animator and technical director at major animation studios, contributing to feature films and video games. She specializes in character animation and has received multiple industry awards for her work.",
    duration: "16 weeks",
    level: "Beginner to Intermediate",
    lessons: 32,
    language: "English",
    certificate: true,
    prerequisites: "Basic computer skills. Experience with graphics software is helpful but not required.",
    learningOutcomes: [
      "Understand the 3D animation pipeline",
      "Master the principles of animation",
      "Create and texture 3D models",
      "Develop character rigs for animation",
      "Learn lighting and rendering techniques",
      "Produce a short animated sequence"
    ],
    curriculum: [
      {
        title: "Introduction to 3D Animation",
        lessons: [
          { title: "3D Software Interface and Workflow", duration: "2 hrs" },
          { title: "Navigating the 3D Space", duration: "1 hr" },
          { title: "Animation Principles Overview", duration: "2 hrs" }
        ]
      },
      {
        title: "3D Modeling",
        lessons: [
          { title: "Polygon Modeling Basics", duration: "2.5 hrs" },
          { title: "Character Modeling Techniques", duration: "3 hrs" },
          { title: "Environment and Prop Modeling", duration: "2 hrs" }
        ]
      },
      {
        title: "Rigging and Animation",
        lessons: [
          { title: "Basic Character Rigging", duration: "2.5 hrs" },
          { title: "Weight Painting and Skinning", duration: "2 hrs" },
          { title: "Character Animation Fundamentals", duration: "3 hrs" }
        ]
      },
      {
        title: "Texturing, Lighting and Rendering",
        lessons: [
          { title: "UV Mapping and Texturing", duration: "2.5 hrs" },
          { title: "Material Creation", duration: "2 hrs" },
          { title: "Lighting Techniques", duration: "2 hrs" },
          { title: "Rendering and Compositing", duration: "2.5 hrs" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Documentary Filmmaking",
    slug: "documentary-filmmaking",
    category: "Film Production",
    price: 549,
    image: "/lovable-uploads/76b6d647-f303-4d0f-9960-b3fa254fb480.png",
    shortDescription: "Learn how to tell compelling true stories through documentary filmmaking.",
    description: "This course explores the art and craft of documentary filmmaking, teaching you how to find and develop compelling true stories, conduct interviews, work with archival materials, and edit authentic narratives. You'll learn ethical considerations and practical techniques for creating impactful documentary films.",
    instructor: "Robert Williams",
    instructorTitle: "Documentary Filmmaker",
    instructorBio: "Robert Williams has directed award-winning documentaries for major networks and streaming platforms. His films have screened at prestigious festivals worldwide, and he has over 20 years of experience in documentary production.",
    duration: "8 weeks",
    level: "All Levels",
    lessons: 20,
    language: "English",
    certificate: true,
    prerequisites: "No prior filmmaking experience required, though basic camera skills are helpful.",
    learningOutcomes: [
      "Research and develop compelling documentary subjects",
      "Conduct effective interviews and capture authentic moments",
      "Work with archival materials and found footage",
      "Apply ethical documentary practices",
      "Edit documentary narratives for emotional impact",
      "Distribute your documentary to find its audience"
    ],
    curriculum: [
      {
        title: "Documentary Fundamentals",
        lessons: [
          { title: "Types of Documentary Films", duration: "1 hr" },
          { title: "Finding and Developing Your Story", duration: "1.5 hrs" },
          { title: "Research Methods for Documentarians", duration: "1.5 hrs" }
        ]
      },
      {
        title: "Documentary Production",
        lessons: [
          { title: "Interview Techniques", duration: "2 hrs" },
          { title: "Verité Filming Approaches", duration: "1.5 hrs" },
          { title: "Working with Subjects Ethically", duration: "1 hr" }
        ]
      },
      {
        title: "Documentary Cinematography",
        lessons: [
          { title: "Camera Techniques for Documentary", duration: "2 hrs" },
          { title: "Lighting for Reality", duration: "1.5 hrs" },
          { title: "Sound Recording in Uncontrolled Environments", duration: "1.5 hrs" }
        ]
      },
      {
        title: "Documentary Editing",
        lessons: [
          { title: "Structuring the Documentary Narrative", duration: "2 hrs" },
          { title: "Working with Interviews and B-Roll", duration: "2 hrs" },
          { title: "Music and Sound Design for Documentary", duration: "1.5 hrs" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Sound Design for Film",
    slug: "sound-design-film",
    category: "Post-Production",
    price: 649,
    image: "/lovable-uploads/59f4682a-8a68-44ee-a25f-f5f2ed224079.png",
    shortDescription: "Master the art of creating powerful sonic landscapes for film and video.",
    description: "This specialized course focuses on the creative and technical aspects of sound design for visual media. You'll learn how to record, edit, and mix audio elements to create immersive soundscapes that enhance storytelling and emotional impact. The course covers dialogue editing, sound effects creation, Foley recording, and final mixing.",
    instructor: "James Foster",
    instructorTitle: "Film Sound Designer",
    instructorBio: "James Foster has created sound designs for feature films, television series, and video games. His work spans multiple genres, and he has collaborated with leading directors to develop innovative sonic approaches to storytelling.",
    duration: "10 weeks",
    level: "Intermediate",
    lessons: 25,
    language: "English",
    certificate: true,
    prerequisites: "Basic understanding of audio recording and editing. Familiarity with a digital audio workstation (DAW) is recommended.",
    learningOutcomes: [
      "Record and edit high-quality production audio",
      "Clean and enhance dialogue tracks",
      "Create custom sound effects and ambiences",
      "Record and edit Foley sounds",
      "Design sonic environments that support storytelling",
      "Mix audio for different distribution formats"
    ],
    curriculum: [
      {
        title: "Sound Design Foundations",
        lessons: [
          { title: "The Role of Sound in Storytelling", duration: "1 hr" },
          { title: "Sound Design Workflow Overview", duration: "1.5 hrs" },
          { title: "Critical Listening for Sound Designers", duration: "1.5 hrs" }
        ]
      },
      {
        title: "Dialogue Editing",
        lessons: [
          { title: "Dialogue Cleaning Techniques", duration: "2 hrs" },
          { title: "ADR Recording and Integration", duration: "2 hrs" },
          { title: "Dialogue Perspective and Continuity", duration: "1.5 hrs" }
        ]
      },
      {
        title: "Sound Effects and Ambience",
        lessons: [
          { title: "Field Recording Techniques", duration: "2 hrs" },
          { title: "Sound Effects Editing and Layering", duration: "2.5 hrs" },
          { title: "Creating Atmospheric Soundscapes", duration: "2 hrs" }
        ]
      },
      {
        title: "Foley and Final Mix",
        lessons: [
          { title: "Foley Recording Techniques", duration: "2 hrs" },
          { title: "Advanced Sound Processing", duration: "2 hrs" },
          { title: "Final Mixing for Film", duration: "2.5 hrs" },
          { title: "Delivering Audio for Different Formats", duration: "1.5 hrs" }
        ]
      }
    ]
  }
];
