import "./Styles/Gallery.css";
import G1 from "../Assets/Gallery/Jewellery1.jpg";
import G2 from "../Assets/Gallery/Jewellery2.jpg";
import G3 from "../Assets/Gallery/Jewellery3.jpg";
import G4 from "../Assets/Gallery/Jewellery4.jpg";
import { useState } from 'react';

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);

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

    const itemsPerPage = 8; // Number of images per page
    const totalPages = Math.ceil(imageData.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = imageData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="Gallery" style={{ height: '90vh' }}>
            <div className="Gallery-Title">
                <p>| Gallery</p>
            </div>
            <div className="Gallery-Cont">
                <div className="GalleryPages">
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
