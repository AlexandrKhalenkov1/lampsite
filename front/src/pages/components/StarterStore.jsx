import React from 'react';
import './components.css';
import Lamp from './Lamp';

const StarterStore = () => {
    const tovarlamp = 'TOVAR LAMPA!'
    const name = 'name';
    const price = '$Price';
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
            <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
            <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
            <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
            <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
            <Lamp tovarlamp={tovarlamp} name={name} price={price}/>
          </div>
        </div>
    )
};

export default StarterStore;