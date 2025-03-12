import {Component} from 'react';
class MyStudentInfo extends Component {  
    render() {
      var myname="Ravi";
      var sno=100;
     return(    
      <div className='MyData'>
        <h3>Hello this MyData class component</h3>
        Name : {myname}  
        Sno  : {sno}
      </div>
     );
    }}
    class MyStudentAddress extends Component {  
        render() {
          var hno="128/a";
          var street="ABC Colony"
          var city="Hyderabad";
          var pin=560090
         return(    
          <div className='MyData'>
            <h3>Hello this MyData class component</h3>
            House No  : {hno}  
            Street  : {street}
            City    : {city}
            Pin code : {pin}
          </div>
         );
        }}    
export {MyStudentAddress};
export default MyStudentInfo;  