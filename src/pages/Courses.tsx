
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/data/courses';
import { initSmoothScrolling } from '@/lib/smoothScroll';

const Courses = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Set page title
    document.title = "Courses - Elfign Entertainment";
    // Initialize smooth scrolling
    initSmoothScrolling();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                Master Your Craft With <span className="text-elfign-red">Elfign</span> <span className="text-elfign-gold">Courses</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-100">
                Learn from industry professionals and take your skills to the next level with our comprehensive courses in film production, music production, post-production, and animation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Courses Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-background">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Available Courses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card 
                  key={course.slug} 
                  className={`bg-card/80 backdrop-blur-sm border border-border/50 hover:border-elfign-red/50 transition-all duration-300 animate-fade-in overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 text-xs rounded bg-elfign-gold/20 text-elfign-gold">
                        {course.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {course.duration}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-white">{course.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {course.instructor && (
                        <span className="flex items-center text-sm mt-1">
                          Instructor: {course.instructor}
                        </span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 line-clamp-3">{course.shortDescription}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-lg font-bold text-elfign-red">
                      ${course.price}
                    </div>
                    <Button asChild variant="default" className="bg-elfign-red hover:bg-elfign-red/90">
                      <Link to={`/courses/${course.slug}`}>View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-elfign-black/80">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Skills?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our community of creative professionals and learn from the industry's best.
            </p>
            <Button 
              asChild
              variant="default" 
              size="lg" 
              className="bg-elfign-gold hover:bg-elfign-gold/90 text-black font-medium"
            >
              <Link to="/contact">Request More Information</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
