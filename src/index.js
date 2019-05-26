import React, { useState } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import "./styles.css";

function App() {
  let toggleRef = null;
  const [isToggled, setToggled] = useState(false);
  const [isTransitionEnd, setTransitionEnded] = useState(false);
  function toggleClicked() {
    setToggled(!isToggled);
    setTransitionEnded(isToggled ? false : true);
  }

  function setRef(ref) {
    toggleRef = ref;
  }

  function transitionEnded() {
    setTransitionEnded(true);
  }

  const outerClass = classnames({
    outer: true,
    toggledOuter: isToggled && isTransitionEnd
  });

  const innerClass = classnames({
    inner: true,
    toggled: isToggled
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className={outerClass} onClick={toggleClicked}>
        <div
          ref={setRef}
          onTransitionEnd={transitionEnded}
          className={innerClass}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
