import React, { useState, useRef } from "react";
import Flexbox from 'flexbox-react';

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const numRef = useRef(0);

  function illustrateScopeDelay() {
    setCount(count + 1);
    numRef.current++;
    setTimeout(() => alert(`state: ${count} | ref: ${numRef.current}`), 1000);
  }

  return (
    <div>
      <h1>useRef Example:</h1>
      <Flexbox className="bullets" width="100%">
        <ul>
          <li>
            useRef returns a mutable ref object whose .current property is initialized with a passed argument.
            The object persists for the full lifetime of the component.
          </li>
          <li>
            It's also useful for referencing DOM nodes directly
          </li>
          <li>
            In this example, the state and ref numbers are always the same but the alert shows how state can
            get caught in closure when using setTimeout or setInterval. When a user clicks both state and ref
            are updated, but a setTimeout is also set that has a 1 second delay before showing the alert.
            Since there's a delay the alert captures the state value when the timeout was first called
            (because it's held by closure).
            Ref will always log the current value and will always be up to date, never caught in the closure's scope.
          </li>
        </ul>
      </Flexbox>
      <button onClick={illustrateScopeDelay}>Increment Count</button>
      <h4>state: {count}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

export default UseRefExample;
