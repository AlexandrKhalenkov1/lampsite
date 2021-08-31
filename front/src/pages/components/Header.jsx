import React from 'react';
import './components.css';
import shoppingCart from '../../images/shopping-cart.png';
//Передавать элементьы и делать их map

const Header = () => {
    return (
        <div className="header">
              <div className="header__link-active">
                <span>Starter Store</span> 
                <div className="header__arrow" ></div>
              </div>
              <div className="header__link">
                <span>Sign up</span>
                <div className="header__arrow" ></div>
              </div>
              <div className="header__link">
                <span>Sign in</span>
                <div className="header__arrow" ></div> 
              </div>
              <div className="header__link">
                <img src={shoppingCart} alt="не подгрузився:(" className="header__cart"/>
                <span>Cart (0)</span>
              </div>
        </div>
    )
};

export default Header;