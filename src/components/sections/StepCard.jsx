import './StepCard.css'


function StepCard({ icon, title, description, index, isVisible }) {
    // Build the className with an optional "--visible" modifier.
    // When isVisible is true, the CSS transitions the card into place.
    const cardClass = `step-card ${isVisible ? 'step-card--visible' : ''}`

    // Inline style for the stagger delay. Each card waits
    // `index * 0.12s` before starting its animation.
    const delay = `${index * 0.12}s`

    return (
        <div className={cardClass} style={{ transitionDelay: delay }}>

            <div className="step-card__icon-tile">
                <img src={icon} alt="" className="step-card__icon" />
            </div>

            <div className="step-card__body">
                <h3 className="step-card__title">{title}</h3>
                <p className="step-card__description">{description}</p>
            </div>

        </div>
    )
}

export default StepCard