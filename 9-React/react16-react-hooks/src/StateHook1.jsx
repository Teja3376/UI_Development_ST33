import { useState } from 'react'
function StateHook1() {
    const [count, setCount] = useState(0)
    function handleClick(){
      setCount(count+1)
      console.log(count);
      
    }
    
     return(<>
          <button onClick={handleClick}> Increment {count}</button>
     </>)
  }
  export default StateHook1