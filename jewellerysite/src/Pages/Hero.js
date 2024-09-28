import HeroImg from '../Assets/Hero.jpg'
import './Styles/Hero.css'

const Hero=()=>{
    return(<>
        <section id="Home" style={{paddingTop:'10vh'}}>
        <div className="hero-Img">

            <img src={HeroImg} alt="Hero" />

        </div>
        </section>
    </>)
}
export default Hero;