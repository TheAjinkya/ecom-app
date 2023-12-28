import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import AllRoutes from './routes/AllRoutes'
import { Header, Footer, ScrollToTop, UseTitle } from './components';
import { FilterProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  UseTitle("Welcome to CodeBook")

  return (<div className='dark:bg-dark'>
    <FilterProvider>
    <Header />
    <ScrollToTop/>
    <ToastContainer/>
    <AllRoutes />
    <Footer />
    </FilterProvider>
  </div>
  );
}

export default App;
