// Contains the section containing the row for partner brands
// Uses useInView + staggered transitionDelay so the logos fade
// in one after the other when the strip scrolls into view.


import useInView from '../../hooks/useInView'

import honda from '../../assets/brand-honda.svg'
import jaguar from '../../assets/brand-jaguar.svg'
import nissan from '../../assets/brand-nissan.svg'
import volvo from '../../assets/brand-volvo.svg'
import acura from '../../assets/brand-acura.svg'
// import audi from '../../assets/brand-audi.svg'   // ← uncomment when exported

import './BrandStrip.css'


function BrandStrip() {
    // Logo list — order matters, matches Figma left-to-right
    const logos = [
        { src: honda, alt: 'Honda' },
        { src: jaguar, alt: 'Jaguar' },
        { src: nissan, alt: 'Nissan' },
        { src: volvo, alt: 'Volvo' },
        // { src: audi, alt: 'Audi' },   // ← uncomment when exported
        { src: acura, alt: 'Acura' },
    ]

    // Render the list twice. The doubled array is what makes the loop
    // seamless — see the keyframes in BrandStrip.css.
    const loopedLogos = [...logos, ...logos]

    return (
        <div className="brand-strip">
            <div className="brand-strip__track">
                {loopedLogos.map((logo, index) => (
                    <img
                        // Combine alt + index so keys are unique across both copies
                        key={`${logo.alt}-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="brand-strip__logo"
                    />
                ))}
            </div>
        </div>
    )
}

export default BrandStrip