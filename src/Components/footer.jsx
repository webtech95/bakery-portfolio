import { useContext } from "react"
import img1 from "../images/icons8-facebook-circled.gif"
import img2 from "../images/icons8-instagram-logo-50.png"
import img3 from "../images/icons8-linkedin-circled.gif"
import img4 from "../images/icons8-x-50.png"
import "./footer.css"
import { ThemeContext } from "./consumer"

const Footer = () => {

    const { theme } = useContext(ThemeContext);


    const color = {
        color: theme === 'light' ? "#000" : '#fff'
    }

    return (
        <footer>
            <div className="footer-content">
                <div className="opening-hours">
                    <h3 style={color}>OPENING HOURS</h3>
                    <p style={color}>Monday - Thursday: 8:00 - 16:00</p>
                    <p style={color}>Friday - Saturday: 8:00 - 16:00</p>
                    <p style={color}>Sunday: 8:00 - 16:00</p>
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
                    <h3 style={color}>CONTACT US</h3>
                    <p style={color}>📞 1234**5678</p>
                    <p style={color}>📍 Gali No-07 Kanti Nagar Ext. Delhi- 10031</p>
                    <p style={color}>📧 info@bakery.com</p>
                    <p style={color} >🌐 www.bakery.com</p>
                </div>
            </div>


            <div>
                <p style={color} className="copyright">Copyright © 2025-2026 Bakery React Theme by Afzal Qureshi.</p>
            </div>
        </footer>

    );
}

export default Footer;