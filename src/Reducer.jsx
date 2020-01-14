import React, { useReducer } from "react";
import Flexbox from 'flexbox-react';


// one reducer that handles all the updates based on an action type
const initialState = { width: 15, height: 15, r: 0, g: 0, b: 0 };

const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return Object.assign({}, state, {
        width: state.width + 15,
        height: state.width + 15
      });
    case "minus":
      return Object.assign({}, state, {
        width: Math.max(state.width - 15, 2),
        height: Math.max(state.width - 15, 2)
      });
    case "inc_red":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "dec_red":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "inc_green":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "dec_green":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "inc_blue":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "dec_blue":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

function ReducerExample() {
  const [{ width, height, r, g, b }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <>
      <h1>useReducer Example:</h1>
      <Flexbox className="bullets" width="100%">
        <ul>
          <li>
            A reducer is a function that determine changes to an application's state based on
            the action it's given. useReducer allows you to do Redux-style reducers but inside a hook
          </li>
          <li>
            It accepts a reducer which accepts state and action params and returns the current state paired with a
            dispatch method
          </li>
          <li>
            It is an alternative to useState for when you have complex state logic involving multiple
            sub-values or when the next state depends on the previous one.
          </li>
          <li>
            In this example, one reducer handles updates to both size and color state values based on action type
          </li>
        </ul>
      </Flexbox>
      <div style={{ minHeight: "100px" }}>
        <div
          style={{
            background: `rgb(${r}, ${g}, ${b})`,
            borderRadius: "50%",
            margin: "auto",
            height,
            width
          }}
        />
      </div>
      <div style={{ marginTop: "20px"}}>
        <button style={{marginRight: "5px" }} onClick={() => dispatch({ type: "plus" })}>Bigger</button>
        <button onClick={() => dispatch({ type: "minus" })}>Smaller</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <span>r </span>
        <button style={{marginRight: "5px" }} onClick={() => dispatch({ type: "inc_red" })}>➕</button>
        <button onClick={() => dispatch({ type: "dec_red" })}>➖</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <span>g </span>
        <button style={{marginRight: "5px" }} onClick={() => dispatch({ type: "inc_green" })}>➕</button>
        <button onClick={() => dispatch({ type: "dec_green" })}>➖</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <span>b </span>
        <button style={{marginRight: "5px" }} onClick={() => dispatch({ type: "inc_blue" })}>➕</button>
        <button onClick={() => dispatch({ type: "dec_blue" })}>➖</button>
      </div>
    </>
  );
}

export default ReducerExample;
