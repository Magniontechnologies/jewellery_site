import "./Styles/Contact.css"

const Contact=()=>{
    return(
        <section className="contact-section" id="Contact">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              Reach out to us for any inquiries or to schedule a visit. Our expert team is here to assist you with all your jewelry, gemstone, and diamond needs.
            </p>
            <div className="contact-details">
              <h3>Address:</h3>
              <address>
                19/6, Amirthanijasritham, Andal Street,<br />
                Sriram Nagar, Kottaiyur, Sivaganga,<br />
                Karaikudi, PIN 630106
              </address>
              <h3>Phone:</h3>
              <p>
                +91 95661 22627, +91 93443 60964
              </p>
            </div>
            <a href="mailto:info@amirthaasrijewellers.in" className="cta-button">Get in Touch</a>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.0213468541347!2d78.7986834!3d10.0973364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0067a41e4a3101%3A0xc5335d6746d94b33!2sAmirthanijasritham!5e0!3m2!1sen!2sin!4v1730093675119!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </section>
    )
}
export default Contact;