import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import starterStore from './components/StarterStore';
import Header from './components/Header';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Cart from './components/Cart.jsx';

const NotFound = () => {
  return (
    <h2>Ресурс не найден</h2>
  )
};

const Main = () => {
    return (
      <div className="content-container">
      <Router>
         <Header/>
          <Switch>
              <Route exact path="/" component={starterStore} />
              <Route  path="/SignUp" component={SignUp} />
              <Route  path="/SignIn" component={SignIn} />
              <Route  path="/Cart" component={Cart} />
          </Switch>
      </Router>
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