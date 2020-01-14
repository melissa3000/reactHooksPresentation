import React, { useState, useLayoutEffect, useRef } from "react";
import Flexbox from 'flexbox-react';

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  const bulletContent = (
    <Flexbox className="bullets" width="100%">
    <ul>
      <li>
        useLayoutEffect is the same as useEffect except that it fires
          synchronously after all DOM mutations as opposed to scheduled like useEffect is.
      </li>
      <li>
        It's used to read layout from the DOM and synchronously re-render. Common uses would be
            measuring DOM nodes for things like animations.
      </li>
      <li>
        It's recommended to use the standard useEffect when possible to avoid blocking visual updates.
      </li>
      <li>
        In this example, the texa area is measured after every click on it. The onClick forces a re-render which
        means you're running render twice but it's also necessary to be able to capture the measurments.
      </li>
    </ul>
  </Flexbox>
  )

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <p>{bulletContent}</p>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0);
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
