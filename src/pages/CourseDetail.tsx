
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { initSmoothScrolling } from '@/lib/smoothScroll';
import { courses } from '@/data/courses';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, FileText, Users, Video } from 'lucide-react';

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  experience: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState(courses.find(c => c.slug === slug));
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      experience: '',
    },
  });

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Find course data
    const courseData = courses.find(c => c.slug === slug);
    setCourse(courseData);
    // Set page title
    document.title = courseData ? `${courseData.title} - Elfign Courses` : "Course Details - Elfign Entertainment";
    // Initialize smooth scrolling
    initSmoothScrolling();
  }, [slug]);

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log('Form data submitted:', data);
    // Show success message
    toast.success('Enrollment request submitted!', {
      description: 'We will contact you shortly with more information.',
    });
    // Reset form
    form.reset();
    // Close form
    setIsFormOpen(false);
  };

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">Sorry, the course you're looking for doesn't exist.</p>
            <Button asChild variant="default">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${course.image})`,
          }}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-elfign-gold/20 text-elfign-gold">
                  {course.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                {course.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-white">
                  <FileText className="h-5 w-5 mr-2 text-elfign-gold" />
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center text-white">
                  <Video className="h-5 w-5 mr-2 text-elfign-gold" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-white">
                  <Users className="h-5 w-5 mr-2 text-elfign-gold" />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="text-2xl font-bold text-elfign-red">
                  ${course.price}
                </div>
                <Button 
                  onClick={() => setIsFormOpen(true)} 
                  className="bg-elfign-red hover:bg-elfign-red/90"
                  size="lg"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">About This Course</h3>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-elfign-gold flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                      <p className="text-muted-foreground">{course.prerequisites}</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="curriculum" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Course Curriculum</h3>
                      <div className="space-y-4">
                        {course.curriculum.map((module, index) => (
                          <div key={index} className="border border-border rounded-lg overflow-hidden">
                            <div className="bg-card p-4 font-medium">
                              Module {index + 1}: {module.title}
                            </div>
                            <div className="p-4 space-y-2">
                              {module.lessons.map((lesson, i) => (
                                <div key={i} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                                  <div className="flex items-center">
                                    <span className="text-sm">{i + 1}.</span>
                                    <span className="ml-2">{lesson.title}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="instructor" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">About the Instructor</h3>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold text-white">
                          {course.instructor?.substring(0, 2)}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">{course.instructor}</h4>
                          <p className="text-sm text-muted-foreground">{course.instructorTitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{course.instructorBio}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div>
                <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Course Information</h3>
                  <Separator className="mb-4" />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lessons:</span>
                      <span className="font-medium">{course.lessons} lessons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Language:</span>
                      <span className="font-medium">{course.language || "English"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Certificate:</span>
                      <span className="font-medium">{course.certificate ? "Yes" : "No"}</span>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <Button 
                      onClick={() => setIsFormOpen(true)} 
                      className="w-full bg-elfign-red hover:bg-elfign-red/90"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Courses */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Related Courses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses
                .filter(c => c.category === course.category && c.slug !== course.slug)
                .slice(0, 3)
                .map((relatedCourse, index) => (
                  <div 
                    key={relatedCourse.slug} 
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-elfign-red/50 transition-all duration-300"
                  >
                    <div 
                      className="h-40 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${relatedCourse.image})` }}
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 text-xs rounded bg-elfign-gold/20 text-elfign-gold">
                          {relatedCourse.category}
                        </span>
                        <span className="text-sm text-gray-400">
                          {relatedCourse.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">{relatedCourse.title}</h3>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-lg font-bold text-elfign-red">
                          ${relatedCourse.price}
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/courses/${relatedCourse.slug}`}>View Course</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enrollment Form Dialog */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Enroll in {course.title}</h2>
                <Button 
                  variant="ghost" 
                  className="h-8 w-8 p-0" 
                  onClick={() => setIsFormOpen(false)}
                >
                  ✕
                </Button>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Experience (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your background or experience with this subject..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end gap-4 mt-6">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsFormOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-elfign-red hover:bg-elfign-red/90"
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
