import "./Styles/Gallery.css"

import G1 from "../Assets/Gallery/Jewellery1.jpg"
import G2 from "../Assets/Gallery/Jewellery2.jpg"
import G3 from "../Assets/Gallery/Jewellery3.jpg"
import G4 from "../Assets/Gallery/Jewellery4.jpg"

const Gallery=()=>{
    return(<>
        <section id="Gallery" style={{height:'90vh'}}>
            <div className="Gallery-Title">
                <p>| Gallery</p>
            </div>
            <div className="Gallery-Cont">
                <div className="Gallery-Scroll">
                    <div className="Gallery-Col">
                        <div className="Gallery-Img">
                            <img src={G1} alt="Jewellery"/>
                        </div>
                        <div className="Gallery-Img">
                            <img src={G2} alt="Jewellery"/>
                        </div>
                    </div>
                    
                    <div className="Gallery-Col">
                        <div className="Gallery-Img">
                            <img src={G3} alt="Jewellery"/>
                        </div>
                        <div className="Gallery-Img">
                            <img src={G4} alt="Jewellery"/>
                        </div>
                    </div>

                    <div className="Gallery-Col">
                        <div className="Gallery-Img">
                            <img src={G2} alt="Jewellery"/>
                        </div>
                        <div className="Gallery-Img">
                            <img src={G3} alt="Jewellery"/>
                        </div>
                    </div>

                    <div className="Gallery-Col">
                        <div className="Gallery-Img">
                            <img src={G1} alt="Jewellery"/>
                        </div>
                        <div className="Gallery-Img">
                            <img src={G3} alt="Jewellery"/>
                        </div>
                    </div>

                    <div className="Gallery-Col">
                        <div className="Gallery-Img">
                            <img src={G4} alt="Jewellery"/>
                        </div>
                        <div className="Gallery-Img">
                            <img src={G2} alt="Jewellery"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Gallery;