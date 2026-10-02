import { useState, useEffect } from 'react'
import logo from '../../assets/brand-logo.svg'
import blob from '../../assets/hero-blob.png'
import './Header.css'



function Header() {

    const [scrolled, setScrolled] = useState(false)

    //attaching a scroll listener on mount

    useEffect(()=>{
        function handleScroll() {

            setScrolled(window.scrollY >20)
            //window.scrollY = scrolling vertically 
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)


        //removing the listener on umount to avoid a memory leak.
        return() => window.removeEventListener('scroll', handleScroll)

    }, [])


    //Render 

    return(
        //building the header section

        



        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>

            {/* floating white card - 1120px, centered */}
            <div className="header__inner">

                {/*brand logo */}
                <a href="/" className="header__logo">
                    <img src={logo} alt="RentCars" />

                    <span className="header__logo-text">RENTCARS</span>
                </a>


                


                {/* Navigation Links */}
                <nav className="header__nav" aria-label="Primary">
                    <a href="#" className="header__nav-link">Become a renter</a>
                    <a href="#" className="header__nav-link">Rental deals</a> 
                    <a href="#" className="header__nav-link">How it works</a> 
                    <a href="#" className="header__nav-link">Why choose us</a>  
                </nav>

                {/*sign in + sign up button section*/}
                <div className="header__actions">
                    <a href="#" className="header__signin">Sign in</a>
                    <a href="#" className="header__signup">Sign up</a> 
                </div>
            </div>

            
        </header>



    )
    
}


export default Header