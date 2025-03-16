import React, { useState, useEffect } from 'react';
/*
useEffect simulates lifecycle methods like componentDidMount and componentDidUpdate.
State updates using setCount() trigger a re-render.
*/
function UseEffectHook() {
  const [count, setCount] = useState(0);

  // Regular function for useEffect
  useEffect(function() {
    console.log("useEffect like Class Component lifecycle componentDidUpdate");
  });
  // Regular function for increment
  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>UseEffectHook1: clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
}

export default UseEffectHook;