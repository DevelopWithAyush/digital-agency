

import { useState, useEffect, RefObject } from 'react'

export const useElementVisibility = (elementRef: RefObject<Element>): boolean => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const targetElement = elementRef.current;

        // Function to monitor visibility changes
        const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        };

        // Initialize Intersection Observer to watch visibility changes if target exists
        if (targetElement) {
            const visibilityObserver = new IntersectionObserver(onVisibilityChange, {
                root: null, // viewport is the observational reference
                rootMargin: '100px 0px 100px 0px', // margins around the root
                threshold: .05  , // minimum portion of the target visible for callback
            });

            visibilityObserver.observe(targetElement);

            // Cleanup by disconnecting observer when component is unmounted
            return () => visibilityObserver.disconnect();
        }

    }, [elementRef]); // Effect dependencies

    return isVisible;
};

