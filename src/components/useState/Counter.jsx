import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  console.log('re-rendered');

  return (
    <div>
      <p>current Value:{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
