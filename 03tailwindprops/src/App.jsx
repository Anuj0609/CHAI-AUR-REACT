import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Anuj",
    age: 21,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">
        Tailwind Test
      </h1>

      <Card username="chai aur code" someObje={newArr} btnText="Click me" />
      <Card username="Anuj" />
    </>
  );
}

export default App;
