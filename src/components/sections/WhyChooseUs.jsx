// Contains the two Two-column layout:
//   Left:  Audi car (bleeds off left edge) + blue chevron shape
//   Right: Pill + heading + 4 feature items
// Uses useInView to detect when the section enters the viewport.





// Reusable components
import Pill from '../common/Pill'
import FeatureItem from './FeatureItem'

// Scroll-triggered reveal
import useInView from '../../hooks/useInView'

// Left column assets
import whyShape from '../../assets/why-shape.svg'
import whyCar from '../../assets/why-car.png'

// Feature icons
import iconLock from '../../assets/icon-lock.svg'
import iconUser from '../../assets/icon-user.svg'
import iconDelivery from '../../assets/icon-delivery.svg'
import iconHeadset from '../../assets/icon-headset.svg'

import './WhyChooseUs.css'


function WhyChooseUs() {
    // Watch the section. When it scrolls into view, flip to true
    // (and stay true).
    const [sectionRef, isVisible] = useInView({ threshold: 0.25 })

    // The four features — mapping over data keeps markup clean.
    const features = [
        {
            icon: iconLock,
            title: 'Best price guaranteed',
            description: "Find a lower price? We'll refund you 100% of the difference.",
        },
        {
            icon: iconUser,
            title: 'Experience driver',
            description: "Don't have driver? Don't worry, we have many experienced driver for you.",
        },
        {
            icon: iconDelivery,
            title: '24 hour car delivery',
            description: 'Book your car anytime and we will deliver it directly to you.',
        },
        {
            icon: iconHeadset,
            title: '24/7 technical support',
            description: 'Have a question? Contact Rentcars support any time when you have problem.',
        },
    ]

    // Conditional class modifier for the visible state.
    // Applied to the section wrapper, and the two columns read
    // from it via descendant selectors in the CSS.
    const sectionClass = `why-choose-us ${isVisible ? 'why-choose-us--visible' : ''}`

    return (
        <section className={sectionClass} ref={sectionRef}>
            <div className="why-choose-us__inner">

                {/*  LEFT: shape + car  */}
                <div className="why-choose-us__visual">
                    {/* Blue chevron shape (10% opacity) sits behind the car */}
                    <img src={whyShape} alt="" className="why-choose-us__shape" />
                    <img src={whyCar} alt="" className="why-choose-us__car" />
                </div>

                {/*  RIGHT: content  */}
                <div className="why-choose-us__content">

                    <Pill>WHY CHOOSE US</Pill>

                    <h2 className="why-choose-us__heading">
                        We offer the best experience with our rental deals
                    </h2>

                    <div className="why-choose-us__features">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs