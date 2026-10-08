// car deal rental pricing cards
// Motion:
//   The cards row uses useInView. When it scrolls into view,
//   each CarCard fades+slides in, delayed by index * 0.12s.


//Reusable components
import Pill from '../common/Pill'
import CarCard from './CarCard'


// Scroll-triggered reveal
import useInView from '../../hooks/useInView'


// car images 

import carJaguar from '../../assets/car-jaguar.png'
import carAudiR8 from '../../assets/car-audi-r8.png'
import carBmwM3 from '../../assets/car-bmw-m3.png'
import carLamborghini from '../../assets/car-lamborghini.png'


// Arrow icon used in the CTA button
import iconArrowRight from '../../assets/icon-arrow-right.svg'

import './PopularDeals.css'


function PopularDeals() {
    // Watch the cards row, when it scrolls into view, `isVisible`
    // flips to true and stays true
    const [gridRef, isVisible] = useInView({ threshold: 0.15 })
this

    const cars = [
        {
            id: 1,
            name: 'Jaguar XE L P250',
            image: carJaguar,
            rating: 4.8,
            reviews: 2436,
            passengers: 4,
            transmission: 'Auto',
            ac: 'Air Conditioning',
            doors: 4,
            pricePerDay: 600,

        },

        {

            id: 2,
            name: 'Audi R8',
            image: carAudiR8,
            rating: 4.6,
            reviews: 1936,
            passengers: 2,
            transmission: 'Auto',
            ac: 'Air Conditioning',
            doors: 2,
            pricePerDay: 30,

        },

        {

            id: 3,
            name: 'BMW M3',
            image: carBmwM3,
            rating: 4.5,
            reviews: 2036,
            passengers: 4,
            transmission: 'Auto',
            ac: 'Air Conditioning',
            doors: 4,
            pricePerDay: 60,

        },

        {
            id: 4,
            name: 'Lamborghini Huracan',
            image: carLamborghini,
            rating: 4.3,
            reviews: 2236,
            passengers: 2,
            transmission: 'Auto',
            ac: 'Air Conditioning',
            doors: 2,
            pricePerDay: 230,
        },

    ]

    return (
        <section className="popular-deals">
            <div className="popular-deals__inner">

                <Pill>POPULAR RENTAL DEALS</Pill>

                <h2 className="popular-deals__heading">
                    Most popular cars rental deals
                </h2>

                {/* Cards row - ref watches for scroll-into-view */}
                <div className="popular-deals__grid" ref={gridRef}>
                    {cars.map((car, index) => (
                        <div
                            key={car.id}
                            className={`popular-deals__card-slot ${isVisible ? 'popular-deals__card-slot--visible' : ''}`}
                            // Stagger: each card starts 120ms after the previous
                            style={{ transitionDelay: `${index * 0.12}s` }}>
                            <CarCard car={car} />
                        </div>
                    ))}
                </div>



                {/* CTA button below the row  */}
                <button type="button" className="popular-deals__cta">
                    show all vehicles
                    <img src={iconArrowRight} alt="" className="popular-deals__cta-icon" />
                </button>
            </div>
        </section>
    )



}


export default PopularDeals