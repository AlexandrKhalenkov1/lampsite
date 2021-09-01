import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StarterStore from './components/StarterStore';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
//import StarterStore from './components/StarterStore';


// const Header = () => (
//   <header className="header">
//     <nav>
//       <ul>
//         <li className="header__link-active"><Link to='/'>Starter Store</Link></li>
//         <li className="header__link"><Link to='/signup'>SignIn</Link></li>
//         <li className="header__link"><Link to='/signin'>SignUp</Link></li>
//         <li className="header__link"><Link to='/cart'>Cart</Link></li>
//       </ul>
//     </nav>
//   </header>
// ) 

// const SignIn = () =>{
//   return (
//     <h2>Форма входа</h2>
//   )  
// };

// const SignUp = () => {
//   return (
//     <h2>Форма регистрации</h2>
//   )
// };

// const Cart = () => {
//   return (
//     <h2>Корзина</h2>
//   )
// };

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
              <Route exact path="/" component={StarterStore} />
              <Route path="/signup" component={SignIn} />
              <Route path="/signin" component={SignUp} />
              <Route path="/cart" component={Cart} />
              <Route component={NotFound} />
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