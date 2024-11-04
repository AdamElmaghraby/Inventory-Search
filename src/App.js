import "./App.css";
import Info from "./info.js";
import { PropTypes } from "prop-types";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="bob" number={2} />
    </div>
  );
}

function ButtonState() {
  return(
    <p>Title: </p>
    <p>Counter: </p>
  )
}

export default App;
