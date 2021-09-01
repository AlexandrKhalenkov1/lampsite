import React from 'react';
import Lamp from './Lamp';




const Lamps = ({ lampsArr }) => lampsArr.map(({
    name, price, picture, id
  }) => (
    <Lamp key={id} picture={picture} className="starterStore__goods" price={price} name={name} />
  ));






// const Lamps = ({lampsArr}) => lampsArr.map(({
//     tovarlamp, name, price, id
// }) => (
//   <Lamp key={id}
//    className="starterStore__goods"
//    tovarlamp={tovarlamp}
//    name={name}
//    price={price} 
//    />
// ));
export default Lamps;