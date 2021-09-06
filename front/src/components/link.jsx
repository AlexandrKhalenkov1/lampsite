import React from 'react'
import shoppingCart from '../images/shopping-cart.png';
import mainIcon from '../images/main-icon.png';

const Link = ({
  id, className, img, href, to, text, option,
}) =>{
  return (
    
    <>
      <div className="header__link" id={id}>
      <img src={img} className={className}/>
        <a href={href} className="header__text" to={to}>
        <span> {text} {option} </span>
        </a>
      </div> 
    </>
  )
}

export default Link