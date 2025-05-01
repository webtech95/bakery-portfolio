import { useContext } from 'react';
import './App.css';
import Contact from './Components/contact';
import Header from './Components/header';
import Product from './Components/product';
import Services from './Components/service';
import Testimonials from './Components/testimonials';
import { ThemeContext } from './Components/consumer';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          background: theme === 'light' ? '#fff' : '#000',
          color: theme === 'light' ? '#000' : '#fff'
        }}
      >

        <Header />
        <Services />
        <Product />
        <Testimonials />
        <Contact />

      </div>
    </>
  );

};

export default App;
