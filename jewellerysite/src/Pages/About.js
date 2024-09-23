import './Styles/About.css';
import About_Img from "../Assets/About_img.png"

const About=()=>{
    return(<>
        <section id="About">
            <div className='About-Cont'>
                <div className='About-L'>
                    <div className='About-Img'>
                        <img src={About_Img} alt='About'/>
                    </div>
                </div>
                <div className='About-R'>
                    <p className='About-Title'>| About Us</p>
                    <div className='About-p'>
                        <p>At Amirthaasri Gems & Jewellers, we are dedicated to crafting timeless jewelry that celebrates beauty and sophistication. With decades of expertise in custom jewelry making, gemstone sourcing, and diamond grading, we pride ourselves on delivering pieces that are both elegant and unique. Our commitment to quality and customer satisfaction has earned us a reputation as one of the leading jewelers in the region.</p>
                        <p>From personalized jewelry creations to expert gem selection, each piece is carefully designed and crafted to perfection. Whether you're seeking a one-of-a-kind engagement ring or professional diamond certification, Amirthaasri offers unparalleled service and craftsmanship.</p>
                    </div>
                    <a href="#Gallery">Show Collections</a>
                </div>
            </div>
        </section>
    </>)
}
export default About;