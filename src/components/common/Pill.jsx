// Pill.jsx a small reusable badge 

// Renders a short uppercase label inside a rounded, pale-blue container, 
// used to introduce sections 

import './Pill.css'

function Pill({ children }) {
    return (
        // the pill is inline content, not a block-level element
        <span className="pill">
            {children}
        </span>
    )

} 

export default Pill