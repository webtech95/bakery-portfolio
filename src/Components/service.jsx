import React, { useContext } from "react";
import "./service.css";
import { ThemeContext } from "./consumer";
import img1 from "../images/icons8-bread-50.png";
import img2 from "../images/icons8-birthday-cake-50.png"
import img3 from "../images/icons8-soda-cup-50.png"
import img4 from "../images/icons8-confectionery-50.png"
import img5 from "../images/icons8-scooter-50.png"
import img6 from "../images/icons8-wedding-cake-50.png"

const Services = () => {
    const services = [
        {
            img: img1,
            alt: "bread",
            title: "Bakery",
            description: "We have all your favorite traditional bread, 7 days a week! You can choose from a rich variety of cookies, pastries, and cakes."
        },
        {
            img: img2,
            alt: "birthday",
            title: "Cakes",
            description: "We specialize in custom cakes for all occasions. You can choose from a variety of designs to create the perfect cake for you."
        },
        {
            img: img3,
            alt: "soda-cup",
            title: "Fresh Juices",
            description: "Choose from a variety of fruits and veggies to make your favorite juice. You can also enjoy simple fresh-squeezed orange juice."
        },
        {
            img: img4,
            alt: "confectionery",
            title: "Catering",
            description: "We offer personalized catering services to make your events unforgettable. From appetizers to desserts, we've got you covered."
        },
        {
            img: img5,
            alt: "scooter",
            title: "Smile Truck",
            description: "Catch our Smile Truck offering delicious treats on-the-go! Find us in your neighborhood for a quick treat or drink."
        },
        {
            img: img6,
            alt: "wedding-cake",
            title: "Weddings",
            description: "Let us make your big day even sweeter with beautifully crafted wedding cakes and desserts tailored to your taste."
        }
    ];
    const { theme } = useContext(ThemeContext);


    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }

    return (
        <section id="Service" >
            <div className="Our-service" style={color}>
                <h2 style={color}>Our Service</h2>
                <h3 style={color}>covered in these areas</h3>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index} style={{
                            background: theme === 'light' ? '#fff' : '#000',
                        }}>
                            <img width="75" height="75" src={service.img} alt={service.alt} style={{
                                background: theme === 'light' ? '#fff' : '#000',

                            }} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

