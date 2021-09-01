import React from 'react';
import './components.css';

//Передавать элементьы и делать их map

const Lamp = ({
  name, className, price, picture, disabled = false
}) => (


  <div className={className}>

    <div className="lamp__header">
      <div className="lamp__picture">{picture}</div>
    </div>

    <div className="lamp_footer">
      <div className="lamp__name">{name}</div>
      <div className="lamp__price">{price}</div>  
    </div>

  </div>
);















// const Lamp = ({ tovarlamp, name, price  }) => {

//     return (
//         <div className="starterStore__goods">
//               <div className="lamp__picture">
//                 <div className="lamp__picture">{tovarlamp}</div>  
//               </div>
//               <div className="lamp_footer">
//                 <div className="lamp__name">{name}</div>
//                 <div className="lamp__price">{price}</div>  
//               </div>
              
//         </div>
//     )
// };

export default Lamp;