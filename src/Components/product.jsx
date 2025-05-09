
import React, { useContext, useState } from "react";
import "./product.css";
import img1 from "../images/Ajwain cookies.jpg";
import img2 from "../images/Badam butter ccokies.jpg";
import img3 from "../images/Badam cookies.jpg";
import img4 from "../images/Badam pista cookies.jpg";
import img5 from "../images/Butter cookies.jpg";
import img6 from "../images/Coconut cookies.jpg";
import img7 from "../images/Fruit machine.jpg";
import img8 from "../images/Heart butter cookies.jpg";
import img9 from "../images/Jam cookies.jpg";
import img10 from "../images/Jeera cookies.jpg";
import img11 from "../images/Kaju cookies.jpg";
import img12 from "../images/Lite butter cookies.jpg";
import img13 from "../images/Mango cookies.jpg";
import img14 from "../images/Orange cookies.jpg";
import img15 from "../images/Peanut cookies.jpg";
import img16 from "../images/Til cookies.jpg";
import { ThemeContext } from "./consumer";
import { CartContext } from "./CartSlice";


const Product = [
    {
        id: '1',
        name: 'Ajwain Cookies',
        price: '$10',
        oldprice: '$15',
        image: img1
    },
    {
        id: '2',
        name: 'Badam Butter Cookies',
        price: '$8',
        oldprice: '$12',
        image: img2
    },
    {
        id: '3',
        name: 'Badam Cookies',
        price: '$11',
        oldprice: '$13',
        image: img3
    }, {
        id: '4',
        name: 'Badam Pista Cookies',
        price: '$15',
        oldprice: '$20',
        image: img4
    }, {
        id: '5',
        name: 'Butter Cookies',
        price: '$10',
        oldprice: '$15',
        image: img5
    }, {
        id: '6',
        name: 'Coconut Cookies',
        price: '$12',
        oldprice: '$15',
        image: img6
    }, {
        id: '7',
        name: 'Fruit Cookies',
        price: '$17',
        oldprice: '$20',
        image: img7
    }, {
        id: '8',
        name: 'Heart Butter Cookies',
        price: '$15',
        oldprice: '$18',
        image: img8
    }, {
        id: '9',
        name: 'Jam Cookies',
        price: '$10',
        oldprice: '$12',
        image: img9
    }, {
        id: '10',
        name: 'Jeera Cookies',
        price: '$7',
        oldprice: '$10',
        image: img10
    }, {
        id: '11',
        name: 'Kju Cookies',
        price: '$20',
        oldprice: '$20',
        image: img11
    }, {
        id: '12',
        name: 'Lite Butter Cookies',
        price: '$18',
        oldprice: '$20',
        image: img12
    }, {
        id: '13',
        name: 'Mango Cookies',
        price: '$12',
        oldprice: '$15',
        image: img13
    }, {
        id: '14',
        name: 'Orange Cookies',
        price: '$8',
        oldprice: '$10',
        image: img14
    }, {
        id: '15',
        name: 'Peanut Cookies',
        price: '$15',
        oldprice: '$17',
        image: img15
    },
    {
        id: '16',
        name: 'Til Cookies',
        price: '$10',
        oldprice: '$15',
        image: img16
    }

];


const ProductList = () => {
    const [showAll, setShowAll] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
    const visibleProducts = showAll ? Product : Product.slice(0,4);
    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }

    return (
        <section className="Bakery-Product">
            <h2>Our latest bakery products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                    <div style={{
                        background: theme === 'light' ? '#fff' : '#000',
                        color: theme === 'light' ? '#000' : '#fff',
                        boxShadow:
                            '0 4px 8px rgba(0, 0, 0, 0.6), 0 0 12px rgba(0, 255, 255, 0.1), 0 0 20px rgba(0, 255, 255, 0.08)',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                    }}
                        key={product.id}
                        className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-hover w-full  object-cover rounded-md mb-4"
                        />
                        <h5 className="text-xl font-semibold">{product.name}</h5>
                        <p className="text-green-600 text-lg font-medium">Price: {product.price}</p>
                        <p className="text-gray-400 line-through mb-2">{product.oldprice}</p>

                        {/* <Link
                            to={`/product/${product.id}`}
                            className="bg-gray-700 text-white py-2 px-4 rounded-lg w-full text-sm font-medium hover:bg-gray-800 transition mb-2"
                        >
                            Product Details
                        </Link> */}

                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full text-sm font-medium hover:bg-blue-700 transition mb-2"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>

                        {/* <a
                            href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=1995103091282016231&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061662&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1F"
                            className="bg-yellow-400 text-white py-2 px-4 rounded-lg w-full text-sm font-medium hover:bg-yellow-500 transition"
                        >
                            Buy from Amazon
                        </a> */}
                    </div>
                ))}
            </div>
            <button className="see-all-btn" onClick={() => setShowAll(!showAll)} style={color}>
                {showAll ? "Show Less" : "See More"}
            </button>
        </section>


    );

};
export default ProductList;