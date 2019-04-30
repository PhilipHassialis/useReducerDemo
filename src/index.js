import React from "react";
import ReactDOM from "react-dom";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + 1;
      case "SUB":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
    // const obj = {
    //   ADD: state + 1,
    //   SUB: state - 1,
    //   RESET: (state = 0)
    // };
    // return obj[action];
  };

  const [value, setValue] = React.useState();
  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "SUB" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
