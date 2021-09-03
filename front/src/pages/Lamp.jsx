import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './components.css';
import Header from './Header';

//Передавать элементьы и делать их map

const Lamp = ({
  name, className, price, picture, id, disabled = false
}) => {
  const detail = async () => {
    //  id;
    // name;
    // price;
    // picture;
    alert(id);
  }
  return (
    <div  className={className} id={id} onClick={detail}>
      {/* <Link  to='/Detail' > */}
      <a href='Detail'>
      <div className="lamp__header">
        <div className="lamp__picture">
          
          <img src={picture} alt="не подгрузився:(" className="lamp__png"/>
        
        </div>
      </div>

      <div className="lamp_footer">
        <div className="lamp__name">{name}</div>
        <div className="lamp__price">{price}</div>  
      </div>
      {/* </Link> */}
      </a>
    </div>
)};















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