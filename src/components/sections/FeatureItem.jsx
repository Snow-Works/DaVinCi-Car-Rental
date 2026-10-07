// FeatureItem.jsx — one feature row in "Why choose us"
// Used four times by WhyChooseUs.jsx (Best price, Experience
// driver, 24 hour delivery, 24/7 support).

function FeatureItem({ icon, title, description }) {
    return (
        <div className="feature-item">

            {/* Icon tile — small rounded pale-blue square */}
            <div className="feature-item__icon-tile">
                <img src={icon} alt="" className="feature-item__icon" />
            </div>

            {/* Text block: title + description */}
            <div className="feature-item__body">
                <h3 className="feature-item__title">{title}</h3>
                <p className="feature-item__description">{description}</p>
            </div>

        </div>
    )
}

export default FeatureItem