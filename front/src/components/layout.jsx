import React from "react";
import Header from "./header";
import { TestProvider } from './MyContext' 

export default ({ children }) => {

  return(
  <>
     <TestProvider> 
      <Header />
      <div className="changable-content" >
        {children}
      </div>
    </TestProvider> 
  </>
  )
};