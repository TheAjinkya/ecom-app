import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import AllRoutes from './routes/AllRoutes'
import { Header, Footer, ScrollToTop, UseTitle } from './components';

function App() {
  UseTitle("Wlcome to CodeBook")

  return (<div className='dark:bg-dark'>
    <Header />
    <ScrollToTop/>
    <AllRoutes />
    <Footer />
  </div>
  );
}

export default App;
