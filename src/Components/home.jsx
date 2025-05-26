import AboutBakery from "./about";
import Contact from "./contact";
import ProductList from "./product";
import Testimonials from "./testimonials";

function Home() {
    return (
        <div>

            <AboutBakery />
            <Testimonials />
            <ProductList />
            <Contact />

        </div>
    );
}

export default Home;