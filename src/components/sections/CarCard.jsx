// CarCard Rental pricing card section
// The `car` prop is shaped like a backend car object so we can
// later replace the hardcoded array with API data with no changes:
//   {
//     id, name, image,
//     rating, reviews,
//     passengers, transmission, ac, doors,
//     pricePerDay
//   }


// icons reused inside the card

import iconStar from '../../assets/icon-star.svg'
import iconPassenger from '../../assets/icon-passenger.svg'
import iconGear from '../../assets/icon-gear.svg'
import iconSnowflake from '../../assets/icon-snowflake.svg'
import iconDoor from '../../assets/icon-door.svg'
import iconArrowRight from '../../assets/icon-arrow-right.svg'

import './CarCard.css'


function CarCard({ car }) {
    return (
        <article className="car-card">

            {/* Car photo */}
            <div className="car-card__image-wrap">
                <img src={car.image} alt={car.name} className="car-card__image" />
            </div>

            {/* card body section */}
            <div className="car-card__body">

                {/* title */}
                <h3 className="car-card__title">
                    {car.name}
                </h3>
                {/* Rating row */}
                <div className="car-card-rating">
                    <img src={iconStar} alt="" className="car-card__rating-icon" />

                    <span className="car-card-rating__score">{car.rating}</span>

                    <span className="car-card-rating__score-reviews">({car.reviews} reviews)</span>


                </div>

                {/* specs grid (2 columns by 2 rows)*/}
                <div className="car-card__specs">

                    <div className="car-card__spec">
                        <img src={iconPassenger} alt="" className="car-card__spec-icon" />

                        <span className="car-card__spec-label">{car.passengers}Passengers</span>

                    </div>

                    <div className="car-card__spec">
                        <img src={iconGear} alt="" className="car-card__spec-icon" />

                        <span className="car-card__spec-label">{car.transmission}</span>
                    </div>


                    <div className="car-card__spec">
                        <img src={iconSnowflake} alt="" className="car-card__spec-icon" />
                        <span className="car-card__spec-label">{car.ac}</span>
                    </div>

                    <div className="car-card__spec">
                        <img src={iconDoor} alt="" className="car-card__spec-icon" />
                        <span className="car-card__spec-label">{car.doors} Doors</span>
                    </div>



                </div>

                {/* Divider */}
                <hr className="car-card__divider" />

                {/* Price row */}
                <div className="car-card__price-row">
                    <span className="car-card__price-label">Price</span>
                    <div className="car-card__price-value">
                        <span className="car-card__price-amount">${car.pricePerDay.toLocaleString()}</span>
                        <span className="car-card__price-unit">/day</span>
                    </div>
                </div>

                {/* Rent Now button */}
                <button type="button" className="car-card__rent">
                    Rent Now
                    <img src={iconArrowRight} alt="" className="car-card__rent-icon" />
                </button>

            </div>



        </article>
    )
}


export default CarCard