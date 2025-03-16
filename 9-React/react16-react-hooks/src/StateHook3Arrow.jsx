import {useState} from 'react'
function Hook3 (){
    const [name, setName] =useState("Teja");
    const [age, setAge] = useState(19);
    return(
        <>
        <h1>
            {name}
        </h1>
        <button onClick={()=>{setName("Charan")}}>Name Change</button>
        <h2>{age}</h2>
        <button onClick={()=>{setAge(age+1)}}>Age Changed</button>
        </>
        
    )
}
export default Hook3