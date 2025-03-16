import React, { useState, useEffect } from 'react';
/*
useEffect simulates lifecycle methods like componentDidMount and componentDidUpdate.
State updates using setCount() trigger a re-render.
*/
function Arrow() {
  const [count, setCount] = useState(0);
  useEffect(()=> {
    console.log("useEffect like Class Component lifecycle componentDidUpdate");
  });
  return (
    <div>
      <p>UseEffectHook1: clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  );
}

export default Arrow;