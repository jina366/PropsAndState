import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
const Color = (props) => {
  return( <div className={props.color} onClick={() => props.selectColor(props.color)} />
)};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" selectColor={selectColor} />
        <Color color="green" selectColor={selectColor} />
        <Color color="violet" selectColor={selectColor} />
      </div>
    </div>
  );
};

const selectColor = (colorName) => {
  setSelectedColor(colorName);
};

ReactDOM.render(<Picker />, document.getElementById("app"));
