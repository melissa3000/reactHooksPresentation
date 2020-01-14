import React, { useState, useMemo } from "react";
import Flexbox from 'flexbox-react';

// useMemo is similar to useCallback except it allows you to apply
// memoization to any value type (not just functions)

// credit: this example is directly from Kent C. Dodds

const fibonacci = n => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);
  // const fib = fibonacci(num);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example:
      </h1>
      <Flexbox className="bullets" width="100%">
        <ul>
          <li>
            useMemo is a performance optimizer and should only be used when you have a performance problem.
            Otherwise it adds unneccessary complexity
          </li>
          <li>
            useMemo memoizes expensive function calls so they only are re-evaluated when needed
          </li>
          <li>
            In this example, a re-render is triggered any time the title color changes. If I didn't have useMemo
            the fibonacci calculation would run every time the component re-rendered. Now, it will only call
            fibonacci if the count changes. Otherwise, it just give the memoized answer.
          </li>
        </ul>
      </Flexbox>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
