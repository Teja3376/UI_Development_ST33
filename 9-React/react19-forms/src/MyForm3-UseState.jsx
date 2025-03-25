import {useState} from "react"
function MyForm3(){
    var [myCar,setMyCar] = useState("TATA");
    var handleChage = (my) => {
        setMyCar(my.target.value);
    }
      
    return(
       <form>
        <h3>Select Cars :</h3> 
            <select value = {myCar} onChange={handleChage}>
             <option value="TATA">TATA</option>
             <option value="VOLVO">VOLVO</option>
             <option value="BENZ">BENZ</option>
             <option value="Ford">Ford</option>
            </select>
       </form>

    );
}
export default MyForm3;