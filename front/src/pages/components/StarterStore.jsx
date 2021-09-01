import React, { useMemo } from 'react';
import './components.css';
import Lamps from './Lamps';

const StarterStore = () => {

  const lampsArr = useMemo(() => [{
    name: 'Gold',
    price: '$300',
    picture: 'no-picture:(',
    id: 1
  }, {
    name: 'Blue Desk',
    price: '$300',
    picture: 'no-picture:(',
    id: 2
  }, {
    name: 'example',
    price: '$300',
    picture: 'no-picture:(',
    id: 3
  }, {
    name: 'example',
    price: '$300',
    picture: 'no-picture:(',
    id: 4
  }, {
    name: 'Completed',
    price: '$300',
    picture: 'no-picture:(',
    id: 5
  }
], []);

  return (
    <div className="starterStore">
      <div className="starterStore__title">
          <div className="starterStore__title">
              I  
              <div className="heart1"></div>
              <div className="heart2"></div>   
              L A M P 
            </div> 
      </div>
      <div className="starterStore__item">
        {/* <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
        <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
        <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
        <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
        <Lamp tovarlamp={tovarlamp} name={name} price={price}/> */}
        
        <Lamps lampsArr={lampsArr}/>
      </div>
    </div>
  )
};

export default StarterStore;