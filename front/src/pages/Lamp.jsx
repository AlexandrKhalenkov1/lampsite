import React from 'react';
import './components.css';

//Передавать элементьы и делать их map

const Lamp = ({
  name, className, price, picture, id, disabled = false
}) => {

  const detailFunc = (id) => {
    //  window.location.replace("test",  id );
    // alert( name);
  }

return (
  <div  className={className} id={id} onClick={detailFunc}>
    <a href={`detail/${id}`}  >  
      <div className="lamp__header">
        <div className="lamp__picture">
          <img src={picture} alt="не подгрузився:(" className="lamp__png"/>          
        </div>
      </div>

      <div className="lamp_footer">
        <div className="lamp__name">{name}</div>
        <div className="lamp__price">{price} {id}</div>  
      </div>
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