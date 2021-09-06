import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { lampsArr } from '../starter-store';
//import { lampsAddedToCart } from '../starter-store'

//import { lampsAddedToCart } from '../starter-store';

const Detail = ({ id, }) => {
  const [goods, setGoods]= useState([]);
 
  useEffect(() => {
    const localgoods = JSON.parse(localStorage.getItem('goods'));
    setGoods(localgoods || []);  
  }, []);

  useEffect(() => {
    localStorage.setItem('goods', JSON.stringify(goods));
  }, [goods]);

  useEffect(()=>{
    console.log('Goods changes')
  },[goods])



  const AddToCart = (e) => {
    lampsArr.filter(function(item, i, array){
      if(item.id === parseInt(itsid, 10)){
        goods.push(item);
      }
    })
    setGoods(goods);
    localStorage.setItem('goods', JSON.stringify(goods));
  }


  //тут берем все параметры из массива по ид
  let currentLampProps = [];
  const itsid = id;
  lampsArr.filter(function(item, i ){
    if(i === parseInt(itsid, 10)){
      return currentLampProps.push(item)
    };
  })
  let currprops = currentLampProps[0];
  let { name:name, price, picture, vendorcode } = currprops;
  
  return (
    <div>
      <Layout>
         <div className="about">
         <div className="about-wrapper">
             <div className="about-container">
               <div className="about__picture-wrapper">
                <img src={picture} alt="не подгрузився:(" className="about__png"/>
              </div>
               <div className="about__purchase">
                 <div className="about__name">
                   {name}
                 </div>

                 <div className="about__price">
                   {price} 
                 </div>
                 <div className="about__vendorcode">
                   {vendorcode} 
                 </div>

                 <div className="purchase__form">
                     <input className="purchase__input" type="number"  min="0" />
                     <button className="purchase__button" type="submit" onClick={AddToCart}>Add to Cart</button>
                 </div>

               </div> 
             </div>

             <div className="about-footer">
               <div className="about-footer__title">
                 About this product
               </div>
               <div className="about-footer__text">
                 The perfect accessory for a desk or beside table of any modern house.
                 The shade can be titled to suit your needs and is replaceble extending
                 the life of your lamp.
               </div>
             </div>  
         </div>  
       </div>
     </Layout>
    </div>
  )
}

export default Detail









































// import React from 'react';
// import gold from '../../images/Gold.png';
// import Layout from '../../components/layout';

// const detail = ({ id, name, amount, vendorcode }) => {
//     return(
//       <Layout>
//         <div className="about">
//         <div className="about-wrapper">
//             <div className="about-container">
//               <div className="about__picture-wrapper">
//                 <img src={gold} alt="не подгрузився:(" className="about__png"/>
//               </div>
//               <div className="about__purchase">
//                 <div className="about__name">
//                   {name}
//                 </div>

//                 <div className="about__price">
//                   {amount}  
//                 </div>
//                 <div className="about__vendorcode">
//                    {vendorcode} 
//                 </div>

//                 <div className="purchase__form">
//                     <input className="purchase__input" type="number"  min="0" />
//                     <button className="purchase__button" type="submit">Add to Cart</button>
//                 </div>

//               </div> 
//             </div>

//             <div className="about-footer">
//               <div className="about-footer__title">
//                 About this product
//               </div>
//               <div className="about-footer__text">
//                 The perfect accessory for a desk or beside table of any modern house.
//                 The shade can be titled to suit your needs and is replaceble extending
//                 the life of your lamp.
//               </div>
//             </div>  
//         </div>  
//       </div>
//     </Layout>
//     )
// }

// export default detail