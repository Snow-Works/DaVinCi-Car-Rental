import './StepCard.css'


function StepCard ({ icon, title, description }) {
    return (
        <div className="step-card">
            {/* Icon title (rounded pale-blue square with the icon centered ) */}

            <div className="step-card__icon-tile">

                {/* alt=" we have title below already conveys the maaning " */}

                <img src={icon} alt="" className="step-card__icon"  />
            </div>

            {/* text block: title + description */}
            <div  className="step-card__body">
                <h3 className="step-card__title">{title}</h3>
                <p className="step-card__description">{description}</p>
            </div>
        </div>
    )
    
}

export default StepCard