import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Myapp() {
  return (
    <div>
      <h1>Custom App! chai</h1>
    </div>
  );
}

// const ReactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     children: "Click me to visit google",
//   };

const anotherElement = <a href="https://google.com">visit google</a>;

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
