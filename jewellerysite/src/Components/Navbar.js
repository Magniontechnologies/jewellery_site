// import { Link } from "react-router-dom";
import Logo from "../Assets/Logo-Horizontal.png"
import "./Components.css"
import Menu from "../Assets/Icons/Menu.svg"
import insta from "../Assets/insta.svg"
import FB from "../Assets/FB.svg"
import linkedin from "../Assets/linkedin.svg"
import Cross from "../Assets/Icons/Cross.svg"


const Navbar=()=>{

    const toggleMenu = () => {
        const menu = document.querySelector(".Navbar-Ham-Nav");
        const isMenuOpen = menu.style.transform === 'translateX(0%)';
        menu.style.transform = isMenuOpen ? 'translateX(-100%)' : 'translateX(0%)';
        
        const menuIcon = document.querySelector(".Nav-Ham-But img");
        menuIcon.src = isMenuOpen ? Menu : Cross;
    };

    return(
        <>
        <section className="Navbar-Bar">
            <div>
                {/* LOGO HERE */}
                <div className="Logo-Img">
                    <img src={Logo} alt="Logo"/>
                </div>

            </div>
            <div className="Navbar-Nav">
                {/* --- FOR OVER PAGE NAVIGATION --- */}

                {/* <Link to='/'>Home</Link>
                <Link to="/About">About</Link>
                <Link to='/Services'>Services</Link>
                <Link to='/Gallery'>Gallery</Link>
                <Link to'/Contact'>Contact</Link> */}

                {/* --- FOR SINGLE PAGE NAVIGATION --- */}

                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Services">Services</a>
                <a href="#Gallery">Gallery</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className="Navbar-Ham">
                <button onClick={toggleMenu} className="Nav-Ham-But">
                    <img src={Menu} alt="Menu"/>
                </button>
                <div className="Navbar-Ham-Nav">
                    <a href="#Home" onClick={toggleMenu}>Home</a>
                    <a href="#About" onClick={toggleMenu}>About</a>
                    <a href="#Services" onClick={toggleMenu}>Services</a>
                    <a href="#Gallery" onClick={toggleMenu}>Gallery</a>
                    <a href="#Contact" onClick={toggleMenu} className="Nav-Ham-L">Contact</a>
                    <div className="Nav-Contact">
                        <p>Contact : </p>
                        <address>
                            19/6, Amirthanijasritham, Andal Street, Sriram Nagar, Kottaiyur, Sivaganga, Karaikudi, PIN 630106<br/><br/>+91 95661 22627<br/>+91 93443 60964
                        </address>
                        <div className="Nav-Contact-Social">
                            <a href='www.google.com'> <img src={insta} alt="insta" /> </a>
                            <a href='www.google.com'> <img src={FB} alt="facebook" /> </a>
                            <a href='www.google.com'> <img src={linkedin} alt="linkedin" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Navbar