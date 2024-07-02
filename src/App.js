import './App.css';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shoppi from './pages/Shoppi';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/banner_mens.png';
import women_banner from './component/Assets/banner_women.png';
import kid_banner from './component/Assets/banner_kids.png';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shoppi/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"  />}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}/>
        <Route path="/product" element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App