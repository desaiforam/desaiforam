import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";

function SizeSelector({ id }) {
  const [selectedSize, setSelectedSize] = useState();
  const dispatch = useDispatch();

  
  const handleSizeClick = (size) => {
   
    const setSize = { id: id, size: size };
    dispatch(AuthAction.upDateSize(setSize));
    setSelectedSize(size);
  };

  return (
    <div className="size-chart d-flex" style={{ cursor: "pointer" }}>
      <span
        className={`chart ${selectedSize === "XS" && "select-size"}`}
        style={{
          background: selectedSize === "XS" ? "orangeade" : "",
          color: selectedSize === "XS" ? "white" : "",
        }}
        onClick={() => handleSizeClick("XS")}
      >
        XS
      </span>
      <span
        className={`chart ${selectedSize === "S" && "select-size"}`}
        style={{
          background: selectedSize === "S" ? "orangeade" : "",
          color: selectedSize === "S" ? "white" : "",
        }}
        onClick={() => handleSizeClick("S")}
      >
        S
      </span>
      <span
        className={`chart ${selectedSize === "M" && "select-size"}`}
        style={{
          background: selectedSize === "M" ? "orangeade" : "",
          color: selectedSize === "M" ? "white" : "",
        }}
        onClick={() => handleSizeClick("M")}
      >
        M
      </span>
      <span
        className={`chart ${selectedSize === "L" && "select-size"}`}
        style={{
          background: selectedSize === "L" ? "orangeade" : "",
          color: selectedSize === "L" ? "white" : "",
        }}
        onClick={() => handleSizeClick("L")}
      >
        L
      </span>
      <span
        className={`chart ${selectedSize === "XL" && "select-size"}`}
        style={{
          background: selectedSize === "XL" ? "orangeade" : "",
          color: selectedSize === "XL" ? "white" : "",
        }}
        onClick={() => handleSizeClick("XL")}
      >
        XL
      </span>
    </div>
  );
}

export default SizeSelector;

//a list of product size will display  with id using console
