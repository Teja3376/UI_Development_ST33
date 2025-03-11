import React from "react"
import Myfunction2 from "./Myfunction2";
import Myfunc3, { Myfunc3sub } from "./Myfunc3";

function App() {
 

  return (
    <>
    <MyStudentData/> <br/>
    <Myfunction2/>  <br/>
    <Myfunc3sub/>
    </>
  )
}
function MyStudentData(){
  return(
    <>
    this is App/MystudentData function <br/>
    <Mydata/>
    </>

  );
  
}
function Mydata(){
  var name = "Charan"
  return(
    <>
     this is Mydata Callinf in MyStudentData <br/>
     FirstName : {name}
    </>
  );
  
}
export default App
