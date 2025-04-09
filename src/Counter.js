import React, { useState } from 'react';

function Counter() {
  // useState is a React Hook that lets you add state to function components
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h3>Interactive Counter</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;