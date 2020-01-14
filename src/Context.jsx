import React, { useState, useContext, createContext } from "react";
import Flexbox from 'flexbox-react';

// Can this be empty or anything because it just gives the option
// to set initial values and I immediately give new values in userInformation?

const UserContext = createContext({});

const ContextExample = () => {
  // create userInformation object so it can be passed to the Provider
  const userInformation = useState({
    firstName: "Darth",
    lastName: "Vader",
    isLoggedIn: true
  });

  const bulletPoints = (
    <Flexbox className="bullets" width="100%">
      <ul>
        <li>
          useContext is a hook for getting broadly shared application data without using prop drilling.
        </li>
        <li>
          Should be used when you find yourself passing props down through three or more levels in your component tree
        </li>
        <li>
          useContext accepts a context object and returns the current value for that context
        </li>
        <li>
          In this example, Darth Vader and his log in status is iniitally set in the state for the Provider,
              which is the Grandparent. No traditional props are passed from parent to child here and the
              intermediate components don't know anything about the user. The Great
            grandchild has access by using useContext which gives access to the user and the ability to change state of log in.
        </li>
      </ul>
    </Flexbox>
  )

  return (
    <UserContext.Provider value={userInformation}>
      <h1>useContext example:</h1>
      <div>{bulletPoints}</div>
      <h1>Grandparent</h1>
      <Parent />
    </UserContext.Provider>
  );
};

const Parent = () => (
  <div>
    <h2>Parent</h2>
    <Child />
  </div>
);

const Child = () => (
  <div>
    <h3>Child</h3>
    <Grandchild />
  </div>
);

const Grandchild = () => (
  <div>
    <h4>Grandchild</h4>
    <GreatGrandchild />
  </div>
);

const GreatGrandchild = () => {
  const [user, setUser] = useContext(UserContext);
  const status = user.isLoggedIn ? "logged in" : "logged out";
  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} is ${status}`}</h5>
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { isLoggedIn: !user.isLoggedIn }));
        }}
      >
        Log in or out
      </button>
    </div>
  );
};

export default ContextExample;
