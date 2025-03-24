
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface VideoShowcaseItem {
  tagline: string;
  videoUrl: string;
  image: string;
  position: 'left' | 'right';
}

const videoShowcaseItems: VideoShowcaseItem[] = [
  {
    tagline: "it all starts with a vision.",
    videoUrl: "https://www.youtube.com/embed/U3wlC7gocKo",
    image: "public/lovable-uploads/d144c1b1-faba-4685-8972-e825849d236b.png",
    position: "right"
  },
  {
    tagline: "from concept to screen.",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    image: "public/lovable-uploads/004e0452-14e6-4f4f-90bc-f35f86d9c732.png",
    position: "left"
  },
  {
    tagline: "we bring stories to life.",
    videoUrl: "https://www.youtube.com/embed/pCgf9bPQpZo",
    image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    position: "right"
  },
  {
    tagline: "exceptional visual storytelling.",
    videoUrl: "https://www.youtube.com/embed/j5rGm3kdTuk",
    image: "https://images.unsplash.com/photo-1600191763437-4b7f2ffa4c2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    position: "left"
  }
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(videoShowcaseItems.length).fill(false));
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.3,
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]!);
        }
      });
    };
  }, []);

  const handlePlayVideo = (index: number) => {
    setActiveVideo(index);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <>
      {videoShowcaseItems.map((item, index) => (
        <section
          key={index}
          ref={el => sectionRefs.current[index] = el}
          className={cn(
            "relative h-screen w-full overflow-hidden",
            index % 2 === 0 ? "bg-elfign-black" : "bg-elfign-black/90"
          )}
        >
          <div className="absolute inset-0 z-10">
            <img
              src={item.image}
              alt={`Video showcase ${index + 1}`}
              className="h-full w-full object-cover opacity-80"
            />
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-elfign-black/80 via-transparent to-transparent",
                item.position === "left" ? "bg-gradient-to-r from-elfign-black/80 via-transparent to-transparent" : "bg-gradient-to-l from-elfign-black/80 via-transparent to-transparent"
              )}
            />
          </div>

          <div className="relative z-20 flex h-full items-center justify-center">
            <div 
              className={cn(
                "container px-4 md:px-6",
                item.position === "left" ? "text-left" : "text-right"
              )}
            >
              <div
                className={cn(
                  "max-w-2xl transition-all duration-1000 transform",
                  visibleSections[index] 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12",
                  item.position === "left" ? "ml-0 mr-auto" : "ml-auto mr-0"
                )}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white mb-6">
                  {item.tagline}
                </h2>
                <button
                  onClick={() => handlePlayVideo(index)}
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 bg-elfign-red/80 hover:bg-elfign-red text-white px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                  )}
                >
                  <Play size={24} className="group-hover:scale-110 transition-transform" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Video Modal */}
      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in"
          onClick={handleCloseVideo}
        >
          <div 
            className="relative w-11/12 max-w-5xl aspect-video bg-black"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
              className="absolute -top-10 right-0 text-white hover:text-elfign-gold"
            >
              Close
            </button>
            <iframe
              src={`${videoShowcaseItems[activeVideo].videoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoShowcase;
