import React from "react";
function Myfunc3(){
 return(
    <>
    <Myfunc3sub/>
    </>
 );
}
function Myfunc3sub(){
    var age = 20;
    return(
    <>
    Age : {age}
    </>
); 
}
export {Myfunc3sub}
export default Myfunc3