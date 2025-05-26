import { useContext, useEffect, useState } from 'react';
import img1 from "../images/about me.png"
import "./about.css"
import { ThemeContext } from './consumer';


export const images = [
    {
        img: img1
    }
]

export default function AboutBakery() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 200);
        return () => clearTimeout(timeout);
    }, []);

    const { theme } = useContext(ThemeContext);


    const color = {
        color: theme === 'light' ? '#000' : '#fff'
    }

    return (
        <section id='about-container' className={`w-full max-w-5xl mx-auto px-4 py-12  transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="">
                    <img
                        src={img1}
                        alt="Bakery Interior"
                        className="about-img rounded-full animate-spin-slow object-cover h-96 w-full"
                    />
                </div>
                <div>
                    <h2 style={color} className="text-4xl font-bold text-amber-700 mb-4">About Our Bakery</h2>
                    <p style={color} className="text-lg text-gray-700 leading-relaxed mb-4">
                        Welcome to <span className="font-semibold text-amber-800">Heavenly Creations Bakery</span> — where every treat is baked with love and care.
                        From our hand-kneaded sourdoughs to buttery croissants, we believe in the magic of fresh, quality ingredients and old-fashioned techniques.
                    </p>
                    <p style={color} className="text-md text-gray-600">
                        Established in 2015, we’ve served our community with passion and purpose. Whether you're grabbing a quick bite or ordering a custom cookies,
                        we promise a warm smile and the smell of something delicious in the air.
                    </p>
                    <button style={color} className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-xl shadow hover:bg-amber-700 transition">
                        Visit Us Today
                    </button>
                </div>
            </div>
        </section>
    );
}
