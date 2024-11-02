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

function AddItem(props) {
  const value = props.text;

  return (
    <form>
      <label for="text-form">Type Something</label>
      <input type="text" value={value} id="text-form" />
    </form>
  );
}

AddItem.defaultProps = {
  number: 2,
  text: "default",
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
