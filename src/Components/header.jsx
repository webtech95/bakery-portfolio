import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./header.css";
import Logo from "../images/Logo.jpg";

import Home from "./home";
import Testimonials from "./testimonials";
import Product from "./product";
import AboutBakery from "./about";
import Cart from "./Cart";
import Contact from "./contact";
import Login from "./login";
import { ThemeContext } from "./consumer";
import { ShoppingCart } from "lucide-react";

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

    const themeColor = {
        color: theme === "light" ? "#000" : "#fff"
    };

    return (
        <div>
            <div className="parent-header">
                <header className={`Navbar ${isScrolled ? "header-scroller" : ""}`}>
                    <div className="Nav-container">
                        <div>
                            <Link to="/" className="logo-container" onClick={() => setMenuOpen(false)}>
                                <img className="Header-Logo" src={Logo} alt="Logo" />
                            </Link>
                        </div>

                        <nav
                            className={`Nav ${menuOpen ? "open" : ""} ${isScrolled ? "header-scroller" : ""}`}
                            style={themeColor}
                        >
                            <Link style={themeColor} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link style={themeColor} to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
                            <Link style={themeColor} to="/testimonials" onClick={() => setMenuOpen(false)}>Review</Link>
                            <Link style={themeColor} to="/product" onClick={() => setMenuOpen(false)}>Product</Link>
                            <Link style={themeColor} to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
                            <Link style={themeColor} to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                        </nav>

                        <div className="btn-perent">
                            <Link className="Header-btn" style={{ color: themeColor.color }} to="/Cart" onClick={() => setMenuOpen(false)}>
                                <ShoppingCart size={32} />
                            </Link>
                            <Link className="Header-btn2" to="/Login" style={{ color: themeColor.color }}>
                                Login
                            </Link>
                        </div>
                    </div>

                    <div
                        style={themeColor}
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✖" : "☰"}
                    </div>
                </header>
            </div>

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutBakery />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>

                <button className="toggle-btn" onClick={toggleTheme}>
                    {theme === "light" ? "🌑" : "🌙"}
                </button>
            </div>
        </div>
    );
};

export default Header;
