import { Component } from "react";
import Family from "./Personal";
import { Address } from "./Personal"
import Univerisity from "./Education";

class App extends Component{
  render(){
    return(
      <>
      <h1>
        Welcome To React Class Components
      </h1>
      <Family/>
      <br/>
      <Address/>
      <br/>
      <Univerisity/>
      </>

    );
  }
}
export  default App