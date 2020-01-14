import React from 'react';

import StateExample from "./State";
import EffectExample from "./Effect";
import ContextExample from "./Context";
import UseRefExample from "./Ref";
import ReducerExample from "./Reducer";
import MemoComponent from "./Memo";
import CallbackComponent from "./Callback";
import LayoutEffectComponent from "./LayoutEffect";


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Advanced React Hooks</h1>
      <hr />
      <hr />
      <p>Reference material used with permission from Kent C Dodds</p>
      <p>https://btholt.github.io/complete-intro-to-react-v5/hooks-in-depth</p>
      <p>https://codesandbox.io/s/hooks-examples-6ote1</p>
      <hr />
      <StateExample />
      <hr />
      <EffectExample />
      <hr />
      <ContextExample />
      <hr />
      <UseRefExample />
      <hr />
      <ReducerExample />
      <hr />
      <MemoComponent />
      <hr />
      <CallbackComponent />
      <hr />
      <LayoutEffectComponent />
      <hr />
      <h1>Q and Maybe A</h1>
    </div>
  );
}

export default App;
