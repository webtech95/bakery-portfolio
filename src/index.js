import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './Components/consumer';
import { Provider } from 'react-redux';
import store from './Components/store';
import CartProvider from './Components/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

root.render(

  <HashRouter>
    <Provider store={store}>
      <CartProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CartProvider>
    </Provider>
  </HashRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
