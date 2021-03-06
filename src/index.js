import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

// here , no dependency array is passed
// useEffect will be called  after every render (or re-render)

const Show = (props) => {
  useEffect(() => {
    console.log("useEffect called on " + props.name);

    return () => {
      console.log("clean up called on " + props.name);
    };
  });

  return (
    <div>
      {console.log("rendered " + props.name)}
      <h1> rendered : {props.name} </h1>
    </div>
  );
};

function Counter() {
  const [value, setValue] = useState("Empty");
  const [num, setNum] = useState(0);

  // click handler for first two buttons
  const clickHandler = (event) => {
    setValue(event.target.innerText);
  };
  // click handler for last two buttons
  const secondClickHandler = (event) => {
    setNum(event.target.innerText);
  };

  return (
    <div>
      <button onClick={clickHandler}> pizza </button>
      <button onClick={clickHandler}> Burger </button>
      <button onClick={secondClickHandler}> 10 </button>
      <button onClick={secondClickHandler}> 20 </button>
      <Show name={value} num={num}>
        {" "}
      </Show>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
