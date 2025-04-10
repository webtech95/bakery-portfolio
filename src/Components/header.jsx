import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./header.css";
import Logo from "../images/Logo.jpg";
import Home from "./home";
import Services from "./service";
import Testimonials from "./testimonials";
import Product from "./product";
import Contact from "./contact";
import { ThemeContext } from "./consumer";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { theme, toggleTheme } = useContext(ThemeContext);








    return (
        <>
            <header className={`Navbar ${isScrolled ? "header-scroller" : ""}`}>
                <div className="nav-container">
                    {/* Logo */}
                    <Link to="/" className="logo-container" onClick={() => setMenuOpen(false)}>
                        <img className="Header-Logo" src={Logo} alt="Logo" />
                    </Link>

                    {/* Mobile Toggle Button */}
                    <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "✖" : "☰"}
                    </div>

                    {/* Navigation Menu */}
                    <nav className={`Nav ${menuOpen ? "open" : ""}`}>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/service" onClick={() => setMenuOpen(false)}>Our Services</Link>
                        <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Review</Link>
                        <Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </nav>

                    {/* Buy Now Button (Hidden on Mobile) */}
                    <a href="#" className="Header-btn">Buy Now!</a>
                </div>
            </header>

            {/* Page Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Services />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <div>
                <h1>Current Theme: {theme}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>

        </>


    );

};

export default Header;



