import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./header.css";
import Logo from "../images/Logo.jpg";
import Home from "./home";
// import Services from "./service";
import Testimonials from "./testimonials";
import Product from "./product";
import Contact from "./contact";
import { ThemeContext } from "./consumer";
import Cart from "./Cart";
import AboutBakery from "./about";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }


    return (
        <div>
            <div className="parent-header">
                <header className={`Navbar ${isScrolled ? "header-scroller" : ""}`}>
                    <div className="nav-container">
                        {/* Logo */}
                        <Link to="/" className="logo-container" onClick={() => setMenuOpen(false)}>
                            <img className="Header-Logo" src={Logo} alt="Logo" />
                        </Link>

                        {/* Mobile Toggle Button */}
                        <div
                            style={color}
                            className="menu-toggle"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? "✖" : "☰"}
                        </div>

                        {/* Navigation and Buttons */}
                        <div className={`Nav ${menuOpen ? "open" : ""}`}>
                                <nav>
                                    <Link style={color} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                                    <Link style={color} to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
                                    <Link style={color} to="/testimonials" onClick={() => setMenuOpen(false)}>Review</Link>
                                    <Link style={color} to="/product" onClick={() => setMenuOpen(false)}>Product</Link>
                                    <Link style={color} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                                </nav>
                            {/* Buttons */}
                            <main className="btn-perent">
                                <a
                                    href="#"
                                    style={{
                                        background: theme === "light" ? "#fff" : "#000",
                                        color: theme === "light" ? "#000" : "#fff",
                                    }}
                                    className="Header-btn"
                                >
                                    Login
                                </a>

                                <button className="Header-btn2">
                                    <Link
                                        style={color}
                                        to="/Cart"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Cart
                                    </Link>
                                </button>
                            </main>
                        </div>
                    </div>
                </header>
            </div>

            {/* Page Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutBakery />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>

            {/* Theme Toggle Button */}
            <button className="toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? "🌑" : "🌙"}
            </button>
        </div>
    );


};

export default Header;



