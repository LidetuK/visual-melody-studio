
/**
 * Smoothly scrolls to an element on the page
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element (in pixels)
 * @param duration Optional duration of the scroll animation (in milliseconds)
 */
export const scrollToElement = (elementId: string, offset = 0, duration = 800): void => {
  const element = document.getElementById(elementId);
  
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  const startTime = performance.now();
  const startPosition = window.pageYOffset;
  
  const ease = (t: number): number => {
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
 */
export const initSmoothScrolling = (): void => {
  document.documentElement.classList.add('smooth-scrolling');
  
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
};
