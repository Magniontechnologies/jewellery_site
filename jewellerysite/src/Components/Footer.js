import Logo from "../Assets/Logo-Horizontal.png"
import Logo1 from "../Assets/Logo-Square.png"
import 
import "./Components.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                {/* LOGO HERE */}
                <div className="footer-Logo-Img">
                    <img src={Logo} alt="Logo"/>
                </div>

                <div className="footer-Logo1-Img">
                   
                    <img src={Logo1} alt="Logo1"/>
                </div>

            </div>
            <div className="footer-content">
                <div className="quick-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="social-media">
                    <p>Follow us on</p>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="disclaimer">
                    <p>© 2024 Amirthaasri Gems & Jewellers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer
