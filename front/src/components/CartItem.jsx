import React, { useContext } from 'react';
import MyContext from './MyContext';

const CartItem = ( { id, name, price,  picture, count }) => {

  const myContext = useContext(MyContext);
  const { 
        lampsInCart,
        deleteFromCart
    } = myContext; 
    
  const deleteTask = (e) =>{
    e.preventDefault();
    const targetId = e.target.id;
    deleteFromCart(targetId, lampsInCart)
  }
  

return (
    <div id={id}>
    <div className="goods" >
        <div className="goods__item">
            <img src={picture} alt="не подгрузився:(" className="goods__png"/>
            <div className="goods__info">
                <div className="goods__name">{name}</div> 
                <div className="goods__price">{count} x ${price}</div> 
                <div className="goods__moreInfo">
                  <a href={`/detail/${id}`} className="header__text" to={`/detail/${id}`}>
                    See more information goes here...
                  </a>
                </div> 
            </div>
        </div>
        <div className="goods__item">
            <div className="goods__centrify">
                <button className="goods__button" id={id} onClick={deleteTask}>
                    <div className="cross" id={id}>&#10006;</div> 
                </button> 
            </div>
        </div>
    </div>
    </div> 
  )
}

export default CartItem