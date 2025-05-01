
import React, {useContext, useState } from "react";
import "./product.css";
import prduct1 from "../images/Ajwain cookies.jpg";
import prduct2 from "../images/Badam butter ccokies.jpg";
import prduct3 from "../images/Badam cookies.jpg";
import prduct4 from "../images/Badam pista cookies.jpg";
import prduct5 from "../images/Butter cookies.jpg";
import prduct6 from "../images/Coconut cookies.jpg";
import prduct7 from "../images/Fruit machine.jpg";
import prduct8 from "../images/Heart butter cookies.jpg";
import prduct9 from "../images/Jam cookies.jpg";
import prduct10 from "../images/Jeera cookies.jpg";
import prduct11 from "../images/Kaju cookies.jpg";
import prduct12 from "../images/Lite butter cookies.jpg";
import prduct13 from "../images/Mango cookies.jpg";
import prduct14 from "../images/Orange cookies.jpg";
import prduct15 from "../images/Peanut cookies.jpg";
import prduct16 from "../images/Til cookies.jpg";
import { ThemeContext } from "./consumer";

const Product = () => {
    const [showAll, setShowAll] = useState(false);
    
    const { theme } = useContext(ThemeContext);


    const product = [
        { img: prduct1 }, { img: prduct2 }, { img: prduct3 }, { img: prduct4 },
        { img: prduct5 }, { img: prduct6 }, { img: prduct7 }, { img: prduct8 },
        { img: prduct9 }, { img: prduct10 }, { img: prduct11 }, { img: prduct12 },
        { img: prduct13 }, { img: prduct14 }, { img: prduct15 }, { img: prduct16 }
    ];

    const visibleProducts = showAll ? product : product.slice(0, 8);


    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }

    return (
        <section className="Bakery-Product">
            <h2>Our latest bakery products</h2>
            <h4>Check some of our best products and feel the great passion for food</h4>
            <div className="navlinks">
                <a style={color} className="active" href="#">All</a>
                <a style={color} href="#">Bread</a>
                <a style={color} href="#">Cakes</a>
                <a style={color} href="#">Pastries</a>
                <a style={color} href="#">Cupcakes</a>
            </div>
            <div className="product-grid">
                {visibleProducts.map((product, index) => (
                    <div className="product" key={index}>
                        <img width="100%" height="100%" src={product.img} alt={product.alt || `Product ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="see-all-btn" onClick={() => setShowAll(!showAll)} style={color}>
                {showAll ? "Show Less" : "See More"}
            </button>

        </section>
    );

};
export default Product;
