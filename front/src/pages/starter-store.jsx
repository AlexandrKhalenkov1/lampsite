import React from 'react';
import './components.css';
import Lamps from './Lamps';
import gold from '../images/Gold.png';
import blueDesk from '../images/BlueDesk.png';
import Layout from "../components/layout";
//import lampsArr from "../components/lampsArr.json"

//export let lampsAddedToCart = [];

export const lampsArr = [{
  name: 'Gold',
  price: '$243.00',
  picture: gold,
  id: 0,
  vendorcode: 'LPT:GLMM1234'
}, {
  name: 'Blue Desk',
  price: '$150.00',
  picture: blueDesk,
  id: 1,
  vendorcode: 'SKU:BLDR1731'
}, {
  name: 'example',
  price: '$300.00',
  picture: gold,
  id: 2,
  vendorcode: 'LPT:EXMM1111'
}, {
  name: 'example2',
  price: '$301.00',
  picture: gold,
  id: 3,
  vendorcode: 'LPT:EXMM1112'
}, {
  name: 'Completed',
  price: '$320.00',
  picture: gold,
  id: 4,
  vendorcode: 'LPT:EXMM1215'
}
];

const StarterStore = ({ test }) => {

  return (
    <div>
      <Layout>  
        <div className="content-container">
          <div className="starterStore">
          
          <div className="starterStore__title">
            <div className="starterStore__title">
              I  
              <div className="heart1" onClick={test}></div>
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