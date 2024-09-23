import { useEffect, useState } from 'react';
import "./Styles/Gallery.css";
import G1 from "../Assets/Gallery/Jewellery1.jpg";
import G2 from "../Assets/Gallery/Jewellery2.jpg";
import G3 from "../Assets/Gallery/Jewellery3.jpg";
import G4 from "../Assets/Gallery/Jewellery4.jpg";

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false); // For controlling transition

    let DWid=window.innerWidth;
    console.log(DWid)

    const imageData = [
        { img: G1, text: "Gold rates have been increasing significantly this year." },
        { img: G2, text: "Jewellery designs are evolving with modern trends." },
        { img: G3, text: "Investing in gold is considered a safe financial option." },
        { img: G4, text: "Historical data shows a steady rise in gold prices." },
        { img: G1, text: "Gold rates have been increasing significantly this year." },
        { img: G2, text: "Jewellery designs are evolving with modern trends." },
        { img: G3, text: "Investing in gold is considered a safe financial option." },
        { img: G4, text: "Historical data shows a steady rise in gold prices." },
        { img: G1, text: "Gold rates have been increasing significantly this year." },
        { img: G2, text: "Jewellery designs are evolving with modern trends." },
        { img: G3, text: "Investing in gold is considered a safe financial option." },
        { img: G4, text: "Historical data shows a steady rise in gold prices." }
    ];

    const [itemsPerPage,setIP] = useState(8); // Number of images per page
    useEffect(()=>{
        if(DWid<790){
            setIP(6)
        }
        if(DWid<476){
            setIP(4)
        }
    },[DWid])
    
    const totalPages = Math.ceil(imageData.length / itemsPerPage);

    const handlePageChange = (page) => {
        setIsTransitioning(true); // Start transition
        setTimeout(() => {
            setCurrentPage(page); // Change page after transition
            setIsTransitioning(false); // End transition
        }, 500); // Match the CSS transition duration
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = imageData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="Gallery">
            <div className="Gallery-Title">
                <p>| Gallery</p>
            </div>
            <div className="Gallery-Cont">
                <div className={`GalleryPages ${isTransitioning ? 'exiting' : 'entering'}`}>
                    <div className="GalleryPage">
                        {paginatedData.map((data, index) => (
                            <div className="Gallery-Img" key={index}>
                                <img src={data.img} alt="Jewellery" />
                                <p>{data.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="Gallery-PageButtons">
                        {[...Array(totalPages)].map((_, pageIndex) => (
                            <button 
                                key={pageIndex + 1} 
                                onClick={() => handlePageChange(pageIndex + 1)}
                                className={currentPage === pageIndex + 1 ? 'active' : ''}
                            >
                                {pageIndex + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
