import React, { useContext } from "react";
import MyContext from './MyContext';
import Lamps from '../pages/Lamps';

const StarterStore = () => {
    const myContext = useContext(MyContext);
    const { lampsArr } = myContext;
return (
    <div className="content-container">
          <div className="starterStore">
          
          <div className="starterStore__title">
            <div className="starterStore__title">
              I  
              <div className="heart1" ></div>
              <div className="heart2"></div>   
              L A M P 
            </div> 
          </div>

            <div className="starterStore__item">
              <Lamps lampsArr={lampsArr} />
            </div>
            
          </div>
        </div>
)
}
export default StarterStore