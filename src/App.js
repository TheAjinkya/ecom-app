import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import AllRoutes from './routes/AllRoutes'
import { Header, Footer } from './components';

function App() {
  return (<div>
    <Header />
    <AllRoutes />
    <Footer />
  </div>
  );
}

export default App;
