import { useState } from "react"

export default function CounterApp() {
  
    const [count,setCount]= useState(0)

    function handleAddOne() {
      setCount(count + 1)
    }

    function handleSubtractOne() {
      setCount(count - 1)
    }

    function handleReset() {
      setCount(0)
    }

    return (
    <div>
      <h3>Counter App</h3>
        <h4>Count: {count}</h4>
      <button onClick={handleAddOne}>Add One</button>
      <button onClick={handleSubtractOne}>Subtract One</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}