import React, { useContext } from 'react';
import MyContext from './MyContext';
import CartItems from "./CartItems";


const CartComponent = () => {

    const myContext = useContext(MyContext);
    const { 
      lampsInCart,
      amountTotal
    } = myContext;
  
    return (
      <div className="content-container">
        <div className="cart-wrapper">
          <div className="cart__container">
            <div className="goodsList">
              {lampsInCart.length ? (
                <CartItems lampsInCart={lampsInCart} />
              ) : (
                <></>
              )
               }
            </div>
            <div className="cart__footer">
                <div className="cart__item">
                <span className="cart__subtotal">Sub total:</span>
                <span className="cart__subtotal-amount"> ${amountTotal}</span>
                </div>
                <div className="cart__item-button">
                <button className="cart__button">
                    <span>Check out</span> 
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartComponent