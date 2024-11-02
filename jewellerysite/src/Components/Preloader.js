import "./Preloader.css"
import React from "react";

import Loading from "../Assets/loading.gif"

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={Loading} alt="Loading..."/>
        </div>
    );
};

export default Preloader;
