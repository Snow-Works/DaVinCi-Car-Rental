
// Footer.jsx — site-wide footer
// The blue logo icon is recolored to white with a CSS filter,
// so we don't need a separate export for it.


// Logo icon (blue SVG; recolored to white via CSS)
import logoIcon from '../../assets/brand-logo.svg'

// Contact icons (already exported in light/white for dark bg)
import iconPin from '../../assets/icon-pin-light.svg'
import iconPhone from '../../assets/icon-phone-light.svg'
import iconMail from '../../assets/icon-mail-light.svg'

// Social icons
import iconFacebook from '../../assets/icon-facebook.svg'
import iconInstagram from '../../assets/icon-instagram.svg'
import iconYoutube from '../../assets/icon-youtube.svg'

import './Footer.css'


function Footer() {

    // Link data for the three middle columns. Editing a column is
    // just editing this array.

    const productLinks = ['Career', 'Car', 'Packages', 'Features', 'Priceline']
    const resourceLinks = ['Download', 'Help Centre', 'Guides', 'Partner Network', 'Cruises', 'Developer']
    const aboutLinks = ['Why choose us', 'Our Story', 'Investor Relations', 'Press Center', 'Advertise']

    return (
        <footer className="footer">
            <div className="footer__inner">

                {/*  Top row: 5 columns */}
                <div className="footer__columns">

                    {/*  Column 1: Brand + contact  */}
                    <div className="footer__brand">

                        <a href="/" className="footer__logo" aria-label="RentCars home">
                            {/* CSS filter recolors the blue icon to white — no separate export needed */}
                            <img src={logoIcon} alt="" className="footer__logo-icon" />
                            <span className="footer__logo-text">RENTCARS</span>
                        </a>

                        <ul className="footer__contact">
                            <li className="footer__contact-item">
                                <img src={iconPin} alt="" className="footer__contact-icon" />
                                <span>25566 Hc 1, Glenallen, Alaska, 99588, USA</span>
                            </li>
                            <li className="footer__contact-item">
                                <img src={iconPhone} alt="" className="footer__contact-icon" />
                                <span>+603 4784 273 12</span>
                            </li>
                            <li className="footer__contact-item">
                                <img src={iconMail} alt="" className="footer__contact-icon" />
                                <span>rentcars@gmail.com</span>
                            </li>
                        </ul>

                    </div>

                    {/*  Column 2: Our Product  */}
                    <div className="footer__col">
                        <h3 className="footer__col-title">Our Product</h3>
                        <ul className="footer__col-list">
                            {productLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="footer__link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="footer__col">
                        <h3 className="footer__col-title">Resources</h3>
                        <ul className="footer__col-list">
                            {resourceLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="footer__link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: About Rentcars  */}
                    <div className="footer__col">
                        <h3 className="footer__col-title">About Rentcars</h3>
                        <ul className="footer__col-list">
                            {aboutLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="footer__link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*  Column 5: Follow Us  */}
                    <div className="footer__col">
                        <h3 className="footer__col-title">Follow Us</h3>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="Facebook">
                                <img src={iconFacebook} alt="" />
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Instagram">
                                <img src={iconInstagram} alt="" />
                            </a>
                            <a href="#" className="footer__social-link" aria-label="YouTube">
                                <img src={iconYoutube} alt="" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider  */}
                <hr className="footer__divider" />

                {/*  Copyright  */}
                <p className="footer__copyright">
                    Copyright 2023 · Rentcars. All Rights Reserved
                </p>

            </div>
        </footer>
    )
}

export default Footer