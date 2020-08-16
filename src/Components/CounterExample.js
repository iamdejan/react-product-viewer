import React, {useState} from 'react';

function CounterExample() {
  let [count, setCount] = useState(0);

  if (count < 0) {
    count = 0;
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1 onClick={() => setCount(count + 1)}>
        Increment
      </h1>
      <h1 onClick={() => setCount(count - 1)}>
        Decrement
      </h1>
    </div>
  );
}

export default CounterExample;
