import {Component} from "react";
class MyCounter extends Component {
   constructor(){
    super();
       this.state={
        count: 0
       }
this.increment = this.increment.bind(this)
   } 
 render(){
    return(
         <div>           
          <button   onClick={this.increment}>MyIncrement</button> <br></br>
             {this.state.count}
        </div> );
 }
  increment (){
      this.setState({  
        count : this.state.count +1
       }); }
} 
export default MyCounter; 