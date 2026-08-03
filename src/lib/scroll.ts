export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement> | null, href: string, duration = 600) => {
  if (href.startsWith('#')) {
    if (e) e.preventDefault();
    const targetId = href.replace('#', '');
    
    let targetPosition = 0;
    const offset = 90; // Offset for fixed navbar
    if (targetId) {
      const elem = document.getElementById(targetId);
      if (elem) {
        targetPosition = elem.getBoundingClientRect().top + window.pageYOffset - offset;
      } else {
        return;
      }
    }
    
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start: number | null = null;

    const easeOutCubic = (t: number) => (--t) * t * t + 1;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeOutCubic(progress));

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }
};
