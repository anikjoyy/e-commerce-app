import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import Custom from './pages/Custom';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/custom' element={<Custom />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
      </Routes>
      {location.pathname !== '/login' && <Footer />}
    </>
  );
}

export default App;
