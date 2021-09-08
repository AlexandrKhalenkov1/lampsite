import React, { useEffect, useState, useContext } from 'react';
import MyContext from './MyContext';
import '../pages/components.css';
import shoppingCart from '../images/shopping-cart.png';
import Links from '../components/links';


const Header = () => {
  const myContext = useContext(MyContext);
  const {addToCart, filtredGoods, cartCount, cartCounter, linksArr, lampsInCart } = myContext;
  const[goodsCount, setGoodsCount] = useState(0);


  useEffect(() =>{
    cartCounter(lampsInCart);
    let bount = lampsInCart.length;

    return setGoodsCount("Cart" + "(" + bount + ")")
  },[addToCart, filtredGoods, lampsInCart, cartCount, cartCounter]);

  return (
    <div className="header">
      <Links linksArr={linksArr}/>
      <div className="header__link">
        <img src={shoppingCart} className="header__cart"/>
          <a href='/cart' className="header__text" to='/cart'>
          <span> {goodsCount} </span>
          </a>
      </div> 
    </div>
  )
};

export default Header;
