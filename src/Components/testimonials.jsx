import { useContext, useEffect, useState } from "react";
import "./testimonial.css";
import testimonials1 from "../images/testimonial-1-180x180.jpg"
import testimonials2 from "../images/testimonial-2-180x180 copy.jpg"
import testimonials3 from "../images/testimonial-3-180x180 copy.jpg"
import { ThemeContext } from "./consumer";


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            img: testimonials1,
            quote: "The pastries here are absolutely divine! Every bite is fresh, flaky, and full of flavor. This has become my go-to bakery for all occasions!",
            author: "William Hence",
        },

        {
            img: testimonials2,
            quote: "I ordered a custom cake for my son's birthday, and it was beyond perfect! The design was stunning, and the taste was even better. Highly recommend this bakery!",
            author: "Jane Smith"
        },
        {
            img: testimonials3,
            quote: "From fresh bread to delicious cookies, everything is baked to perfection. The staff is friendly, and the aroma inside is simply irresistible. A must-visit for any dessert lover!",
            author: "Emily Johnson"
        }
    ];

    const { theme } = useContext(ThemeContext);


    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="Testimonials">
            <h2>Clients' Testimonials</h2>
            <h4>What others say about us</h4>
            <div className="testimonials-carousel">
                <div className="testimonial-slide slide-animation" style={{
                    background: theme === 'light' ? '#fff' : '#000',
                }}>
                    <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].author} width="100" height="100" />
                    <p style={color}>"{testimonials[currentIndex].quote}"</p>
                    <h4 style={color}>-{testimonials[currentIndex].author}</h4>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
