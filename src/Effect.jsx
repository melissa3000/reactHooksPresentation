import React, { useState, useEffect } from "react";
import Flexbox from 'flexbox-react';

function EffectExample() {
  const [count, updateCounter] = useState(0);
  const [showBanana, updateShowBanana] = useState(null);
  useEffect(() => {
    if (count !== 0 && count % 5 === 0) {
      updateShowBanana(true);
    } else updateShowBanana(false);
  }, [count]);
  return (
    <>
      <h1>useEffect example:</h1>
      <Flexbox className="bullets" width="100%">
        <ul>
          <li>
            useEffect is a hook used for encapsulating code that has side effects
          </li>
          <li>
            use [] as a second param to run only once after initial render, [count] to render
            every time count changes, or do not include it at all to have it run on every render
          </li>
          <li>
            In this example, the useEffect is triggered when the count changes
          </li>
          <li>
            You can also include a cleanup function by using a return statement
          </li>
        </ul>
      </Flexbox>
      <h1 onClick={() => updateCounter(count + 1)}>{count}</h1>
      {showBanana && "🏆"}
    </>
  );
}

export default EffectExample;
