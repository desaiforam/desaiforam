/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { auth } from "../config";

function SizeSelector(props) {
  const dispatch = useDispatch();
  const { addCartItem } = useSelector((state) => state.Auth);
  const { id } = props;

  const selectedSize = addCartItem.find((item) => item.id === id)?.size;

  const handleSizeClick = (size) => {
    const userId = auth?.currentUser?.uid;
    const setSize = { id: id, size: size };
    dispatch(AuthAction.upDateSize(setSize));

    localStorage.setItem(`size_${userId}`, size);
  };

  const userId = auth?.currentUser?.uid;

  const savedSize = localStorage.getItem(`size_${userId}`);

  useEffect(() => {
    const selectSize = { id: id, size: savedSize };
    if (savedSize) {
      dispatch(AuthAction.upDateSize(selectSize));
      console.log("selectSize", selectSize);
    }
  },[addCartItem]);
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


