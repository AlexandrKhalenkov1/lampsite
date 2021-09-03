import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import starterStore from './StarterStore';
import Header from './Header';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Cart from './Cart'
import Detail from './Details';

const history = createBrowserHistory()

const Main = () => {
    return (
      <div className="content-container">
        <Header/>
        <div>
            
        </div>
    </div>
    )
};

export default Main;


























// import React from 'react';
// import Header from './components/Header';
// import StarterStore from './components/StarterStore';


// const Main = () => {
//     return (
//         <div className="content-container">
//           <Header/>
//           <StarterStore/>
//         </div>
//     )
// };

// export default Main;