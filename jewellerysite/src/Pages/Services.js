import './Styles/Services.css';
import cj from '../Assets/services/Custom-Jewelry.jpg';
import gs from '../Assets/services/gem-stone.jpg'
import dg from '../Assets/services/diamond-grading.jpg'

const Services = () => {
  return (
    <section id="Services">
      <div className="services-container">
        <div className="service-box">
          <h2>Custom Jewelry Creation</h2>
          <img src={cj} alt="Custom Jewelry" className="service-image" />
          <p>
            Let us bring your dream designs to life with our expert jewelry-making services. Whether it's an engagement ring or a special piece for a loved one, we craft unique, personalized jewelry tailored to your style and preferences.
          </p>
        </div>
        <div className="service-box">
          <h2>Gemstone Procurement</h2>
          <img src={gs} alt="Gemstone Procurement" className="service-image" />
          <p>
            At Amirthaasri, we source only the highest quality gemstones from trusted suppliers. Our gemologists carefully select each stone for its brilliance, clarity, and uniqueness, ensuring every piece we offer is truly remarkable.
          </p>
        </div>
        <div className="service-box">
          <h2>Diamond Grading</h2>
          <img src={dg} alt="Diamond Grading" className="service-image" />
          <p>
            We offer professional diamond grading and certification, ensuring the authenticity and quality of every diamond we sell. Our expertise in diamond evaluation guarantees that you receive a gem of impeccable quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

