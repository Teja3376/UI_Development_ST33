import { Component } from "react";

class Univerisity extends Component{
    render(){
        var college = "B V Raju Degree College"
        return(
            <>
            <table border="10">
                <thead>
                    Education
                </thead>
                <tr>
                    <th>
                        College name : 
                    </th>
                    <td>
                            {college}
                    </td>
                </tr>
            </table>
            <br/>
            <School/>
            </>
        );
    }
}
class School extends Component{
    render(){
        return(
            <>
             <table border="10">
                <thead>
                    Education
                </thead>
                <tr>
                    <th>SCHOOL NAME</th>
                    <th>SYLLABUS</th>
                    <th>YEAR</th>
                </tr>
                <tr>
                    <td>Ravindra English Medium School</td>
                    <td>State</td>
                    <td>2019</td>
                </tr>
            </table>
            </>
        );
    }
}
export default Univerisity