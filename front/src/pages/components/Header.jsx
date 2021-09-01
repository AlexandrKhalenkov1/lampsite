import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import shoppingCart from '../../images/shopping-cart.png';
//Передавать элементьы и делать их map

const Header = () => {
  return (
    <div className="header">

      <div className="header__link-active">
        <Link className="header__text" to='/'>
          <span> Starter Store </span>
        </Link>
      </div>

      <div className="header__link">
        <Link className="header__text" to='/SignUp'>
          <span> Sign Up </span>
        </Link>
      </div>

      <div className="header__link">
        <Link className="header__text" to='/SignIn'>
          <span> Sign In </span>
        </Link>
      </div>

      <div className="header__link">
        <img src={shoppingCart} alt="не подгрузився:(" className="header__cart"/>
          <Link className="header__text" to='/cart'>
          <span> Cart&#160;(0) </span>
          </Link>
      </div>

    </div>
  )
};

export default Header;



// const Header = () => {
//   return (
//       <div className="header">
//             <div className="header__link-active">
//               <span>Starter Store</span> 
//               <div className="header__arrow" ></div>
//             </div>
//             <div className="header__link">
//               <span>Sign up</span>
//               <div className="header__arrow" ></div>
//             </div>
//             <div className="header__link">
//               <span>Sign in</span>
//               <div className="header__arrow" ></div> 
//             </div>
//             <div className="header__link">
//               <img src={shoppingCart} alt="не подгрузився:(" className="header__cart"/>
//               <span>Cart (0)</span>
//             </div>
//       </div>
//   )
// };