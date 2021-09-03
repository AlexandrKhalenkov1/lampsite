import React from 'react';
import '../pages/components.css';
import shoppingCart from '../images/shopping-cart.png';
import mainIcon from '../images/main-icon.png'



const Header = () => {
  return (
    <div className="header">

      <div className="header__link">
        <img src={mainIcon} alt="не подгрузився:(" className="header__icon"/>
        <a href='/starter-store' className="header__main-text" to='/'>
          <span> Starter Store </span>
        </a>
      </div>

      <div className="header__link">
        <a href='sign-up' className="header__text" to='/sign-up'>
          <span> Sign Up </span>
        </a>
      </div>

      <div className="header__link">
        <a href='sign-in' className="header__text" to='/sign-in'>
          <span> Sign In </span>
        </a>
      </div>

      <div className="header__link">
        <img src={shoppingCart} alt="не подгрузився:(" className="header__cart"/>
          <a href='cart' className="header__text" to='/cart'>
          <span> Cart&#160;(1) </span>
          </a>
      </div>

    </div>
  )
};

export default Header;
