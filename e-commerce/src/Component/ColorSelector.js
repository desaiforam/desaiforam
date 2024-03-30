/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AuthAction } from "../store/action/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../config";
import { useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

function ColorSelector(props) {
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState();
  const location = useLocation();
  const { id } = props;
  const { addCartItem } = useSelector((state) => state.Auth);
  const colorSelect = addCartItem.find((item) => item.id === id)?.colorName;

  const handleColorClick = async (color) => {
    try {
      const setColor = { id: id, colorName: color };
      dispatch(AuthAction.upDateColor(setColor));
      setSelectedColor(color);
      const colorChange = addCartItem;
      localStorage.setItem("addCartItem", JSON.stringify(colorChange));

      const colorItemed = {
        itemID: location.state.id,
        color: color,
      };
      const userId = auth.currentUser.uid;
      await addDoc(collection(db, `users/${userId}/color`), colorItemed);
      console.log("colorItemed", colorItemed);

      console.log("Document added successfully to the 'color' collection!");
    } catch (error) {
      console.log("Error adding document to 'color' collection:", error);
    }
  };

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
