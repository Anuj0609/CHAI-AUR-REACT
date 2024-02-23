import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addvalue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  if (counter > 20 || counter < 0) {
    // alert("End Game");
  } else {
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>
        {counter < 20 && counter > 0 ? "Add value: " + counter : "End game"}
      </button>
      <br />
      <button onClick={removeValue}> {counter < 20 && counter > 0 ? "Remove value: " + counter : "End game"}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
