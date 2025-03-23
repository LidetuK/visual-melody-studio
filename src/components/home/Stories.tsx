
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

// YouTube videos from Elfign channel
const youtubeVideos = [
  {
    id: "H4A1rZRJFJA",
    title: "ELFIGN | UTS ALUMNI AWARD CEREMONY 2019",
    thumbnail: "https://img.youtube.com/vi/H4A1rZRJFJA/maxresdefault.jpg",
  },
  {
    id: "wM6NMsHujbs",
    title: "ELFIGN | Fitness First - Instructor Profile",
    thumbnail: "https://img.youtube.com/vi/wM6NMsHujbs/maxresdefault.jpg",
  },
  {
    id: "Fxf7f3B8WMw",
    title: "ELFIGN | Fitness First - Member Profile",
    thumbnail: "https://img.youtube.com/vi/Fxf7f3B8WMw/maxresdefault.jpg",
  },
  {
    id: "GYDHvLKCvO8",
    title: "ELFIGN | BUSINESS EXCHANGE",
    thumbnail: "https://img.youtube.com/vi/GYDHvLKCvO8/maxresdefault.jpg",
  },
  {
    id: "sUffWZ3H1Lc",
    title: "ELFIGN | UTS 30 ALUMNI EVENT: SHAPE THE FUTURE",
    thumbnail: "https://img.youtube.com/vi/sUffWZ3H1Lc/maxresdefault.jpg",
  },
  {
    id: "kLGKJcIcYJE",
    title: "ELFIGN | UTS INTERNATIONAL MBA WEBINAR",
    thumbnail: "https://img.youtube.com/vi/kLGKJcIcYJE/maxresdefault.jpg",
  }
];

interface VideoModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ videoId, isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-5xl rounded-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
          aria-label="Close video"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Stories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 bg-black text-white overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            OUR LATEST PRODUCTIONS
          </h2>
          <div className="h-1 w-16 bg-elfign-gold mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our latest video productions showcasing our creative approach and technical expertise.
          </p>
        </div>

        <div 
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
          )}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {youtubeVideos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-lg group cursor-pointer h-full" onClick={() => openVideo(video.id)}>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-elfign-red rounded-full p-4 transform transition-transform group-hover:scale-110">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-900 border-t-2 border-elfign-red min-h-[100px] flex flex-col">
                      <h3 className="font-medium text-base line-clamp-2">{video.title}</h3>
                      <div className="mt-auto pt-2 flex justify-between items-center">
                        <span className="text-xs text-gray-400">Elfign Productions</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-0 h-auto hover:bg-transparent hover:text-elfign-red"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`https://youtube.com/watch?v=${video.id}`, '_blank');
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end">
              <div className="flex gap-2">
                <CarouselPrevious className="static transform-none h-10 w-10 rounded-full bg-elfign-red hover:bg-elfign-red/80 text-white border-none" />
                <CarouselNext className="static transform-none h-10 w-10 rounded-full bg-elfign-red hover:bg-elfign-red/80 text-white border-none" />
              </div>
            </div>
          </Carousel>
        </div>
        
        <div 
          className={cn(
            "mt-12 text-center transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <a 
            href="https://www.youtube.com/@Elfign/videos" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-elfign-red hover:text-elfign-red/80 font-medium"
          >
            View Our YouTube Channel
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* YouTube Video Modal */}
      <VideoModal 
        videoId={selectedVideo || ''}
        isOpen={!!selectedVideo}
        onClose={closeVideo}
      />
    </section>
  );
};

export default Stories;
