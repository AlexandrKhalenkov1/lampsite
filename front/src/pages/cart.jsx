import React from "react";
import gold from '../images/Gold.png'
import Layout from "../components/layout";

const Cart = () => {

  const amount = '$243.00'

    return (
    <Layout>
      <div className="content-container">
      <div className="cart-wrapper">
        <div className="cart__container">
          <div className="goodsList">
            <div className="goods">
              <div className="goods__item">
                  <img src={gold} alt="не подгрузився:(" className="goods__png"/>
                <div className="goods__info">
                  <div className="goods__name">Gold</div> 
                  <div className="goods__price">1x $243.00</div> 
                  <div className="goods__moreInfo">See more information goes here...</div> 
                </div>
              </div>
              <div className="goods__item">
                <div className="goods__centrify">
                  <button className="goods__button">
                    <div className="cross">&#10006;</div> 
                  </button> 
                </div>
              </div>
            </div>
          </div>

          <div className="cart__footer">
            <div className="cart__item">
              <span className="cart__subtotal">Sub total:</span>
              <span className="cart__subtotal-amount"> {amount}</span>
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
  </Layout>  
    )
  };

export default Cart  
