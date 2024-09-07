import Logo from "../Assets/Logo-Horizontal.png"
import Logo1 from "../Assets/Logo-Square.png"
import insta from "../Assets/insta.svg"
import FB from "../Assets/FB.svg"
import linkedin from "../Assets/linkedin.svg"


import "./Components.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                {/* LOGO HERE */}
                <div className="footer-Logo-Img">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="footer-Logo1-Img">

                    <img src={Logo1} alt="Logo1" />
                </div>

            </div>
            <div className="footer-content">
                <div className="quick-links">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Gallery">Gallery</a>
                    <a href="#Contact">Contact</a>
                </div>
                <div className="social-media">
                    <p>Follow us on</p>
                    <a href='www.google.com'> <img src={insta} alt="insta" /> </a>
                    <a href='www.google.com'> <img src={FB} alt="facebook" /> </a>
                    <a href='www.google.com'> <img src={linkedin} alt="linkedin" /> </a>


                </div>
                <div className="disclaimer">
                    <p>© 2024 Amirthaasri Gems & Jewellers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer
