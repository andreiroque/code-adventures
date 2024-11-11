import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>Hello World!</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me! {counter}
      </button>
    </div>
  );
};

export default App;
