// THIS SECTION CONTAINS:
// pill badge - "how it works"
// steps row: the three step cards
// reusable components

// Reusable components
import Pill from '../common/Pill'
import StepCard from './StepCard'

// Custom hook for scroll-triggered reveal
import useInView from '../../hooks/useInView'

// Step tile icons
import iconLocation from '../../assets/icon-location.svg'
import iconCalendar from '../../assets/calendar.svg'
import iconCar from '../../assets/icon-car.svg'

import './HowItWork.css'
import BrandStrip from './BrandStrip'


function HowItWork() {

    // Watch the steps row. When it scrolls into view, `isVisible`
    // flips to true and stays true.

    const [stepsRef, isVisible] = useInView({ threshold: 0.3 })

    // The three steps. Each object maps to one <StepCard>.
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

                <Pill>HOW IT WORK</Pill>

                <h2 className="how-it-work__heading">
                    Rent with following 3 working steps
                </h2>

                {/* Steps row — the ref watches when this scrolls into view */}
                <div className="how-it-work__steps" ref={stepsRef}>
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

            </div>

            {/* Brand logos row — part of this section per Figma */}
            <BrandStrip />
        </section>
    )
}

export default HowItWork