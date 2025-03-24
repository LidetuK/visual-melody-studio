
/**
 * Smoothly scrolls to an element on the page with enhanced easing
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element (in pixels)
 * @param duration Optional duration of the scroll animation (in milliseconds)
 */
export const scrollToElement = (elementId: string, offset = 0, duration = 1200): void => {
  const element = document.getElementById(elementId);
  
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  const startTime = performance.now();
  const startPosition = window.pageYOffset;
  
  // Enhanced cubic bezier easing function for smoother motion
  const ease = (t: number): number => {
    // This is a bezier curve approximation that gives a very smooth feel
    return t < 0.5
      ? 4 * t * t * t
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  
  const animateScroll = (currentTime: number): void => {
    const elapsedTime = currentTime - startTime;
    
    if (elapsedTime > duration) {
      window.scrollTo(0, offsetPosition);
      return;
    }
    
    const progress = elapsedTime / duration;
    const easeProgress = ease(progress);
    const position = startPosition + (offsetPosition - startPosition) * easeProgress;
    
    window.scrollTo(0, position);
    requestAnimationFrame(animateScroll);
  };
  
  requestAnimationFrame(animateScroll);
};

/**
 * Sets up smooth scrolling for all links with hash references on the page
 * and initializes intersection observers for fade-in animations
 */
export const initSmoothScrolling = (): void => {
  document.documentElement.classList.add('smooth-scrolling');
  
  // Set up smooth scrolling for anchor links
  const handleAnchorClick = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
      e.preventDefault();
      const id = anchor.hash.substring(1);
      scrollToElement(id, 80); // 80px offset for the header
    }
  };
  
  document.addEventListener('click', handleAnchorClick);
  
  // Set up intersection observer for fade-in animations
  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeInObserver.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    },
    {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );
  
  // Observe all elements with fade-in-section class
  document.querySelectorAll('.fade-in-section').forEach((element) => {
    fadeInObserver.observe(element);
  });
  
  // Add fade-in-section class to all sections that don't already have it
  document.querySelectorAll('section').forEach((section) => {
    if (!section.classList.contains('fade-in-section')) {
      section.classList.add('fade-in-section');
      fadeInObserver.observe(section);
    }
  });
};

/**
 * Adds scroll-triggered animations to elements
 */
export const initScrollAnimations = (): void => {
  const animateOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-appear');
          animateOnScroll.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  // Apply to headings, paragraphs, and other content elements
  const animatableElements = document.querySelectorAll('h1, h2, h3, p.lead, .animate-on-scroll');
  animatableElements.forEach((el) => {
    animateOnScroll.observe(el);
  });
};
