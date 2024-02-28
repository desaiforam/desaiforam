import React, { useState } from 'react'
import {AuthAction} from '../store/action/AuthAction';
import { useDispatch } from 'react-redux';

 function ColorSelector({id}) {
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState([
        { colorName: "sky", id: 0 },
      ]);

      const handleColorClick = (color) => {
        setSelectedColor(color);
        const setColor = { id: id , colorName: color};
        dispatch(AuthAction.upDateColor(setColor));
      };
  return (
    <div><div className="inputbutton">
    Colors:
    <div className="butinput d-flex gap-3">
      <div
        className={`chart ${selectedColor === "0" && "select"}`}
        onClick={() => handleColorClick("Sky")}
      >
        <div
          className="select"
          style={{
            backgroundColor: "#A0BCE0",
            color: "#A0BCE0",
            margin: "5px",
          }}
        ></div>
      </div>
      <div
        className={`chart ${selectedColor === "1" && "select"}`}
        onClick={() => handleColorClick("Orange")}
      >
        <div
          className="select"
          style={{
            backgroundColor: "#E07575",
            color: "#E07575",
            margin: "5px",
          }}
        ></div>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default ColorSelector

