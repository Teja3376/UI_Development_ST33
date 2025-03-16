import {Component} from 'react';
import MyStudentInfo from './MyStudentData';
import { MyStudentAddress } from './MyStudentData';
import MyHelloData from './MyHelloData';
class App extends Component 
{  render(){
      return(
         <div className="App">
          <h1> Welcome to ReactJS Class component </h1>
                        <MyData></MyData>
                        <MyHelloData></MyHelloData>
                        <MyStudentInfo></MyStudentInfo>  
                        <MyStudentAddress></MyStudentAddress>
         </div>
    );   } 
}

class MyData extends Component {  
  render() {
    var myname="Ravi";
   return(    
    <div className='MyData'>
      <h3>Hello this MyData class component</h3>
      Name : {myname}  
    </div> 
   );  } }
export default App