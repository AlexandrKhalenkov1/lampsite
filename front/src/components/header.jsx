import React, { useEffect, useState, useContext } from 'react';
//
import MyContext from './MyContext'
//
import '../pages/components.css';
import shoppingCart from '../images/shopping-cart.png';
import mainIcon from '../images/main-icon.png';
import Links from '../components/links';
import goodsCount from './header'

export const linksArr = [{
  id: 1,
  className: "header__icon",
  img: mainIcon,
  href: "/starter-store",
  to: '/',
  text: "Starter Store",
  option: null
},{
  id: 2,
  className: "header__text",
  href: "/sign-up",
  to:'/sign-up',
  text: "Sign Up",
  option: null
},{
  id: 3,
  className: "header__text",
  href: "/sign-in",
  to:'/sign-in',
  text: "Sign In",
  option: null
},{
  id: 4,
  className: "header__cart",
  img: shoppingCart,
  href: "/cart",
  to:'/cart',
  text: "Cart",
  option: goodsCount
}
] 




const Header = () => {
  //
  const myContext = useContext(MyContext);
  const { test } = myContext;
  //

  const[goodsCount, setGoodsCount] = useState(0);
  const [goods, setGoods]= useState([]);
  let count = goodsCount;


  useEffect(() => {
    const localgoods = JSON.parse(localStorage.getItem('goods'));
    setGoods(localgoods || []);  
  }, []);


  let arrayOfGoods = JSON.parse(localStorage.getItem('goods'))


  const howManyGoodsInCart = (event) =>{
    test();
    // alert('work!')
    if(arrayOfGoods){
      count = arrayOfGoods.length;
    }else{
      count = 0;
    }
      
      console.log(count)
    return setGoodsCount(count)
  };

  



  return (
    <div className="header">
      
      <button onClick={howManyGoodsInCart} >test()</button>
      
      <Links linksArr={linksArr}/>

    {/* <button onClick={test}>test()</button>


      <div className="header__link" >
        <img src={mainIcon} className="header__icon"/>
        <a href='/starter-store' className="header__main-text" to='/'>
          <span> Starter Store </span>
        </a>
      </div>

      <div className="header__link">
        <a href='/sign-up' className="header__text" to='/sign-up'>
          <span> Sign Up </span>
        </a>
      </div>

      <div className="header__link">
        <a href='/sign-in' className="header__text" to='/sign-in'>
          <span> Sign In </span>
        </a>
      </div>

      <div className="header__link">
        <img src={shoppingCart} className="header__cart"/>
          <a href='/cart' className="header__text" to='/cart'>
          <span> Cart&#160;({goodsCount}) </span>
          </a>
      </div> */}

    </div>
  )
};

export default Header;
