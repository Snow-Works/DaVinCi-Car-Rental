/* LANDING PAGE HERO SECTION  */
import { useState, useEffect } from "react"

//Blob: the large light-blue shape behind the car
import blob from '../../assets/hero-blob.png'
import car1 from '../../assets/hero-car-1.png'
import car2 from '../../assets/hero-car-2.png'
import car3 from '../../assets/hero-car-3.png'

//reusable search bar (built as its own component)
import SearchBar from '../common/SearchBar'
import './Hero.css'

// Slide duration (must match the inline transition below)
const SLIDE_DURATION_MS = 600
// How long each car stays visible before sliding to the next
const ROTATION_INTERVAL_MS = 5000

function Hero() {

    //the car lineup
    const cars = [
        car1,
        car2,
        car3,
    ]

    // INFINITE CAROUSEL
    // We render an EXTRA clone of the first car at the end.
    // When we reach that clone, we instantly reset to index 
    const slides = [...cars, cars[0]]

    // Which slide we're showing now
    const [currentCar, setCurrentCar] = useState(0)

    // Toggle for the CSS transition — turned off briefly during the reset
    const [transitionEnabled, setTransitionEnabled] = useState(true)


    // Advance to the next slide every ROTATION_INTERVAL_MS.

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCar((prev) => prev + 1)
        }, ROTATION_INTERVAL_MS)
        return () => clearInterval(interval)
    }, [])


    // When we land on the CLONE slide (last in the array), wait
    // for the slide animation to finish, then jump instantly to
    // the real first slide with no transition.

    useEffect(() => {
        if (currentCar === cars.length) {
            const timeout = setTimeout(() => {
                setTransitionEnabled(false)
                setCurrentCar(0)
            }, SLIDE_DURATION_MS)
            return () => clearTimeout(timeout)
        }
    }, [currentCar, cars.length])


    // Re-enable the transition one tick after the reset, so the
    // next slide animates normally.
    useEffect(() => {
        if (!transitionEnabled) {
            const t = setTimeout(() => setTransitionEnabled(true), 50)
            return () => clearTimeout(t)
        }
    }, [transitionEnabled])


    return (
        <section className="hero" >
            <div className="hero__inner">

                {/* Left: content */}
                <div className="hero__content">
                    <h1 className="hero__title">Find, book and rent a car{' '}
                        {/* The blue underscore mark  that will be drawn in css */}
                        <span className="hero__title-accent">Easily</span>
                    </h1>

                    <p className="hero__subtitle">
                        Get a car wherever and whenever you need it with your RENTCARS
                    </p>

                    {/* Store badges-placeholder until they are exported */}
                    <div className="hero__badges">
                        <a href="#" className="hero__badge">Google Play</a>
                        <a href="#" className="hero__badge">App Store</a>
                    </div>
                </div>

                {/* RIGHT SIDE: BLOB AND CAR SECTION  */}
                <div className="hero__visual">
                    {/* Blob sits behind the car  */}
                    <img src={blob} alt="blob" className="hero__blob" />

                    {/* Carousel track. The inline style controls BOTH the
                    translate AND the transition, so we can briefly
                    disable the transition during the loop reset. */}
                    <div
                        className="hero__carousel"
                        style={{
                            transform: `translateX(-${currentCar * 100}%)`,
                            transition: transitionEnabled
                                ? `transform ${SLIDE_DURATION_MS}ms ease`
                                : 'none',
                        }}
                    >
                        {slides.map((car, index) => (
                            <img key={index}
                                src={car}
                                alt={`Car ${index + 1}`}
                                className="hero__car"
                            />
                        ))}
                    </div>
                </div>

            </div>


            {/* search bar at the bottom */}
            <div className="hero__search">
                <SearchBar />
            </div>
        </section >

    )


}

export default Hero