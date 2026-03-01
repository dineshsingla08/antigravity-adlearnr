import { useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element intersects with the viewport
 * Useful for triggering animations on scroll.
 */
export function useIntersect(options = { threshold: 0.1, rootMargin: '0px' }) {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            // If the element is intersecting, add the animation class
            if (entry.isIntersecting) {
                element.classList.add('animate-fade-in-up');
                // Optional: stop observing once animated
                // observer.unobserve(element);
            }
        }, options);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options.threshold, options.rootMargin]);

    return elementRef;
}
