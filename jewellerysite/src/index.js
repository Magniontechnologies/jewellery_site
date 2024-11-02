import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';

const App = () => {
    const [PreloaderX, setPreloaderX] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPreloaderX(false);
        }, 3000);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <Router>
            {PreloaderX && <Preloader />}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h2>404 Page Not Found</h2>} />
            </Routes>
            <Footer />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
