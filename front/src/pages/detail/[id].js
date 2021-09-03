import React from 'react';
import gold from '../../images/Gold.png';
import Layout from '../../components/layout';
import { lampsArr } from '../starter-store';
import Lamp from '../Lamp';



const detail = ({ id, }) => {

  let currentLampProps = [];
  const itsid = id;
    console.log('id',itsid);

  lampsArr.forEach(function(item, i ){
    if(i+=1 === itsid){
      console.log(i)
      currentLampProps.push(item) 
    }
    return currentLampProps;
  })

 let currprops = currentLampProps[0];
 console.log(currprops)


let {name:name, price, picture, id: hisId} = currprops;


// console.log(name);     
// console.log(price);      
// console.log(hisId);     
// console.log(price);




  return (
    <div>
      {id}
      {price}
      {hisId}

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
                    vendorcode 
                 </div>

                 <div className="purchase__form">
                     <input className="purchase__input" type="number"  min="0" />
                     <button className="purchase__button" type="submit">Add to Cart</button>
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

export default detail









































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