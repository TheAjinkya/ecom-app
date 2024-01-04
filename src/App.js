import logo from './assets/kindle-logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import AllRoutes from './routes/AllRoutes'
import { Header, Footer, ScrollToTop, UseTitle } from './components';
import { FilterProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/CartContext';

function App() {
  UseTitle("Welcome to Kindle Store")

  return (<div className='dark:bg-dark'>
    <FilterProvider>
      <CartProvider>
        <Header />
        <ScrollToTop />
        <ToastContainer />
        <AllRoutes />
        <Footer />
      </CartProvider>
    </FilterProvider>
  </div>
  );
}

export default App;
