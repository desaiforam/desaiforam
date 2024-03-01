import React, { useState } from "react";
import { AuthAction } from "../store/action/AuthAction";
import { useDispatch } from "react-redux";

function ColorSelector(props) {
  const dispatch = useDispatch();
  
  const [selectedColor, setSelectedColor] = useState("M");
  const { id, } = props
  const handleColorClick = (color) => {
    const setColor = { id: id, colorName: color };
    dispatch(AuthAction.upDateColor(setColor));
    setSelectedColor(color);
  };
  return (
    <div>
      <div className="inputbutton">
        Colors:
        <div className="butinput d-flex gap-3">
          <div
            className={`color-main ${selectedColor === "Sky" && "selected-color"}`}
            onClick={() => handleColorClick("Sky")}
          >
            <div
              className="select"
              style={{
                backgroundColor: "#A0BCE0",
                color: "#A0BCE0",
                margin: "3px",
              }}
            ></div>
          </div>
          <div
            className={`color-main ${selectedColor === "Orange" && "selected-color"}`}
            onClick={() => handleColorClick("Orange")}
          >
            <div
              className="select"
              style={{
                backgroundColor: "#E07575",
                color: "#E07575",
                margin: "3px",
                
              }}
            ></div>
          </div>
        </div>
      </div>
     </div>
  );
}

export default ColorSelector;

