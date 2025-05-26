import { useContext } from 'react';
import './App.css';
import Header from './Components/header';
import { ThemeContext } from './Components/consumer';
import Footer from './Components/footer';

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
        <Footer />


      </div>
    </>
  );

};

export default App;
