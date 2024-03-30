/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { auth, db } from "../config";
import { addDoc, collection } from "firebase/firestore";
import { useLocation } from "react-router-dom";

function SizeSelector(props) {
  const dispatch = useDispatch();
  const { addCartItem } = useSelector((state) => state.Auth);
  const location = useLocation();
  const { id, setSelectedSize } = props;

  const selectedSize = addCartItem.find((item) => item.id === id)?.size;

  const handleSizeClick = async (size) => {
    try {
      const setSize = { id: id, size: size };
      dispatch(AuthAction.upDateSize(setSize));
      setSelectedSize(size);
      const sizeChange = addCartItem;
      localStorage.setItem("addCartItem", JSON.stringify(sizeChange));
      
      const itemed = {
        itemID: location.state.id,
        size: size,
      };
      const userId = auth.currentUser.uid;
      await addDoc(collection(db, `users/${userId}/size`), itemed);
      console.log("itemed", itemed);
      console.log("Document added successfully to the 'size' collection!");
    } catch (error) {
      console.log("Error adding document to 'size' collection:", error);
    }
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
