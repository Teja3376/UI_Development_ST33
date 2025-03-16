import {useState} from 'react'
function Hook2 (){
    const [name, setName] =useState("Teja");
    const [age, setAge] = useState(19);
    function NameChange(){
        setName("Charan")
    }
    function AgeChange(){
        setAge(20)
    }
    return(
        <>
        <h1>
            {name}
        </h1>
        <button onClick={NameChange}>Name Change</button>
        <h2>{age}</h2>
        <button onClick={AgeChange}>Age Changed</button>
        </>
        
    )
}
export default Hook2