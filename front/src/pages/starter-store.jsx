import React, { useMemo } from 'react';
import './components.css';
import Lamps from './Lamps';
import gold from '../images/Gold.png';
import blueDesk from '../images/BlueDesk.png';
import Layout from "../components/layout";
//import lampsArr from "../components/lampsArr.json"

export const lampsArr = [{
  name: 'Gold',
  price: '$243.00',
  picture: gold,
  id: 1
}, {
  name: 'Blue Desk',
  price: '$150.00',
  picture: blueDesk,
  id: 2
}, {
  name: 'example',
  price: '$300.00',
  picture: gold,
  id: 3
}, {
  name: 'example',
  price: '$300.00',
  picture: gold,
  id: 4
}, {
  name: 'Completed',
  price: '$300.00',
  picture: gold,
  id: 5
}
];

const StarterStore = () => {


 
  return (
    <div>
      <Layout>  
        <div className="content-container">
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
              <Lamps lampsArr={lampsArr} />
            </div>
            
          </div>
        </div>
      </Layout> 
    </div>
  )
};

export default StarterStore;