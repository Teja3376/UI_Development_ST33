import { Component } from "react";

class Family extends Component{
    render(){
        var myname = "Charan Teja Kodamanchili";
        var fathername = "Mohan rao Kodamanchili";
        var mothername = "Anantha Lakshmi Kodamnchili"

        return(
            <>
            <table border="10">
                <thead>Family</thead>
                <tr>
                    <th>
                        Your Name :
                    </th>
                    <td>
                        {myname}
                    </td>
                </tr>
                <tr>
                    <th>
                        Father Name :
                    </th>
                    <td>
                        {fathername}
                    </td>
                </tr>
                <tr>
                    <th>
                        Mother Name :
                    </th>
                    <td>
                        {mothername}
                    </td>
                </tr>
            </table>
            </>
        );
    }
}
class Address extends Component{
    render(){
        return(
            <>
            <table border="10">
                <thead>ADDRESS</thead>
            <tr>
                    <th>
                       Address :
                    </th>
                    <td>
                        Hyderabad
                    </td>
                </tr>
            </table>
            </>
        );
    }
}
export {Address}
export default Family