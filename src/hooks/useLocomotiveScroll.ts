import { useEffect, useRef } from 'react';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    let locomotiveScroll: any;

    const initializeScroll = async () => {
      if (scrollRef.current) {
        // Dynamically import locomotive-scroll
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        });

        locomotiveScrollRef.current = locomotiveScroll;

        // Update ScrollTrigger when locomotive-scroll updates
        locomotiveScroll.on('scroll', () => {
          // Check if ScrollTrigger exists before updating
          if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
            (window as any).ScrollTrigger.update();
          }
        });
      }
    };

    initializeScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef.current };
};