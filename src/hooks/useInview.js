
// useInView.js, detects when an element enters the viewport

// Uses the browser's IntersectionObserver API.


import { useEffect, useRef, useState } from 'react'


function useInView({ threshold = 0.2, once = true } = {}) {
    // The DOM element we're watching
    const ref = useRef(null)

    // Whether the element has entered the viewport
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Create an observer that fires whenever the element's
        // visibility crosses the threshold
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    // If `once` is true, stop observing after the first hit
                    if (once) observer.unobserve(element)
                } else if (!once) {
                    setIsInView(false)
                }
            },
            { threshold }
        )

        observer.observe(element)

        // Cleanup: disconnect the observer on unmount
        return () => observer.disconnect()
    }, [threshold, once])

    return [ref, isInView]
}

export default useInView