import React from 'react'
import { Link } from 'react-router-dom';
import {useState,useContext} from 'react'
import './Navbar.css'

import shopping from '../Assets1/shopping.jpg'
import cart from '../Assets1/cart.png'
import { ShopContext } from '../../contexts/ShopContext';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">
        <div className="nav-logo">
          <img src={shopping} alt=''/>
          <p>Online Shop</p>
        </div>

        <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>

        <div className='nav-login-cart'>
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt=''/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  );
}

export default Navbar
