import React from 'react';

const TestContext = React.createContext();
const {Provider, Consumer} = TestContext;

const TestProvider = (props) => {


  const test = () => {
    console.log('Work!')
  }

  const testAnother = () => {
    console.log('Work!')
  }
  const context = {
    test,
    testAnother
  };

  return <Provider value={context}>{props.children}</Provider>;

};

export {TestProvider, Consumer as TagsConsumer};
export default TestContext;























// import React from 'react';

// const MyContext = React.createContext();
// const {Provider, Consumer} = MyContext;



// const TestProvider = (props) => {

//   const test = () =>{
//     return (console.log('sd'))
//   }
    
//   const context = {
//     test
//   }

//   return (
//     <Provider value={context}>{props.children}</Provider>
//   )
// }

// export default MyContext;