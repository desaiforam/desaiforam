/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { doc, getDoc, collection } from "firebase/firestore"; // Import collection function
import { db } from "../firebase";
import { auth } from "../config";

function SizeSelector(props) {
  const dispatch = useDispatch();
  const { addCartItem } = useSelector((state) => state.Auth);
  const { id } = props;

  const selectedSize = addCartItem.find((item) => item.id === id)?.size;
  

  useEffect(() => {
    const fetchSizeFromFirestore = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          console.error("User not logged in.");
          return;
        }
        const userId = user.uid;

        const cartItemRef = collection(db, `users/${userId}/addtocart`);

        const docRef = doc(cartItemRef, id);

        const cartItemSnapshot = await getDoc(docRef);
        if (cartItemSnapshot.exists()) {
          const sizeFromFirestore = cartItemSnapshot.data().selectedSize;
          console.log("cartItemSnapshot", cartItemSnapshot);

          dispatch(AuthAction.upDateSize({ id: id, size: sizeFromFirestore }));
        }
      } catch (error) {
        console.log("Error fetching size from Firestore:", error);
      }
    };

    fetchSizeFromFirestore();
  }, [id, dispatch, auth.currentUser]);

  const handleSizeClick = (size) => {
    const setSize = { id: id, size: size };
    dispatch(AuthAction.upDateSize(setSize));

    const sizeChange = addCartItem;
    localStorage.setItem("addCartItem", JSON.stringify(sizeChange));
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
