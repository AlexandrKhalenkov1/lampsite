import React from 'react';
import Lamp from './Lamp';

const Lamps = ({ lampsArr }) => lampsArr.map(({
    name, price, picture, id
  }) => (
    <Lamp key={id} id={id} picture={picture} className="starterStore__goods" price={price} name={name} />
  ));

export default Lamps;