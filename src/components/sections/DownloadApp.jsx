
// DownloadApp.jsx — "Download Rentcars App" section

// Uses the useInView hook for scroll-triggered reveal.

import Pill from '../common/Pill'
import useInView from '../../hooks/useInView'

// Assets
import phoneMockup from '../../assets/phone-mockup.png'
import badgeGooglePlay from '../../assets/badge-google-play.png'
import badgeAppStore   from '../../assets/badge-app-store.png'
import './DownloadApp.css'


function DownloadApp() {
    // Watch the section. When it scrolls into view, `isVisible`
    // flips to true and stays true.
    const [sectionRef, isVisible] = useInView({ threshold: 0.25 })

    const sectionClass = `download-app ${isVisible ? 'download-app--visible' : ''}`

    return (
        <section className={sectionClass} ref={sectionRef}>
            <div className="download-app__inner">

                {/*  LEFT: content */}
                <div className="download-app__content">

                    <Pill>DOWNLOAD</Pill>

                    <h2 className="download-app__heading">
                        Download Rentcars App for <span className="download-app__heading-accent">FREE</span>
                    </h2>

                    <p className="download-app__subheading">
                        For faster, easier booking and exclusive deals.
                    </p>

                    {/* Store badges */}
                    <div className="download-app__badges">
                        <a href="#" className="download-app__badge">
                            <img src={badgeGooglePlay} alt="Get it on Google Play" />
                        </a>
                        <a href="#" className="download-app__badge">
                            <img src={badgeAppStore} alt="Download on the App Store" />
                        </a>
                    </div>

                </div>

                {/*  RIGHT: phone mockup  */}
                <div className="download-app__visual">
                    <img src={phoneMockup} alt="" className="download-app__phone" />
                </div>

            </div>
        </section>
    )
}

export default DownloadApp