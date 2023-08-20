import React, { useState } from 'react';

interface CounterProps {
  counter: number;
}

function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.counter);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;

