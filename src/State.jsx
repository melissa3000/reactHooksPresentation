import React, { useState } from "react";
import Flexbox from 'flexbox-react';

const StateExample = () => {
  const [textColor, updateTextColor] = useState("red");
  const handleClick = () => {
    const newColor = textColor === "red" ? "blue" : "red";
    updateTextColor(newColor);
  };
  return (
    <div>
      <h1>useState example:</h1>
      <Flexbox className="bullets" width="100%">
        <ul>
          <li>
            useState is a hook used for local state management
          </li>
          <li>
            It gives you a state value and a function to update it
          </li>
          <li>
            In this example the text color is kept in local state and is
            fed in each time the component re-renders
          </li>
        </ul>
      </Flexbox>
      <h1 onClick={handleClick} style={{ color: textColor }}>
        I change color!
      </h1>
    </div>
  );
};

export default StateExample;
