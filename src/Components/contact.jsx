import React, { useContext } from "react";
import "./contact.css";
import img1 from "../images/icons8-facebook-circled.gif"
import img2 from "../images/icons8-instagram-logo-50.png"
import img3 from "../images/icons8-linkedin-circled.gif"
import img4 from "../images/icons8-x-50.png"
import { ThemeContext } from "./consumer";


const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }
   
    const themeStyle = {
        background: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? '#000' : '#fff',
    };

    return (
        <div className="perent-contact">
            {/* Google Map */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6281636960257!2d77.2772555!3d28.6708503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd926efa6db9%3A0x10e10c2ee3c4116a!2sHeavenly%20Creations%20Bakery!5e0!3m2!1sen!2sin!4v1741760391215!5m2!1sen!2sin"
                width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Contact Form */}
            <div className="contact-container" >
                <form className="contact-form">
                    <input type="text" placeholder="Name" required style={themeStyle} />
                    <input type="text" placeholder="Phone" required style={themeStyle} />
                    <input type="email" placeholder="Email" required style={themeStyle} />
                    <textarea placeholder="Message" required style={themeStyle}></textarea>
                    <button type="submit" style={color}>SEND</button>
                </form>
            </div>

            {/* Footer Section */}
            <footer>
                <div className="footer-content">
                    <div className="opening-hours">
                        <h3>OPENING HOURS</h3>
                        <p>Monday - Thursday: 8:00 - 16:00</p>
                        <p>Friday - Saturday: 8:00 - 16:00</p>
                        <p>Sunday: 8:00 - 16:00</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/"><img src={img1} alt="facebook" /></a>
                            <a href="https://www.instagram.com/"><img src={img2} alt="instagram" /></a>
                            <a href="https://in.linkedin.com/"><img src={img3} alt="linkedin" /></a>
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2Ftgcindia">
                                <img src={img4} alt="twitter" />
                            </a>
                        </div>
                    </div>
                    <div className="contact-info">
                        <h3>CONTACT US</h3>
                        <p>📞 1234**5678</p>
                        <p>📍 Gali No-07 Kanti Nagar Ext. Delhi- 10031</p>
                        <p>📧 info@bakery.com</p>
                        <p>🌐 www.bakery.com</p>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div>
                <p className="copyright">Copyright © 2025-2026 Bakery React Theme by Afzal Qureshi.</p>
            </div>
        </div>
    );
};

export default Contact;
