import React, { useCallback, useState, useEffect} from "react";
// import gold from '../images/Gold.png';
// import blueDesk from '../images/BlueDesk.png';
import Layout from "../components/layout";
import CartItems from "../components/CartItems";
//import { lampsAddedToCart } from '../starter-store';


export const cartitems = [
  /*{ 
    name: 'Gold',
    price: '$243.00',
    picture: gold,
    id: 0,
    vendorcode: 'LPT:GLMM1234'
  },
  {
    name: 'Blue Desk',
    price: '$343.00',
    picture: blueDesk,
    id: 1,
    vendorcode: 'LPT:GLMM1234'
  },
  {
    name: 'Dold',
    price: '$443.00',
    picture: gold,
    id: 2,
    vendorcode: 'LPT:GLMM1234'
  }*/
]



const Cart = () => {
  
  const [goods, setGoods] = useState(cartitems);

  useEffect(() => {
    setGoods(cartitems);  
  }, []);

 
  useEffect(() => {
    const localgoods = JSON.parse(localStorage.getItem('goods'));
    setGoods(localgoods);  
  }, []);


  useEffect(() => {
      localStorage.setItem('goods', JSON.stringify(goods));
    }, [goods]);
  
 

  const removeTask = useCallback(
    (targetId) => {
      const target = parseInt(targetId, 10)
      const filteredGoods = goods.filter(function(item, i, array){
        return item.id !== target

      })
      console.log("target",target)
      console.log("Goods",goods)
      console.log("filteredGoods",filteredGoods)
      setGoods(filteredGoods);
      
    },[goods, setGoods]) 

 //console.log("todos", todos[0].price )
 



  let amount;



  const amountCalc = (() =>{
    amount = 0;
    goods.forEach((item, i)=>{
    let x =  parseInt((item.price.substr(1)), 10 ) 
    amount += x;
    })
  return amount
  })()

  return (
    <Layout>
      <div className="content-container">

      <div className="cart-wrapper">
        <div className="cart__container">
          <div className="goodsList">
            

            <CartItems cartitems={goods} removeTask={removeTask}/>
              
            
          </div>
          <div className="cart__footer">
            <div className="cart__item">
              <span className="cart__subtotal">Sub total:</span>
              <span className="cart__subtotal-amount"> ${amount}</span>
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
