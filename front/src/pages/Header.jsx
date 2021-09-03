import React from 'react';
import './components.css';
import shoppingCart from '../images/shopping-cart.png';
import mainIcon from '../images/main-icon.png'



const Header = () => {
  return (
    <div className="header">

      <div className="header__link">
        <img src={mainIcon} alt="не подгрузився:(" className="header__icon"/>
        <a href='StarterStore' className="header__main-text" to='/'>
          <span> Starter Store </span>
        </a>
      </div>

      <div className="header__link">
        <a href='SignUp' className="header__text" to='/SignUp'>
          <span> Sign Up </span>
        </a>
      </div>

      <div className="header__link">
        <a href='SignIn' className="header__text" to='/SignIn'>
          <span> Sign In </span>
        </a>
      </div>

      <div className="header__link">
        <img src={shoppingCart} alt="не подгрузився:(" className="header__cart"/>
          <a href='Cart' className="header__text" to='/Cart'>
          <span> Cart&#160;(0) </span>
          </a>
      </div>

    </div>
  )
};

export default Header;
