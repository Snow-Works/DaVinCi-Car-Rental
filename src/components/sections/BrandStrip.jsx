// Contains the section containing the row for partner brands
// Uses useInView + staggered transitionDelay so the logos fade
// in one after the other when the strip scrolls into view.


import useInView from '../../hooks/useInView'

// Brand logo assets
import honda from '../../assets/brand-honda.svg'
import jaguar from '../../assets/brand-jaguar.svg'
import nissan from '../../assets/brand-nissan.svg'
import volvo from '../../assets/brand-volvo.svg'
import acura from '../../assets/brand-acura.svg'
// import audi from '../../assets/brand-audi.svg'   // ← uncomment when exported

import './BrandStrip.css'

function BrandStrip() {
    //watch the trac; stagger fires the moment it enters the viewport 
    const [trackRef, isVisible] = useInView({ threshold: 0.2})

    //brand logo list ( the order matters, and matches figma left-to-tight)
    const logos = [
        { src: honda, alt: 'Honda' },
        { src: jaguar, alt: 'Jaguar' },
    { src: nissan, alt: 'Nissan' },
    { src: volvo,  alt: 'Volvo'  },
    // { src: audi, alt: 'Audi' },   // ← uncomment when exported
    { src: acura,  alt: 'Acura'  },

    ]


    return (
        <div className="brand-strip">
            <div className="brand-strip__track" ref={trackRef}>
                {logos.map((logo, index) => (
                    <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className={`brand-strip__logo ${isVisible ? 'brand-strip__logo--visible' : ''}`}
                    // stagger: each logo starts 80ms after the previous
                    style={{ transitionDelay: `${index * 0.08}s`}}
                    />
                ))}
            </div>
        </div>
    )

}


export default BrandStrip