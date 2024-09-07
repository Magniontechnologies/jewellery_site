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
            <a href="mailto:info@example.com" className="cta-button">Get in Touch</a>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.083412993694!2d78.65800901461085!3d8.88843359150657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040acb00000001%3A0x4976ae4c9f048c3e!2sSivaganga%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1658318270436!5m2!1sen!2sin"
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