/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AuthAction } from "../store/action/AuthAction";
import { useDispatch, useSelector } from "react-redux";

function ColorSelector(props) {
  const dispatch = useDispatch();
  
  const [selectedColor, setSelectedColor] = useState("Sky");
  const { id, } = props
  const { addCartItem } = useSelector((state) => state.Auth);
  const handleColorClick = (color) => {
    const setColor = { id: id, colorName: color };
    dispatch(AuthAction.upDateColor(setColor));
    setSelectedColor(color);
  };
  const colorSelect = addCartItem.find((item) => item.id === id
  )?.colorName
 
  return (
    <div>
      <div className="inputbutton">
        Colors:
        <div className="butinput d-flex gap-3">
          <div
            className={`color-main ${colorSelect === "Sky" && "selected-color"}`}
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
            className={`color-main ${colorSelect === "Orange" && "selected-color"}`}
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

// get the color value can store a redux list 