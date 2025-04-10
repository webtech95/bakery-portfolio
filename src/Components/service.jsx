import React from "react";
import "./service.css";

const Services = () => {
    const services = [
        {
            img: "https://img.icons8.com/forma-thin/32/bread.png",
            alt: "bread",
            title: "Bakery",
            description: "We have all your favorite traditional bread, 7 days a week! You can choose from a rich variety of cookies, pastries, and cakes."
        },
        {
            img: "https://img.icons8.com/ios/50/birthday.png",
            alt: "birthday",
            title: "Cakes",
            description: "We specialize in custom cakes for all occasions. You can choose from a variety of designs to create the perfect cake for you."
        },
        {
            img: "https://img.icons8.com/laces/64/soda-cup.png",
            alt: "soda-cup",
            title: "Fresh Juices",
            description: "Choose from a variety of fruits and veggies to make your favorite juice. You can also enjoy simple fresh-squeezed orange juice."
        },
        {
            img: "https://img.icons8.com/ios/50/confectionery.png",
            alt: "confectionery",
            title: "Catering",
            description: "We offer personalized catering services to make your events unforgettable. From appetizers to desserts, we've got you covered."
        },
        {
            img: "https://img.icons8.com/ios/50/scooter.png",
            alt: "scooter",
            title: "Smile Truck",
            description: "Catch our Smile Truck offering delicious treats on-the-go! Find us in your neighborhood for a quick treat or drink."
        },
        {
            img: "https://img.icons8.com/pulsar-line/48/wedding-cake.png",
            alt: "wedding-cake",
            title: "Weddings",
            description: "Let us make your big day even sweeter with beautifully crafted wedding cakes and desserts tailored to your taste."
        }
    ];

    return (
        <section id="Service" className="">
            <div className="Our-service">
                <h2>Our Service</h2>
                <h3>covered in these areas</h3>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <img width="75" height="75" src={service.img} alt={service.alt} />
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

