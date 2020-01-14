

// the function given to react.memo must not change
// so that a re-render isn't triggered. To do that,
// we pass in useCallback to ensure the exact same
// function is passed to the component each time

import React, { useState, useEffect, useCallback, memo } from "react";
import Flexbox from 'flexbox-react';

// react.memo - if nothing has changed, do not re-render
const ExpensiveComponent = memo(({ fn, count }) => {
  return (
    <div>
      <h1>fibonacci calculation: {fn(count)}</h1>
      <h4>Time of last render: {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);

  const bulletContent = (
    <Flexbox className="bullets" width="100%">
    <ul>
      <li>
        useCallback is similar to useMemo and returns a memoized callback
        instead of just a memoized value. It should only be used when you have a performance problem.
      </li>
      <li>
        It takes an inline callback and an array of any dependencies as its params and returns
        a memoized version of the callback that only changes if one of the dependencies has changed.
      </li>
      <li>
        This example would render every second without useCallback, but because we use react.memo, which
          does a simple check to see if any props have changed, and useCallback which returns the exact
          same function, no re-render is triggered.
      </li>
      <li>
        Now it will only re-render if count changes and not every time the time changes
      </li>
    </ul>
  </Flexbox>
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fibonacci = n => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>useCallback Example:</h1>
      <div>{bulletContent}</div>
      <h1>Current time: {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComponent fn={useCallback(fibonacci, [])} count={count} />
      {/* <ExpensiveComponent fn={fibonacci} count={count} /> */}
    </div>
  );
};

export default CallbackComponent;
