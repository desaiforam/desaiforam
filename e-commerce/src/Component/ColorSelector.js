/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AuthAction } from "../store/action/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config";

function ColorSelector(props) {
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState("Sky");
  const { id } = props;
  const { addCartItem } = useSelector((state) => state.Auth);

  const handleColorClick = (color) => {
    const userId = auth.currentUser.uid;
    const setColor = { id: id, colorName: color };
    dispatch(AuthAction.upDateColor(setColor));
    setSelectedColor(color);

    const colorChange = addCartItem;
    localStorage.setItem("addCartItem",JSON.stringify(colorChange))

  };

  const userId = auth?.currentUser?.uid;



  const colorSelect = addCartItem.find((item) => item.id === id)?.colorName;

  return (
    <div>
      <div className="input-button">
        Colors:
        <div className="but-input d-flex gap-3">
          <div
            className={`color-main ${
              colorSelect === "Sky" && "selected-color"
            }`}
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
            className={`color-main ${
              colorSelect === "Orange" && "selected-color"
            }`}
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
