// THIS SECTION CONTAINS:
// pill badge - "how it works"
// steps row: the three step cards
// reusable components

import Pill from '../common/Pill'
import StepCard from './StepCard'


// Step title icons 
import iconLocation from '../../assets/icon-location.svg'
import iconCalendar from '../../assets/calendar.svg'
import iconCar from '../../assets/icon-car.svg'

import './HowItWork.css'

function HowItWork() {

    // The three steps. Each object maps to one <StepCard>.
    // Order matters — rendered top-to-bottom, left-to-right.

    const steps = [

        {
            icon: iconLocation,
            title: 'Choose location',
            description: 'Choose your and find your best car',
        },
        {
            icon: iconCalendar,
            title: 'Pick-up date',
            description: 'Select your pick up date and time to book your car',
        },
        {
            icon: iconCar,
            title: 'Book your car',
            description: 'Book your car and we will deliver it directly to you',
        },

    ]


    return (
        <section className="how-it-work">
            <div className="how-it-work__inner">

                {/* Pill badge */}
                <Pill>HOW IT WORK</Pill>

                {/* Heading  */}
                <h2 className="how-it-work__heading">
                    Rent with following 3 working steps
                </h2>

                {/*  Steps row  */}
                <div className="how-it-work__steps">
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HowItWork