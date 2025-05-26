import React, { useContext } from "react";
import "./contact.css";

import { ThemeContext } from "./consumer"


const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }

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
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Phone" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required ></textarea>
                    <button type="submit" style={color}>SEND</button>
                </form>
            </div>


        </div>
    );
};

export default Contact;
