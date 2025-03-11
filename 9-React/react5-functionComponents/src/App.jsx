import React from "react";
function App() {
  return (
    <>
    hello
        <Mydata/>
        <MyFunction/> 
    </>
  );
}
function MyFunction() {
  var fname = "Charan Teja";
  var lname = "Kodamanchili";
  var age = 20
  return(
    <h1>
      First name : {fname}<br/>
      Last name  : {lname}<br/>
      Age : {age}
    </h1>
  );
}
function Mydata(){
  return(
    <>
    <h3>
      This is sub project
    </h3>
    </>
  );
}


export default App
