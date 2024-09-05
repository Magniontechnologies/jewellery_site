// import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <section>
            <div>
                {/* LOGO HERE */}
                <img/>

            </div>
            <div>
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
        </section>
        </>
    )
}

export default Navbar