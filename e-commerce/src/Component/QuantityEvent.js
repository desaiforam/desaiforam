/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AuthAction } from "../store/action/AuthAction";
// import { useLocation } from "react-router-dom";
// import { auth } from "../config";
// import { doc, getDoc } from "firebase/firestore";

// const QuantityCounter = (props) => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { addCartItem } = useSelector((state) => state.Auth);
//   const { id, item } = props;
//   const [quantityCart, setQuantityCart] = useState(() => {});

//   useEffect(() => {
//     const quantityItem = addCartItem.find(
//       (item) => item.id === location.state.id
//     );
//     setQuantityCart(quantityItem ? quantityItem.quantity : 1);
//   }, [addCartItem, location.state.id]);

//   const decreaseQuantity = () => {
//     if (quantityCart > 1) {
//       const newQuantity = quantityCart - 1;
//       updateQuantity(newQuantity);
//     }
//   };

//   const increaseQuantity = () => {
//     if (quantityCart < 10) {
//       const newQuantity = quantityCart + 1;
//       updateQuantity(newQuantity);
//     }
//   };

//   const updateQuantity = (newQuantity) => {
//     dispatch(AuthAction.updateQuantity({ id: id, quantity: newQuantity }));
//     saveQuantityLocally(newQuantity);
//   };

//   const saveQuantityLocally = (quantity) => {
//     const userId = auth.currentUser?.uid;
//     if (userId) {
//       localStorage.setItem(
//         `quantity_${userId}`,
//         JSON.stringify({ id: id, quantity: quantity })
//       );
//     }
//   };
//   useEffect(async () => {
//     const fetchQuantityFromFirestore = async (async) => {
//       try {
//         const userId = auth.currentUser?.uid;
//         const cartItemDoc = (doc, `user/${userId}/addCartItem`,quantityCart);
//         console.log("cartItemDoc", cartItemDoc);

//         const cartItemSnapshot = await getDoc(cartItemDoc);
//         if (cartItemSnapshot.exists()) {
//           const quantityCart = cartItemSnapshot.data().size;
//           console.log("sizeFromFirestore", quantityCart);

//           dispatch(AuthAction.upDateSize({ id: id, size: quantityCart }));
//         }
//       } catch (error) {
//         console.error("Error fetching size from Firestore:", error);
//       }
//     };
//     fetchQuantityFromFirestore();
//   }, [ auth?.currentUser?.uid]);

//   const onchangeQue = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     if (newQuantity >= 1 && newQuantity <= 10) {
//       updateQuantity(newQuantity);
//     }
//   };

//   return (
//     <>
//       <div className="quantitycounter d-flex">
//         <button className="quantity" onClick={decreaseQuantity}>
//           -
//         </button>
//         <div
//           className="qunatityvalue"
//           onChange={(e) => onchangeQue(e, item?.price)}
//         >
//           {quantityCart}
//         </div>
//         <button className="quantity" onClick={increaseQuantity}>
//           +
//         </button>
//       </div>
//     </>
//   );
// };

// export default QuantityCounter;
//safelyCallDestroy

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";
import { auth, db } from "../config";
import { doc, getDoc } from "firebase/firestore";

const QuantityCounter = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { addCartItem } = useSelector((state) => state.Auth);
  const { id, item } = props;
  const [quantityCart, setQuantityCart] = useState(() => {});

  useEffect(() => {
    const quantityItem = addCartItem.find(
      (item) => item.id === location.state.id
    );
    setQuantityCart(quantityItem ? quantityItem.quantity : 1);

    
    return safelyCallDestroy;
  }, [addCartItem, location.state.id]);

  useEffect(() => {
    fetchQuantityFromFirestore();
  }, [id, auth.currentUser?.uid]);

  const decreaseQuantity = () => {
    if (quantityCart > 1) {
      const newQuantity = quantityCart - 1;
      updateQuantity(newQuantity);
    }
  };

  const increaseQuantity = () => {
    if (quantityCart < 10) {
      const newQuantity = quantityCart + 1;
      updateQuantity(newQuantity);
    }
  };

  const updateQuantity = (newQuantity) => {
    dispatch(AuthAction.updateQuantity({ id: id, quantity: newQuantity }));
     saveQuantityLocally(newQuantity);
  };

  const saveQuantityLocally = (quantity) => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      localStorage.setItem(
        "addCartItem",
        JSON.stringify({ id: id, quantity: quantity })
      );
    }
  };

  const fetchQuantityFromFirestore = async () => {
    try {
      const userId = auth.currentUser?.uid;
      const cartItemDoc = doc(db, `user/${userId}/addCartItem`, quantityCart);
      console.log("cartItemDoc", cartItemDoc);

      const cartItemSnapshot = await getDoc(cartItemDoc);
      if (cartItemSnapshot.exists()) {
        const quantityCart = cartItemSnapshot.data().size;

        dispatch(AuthAction.upDateSize({ id: id, size: quantityCart }));
      }
    } catch (error) {
      //console.log("Error fetching size from Firestore:", error);
    }
  };

  const onchangeQue = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(newQuantity);
    }
  };

  const safelyCallDestroy = () => {
    console.error("Component is unmounting, perform cleanup here...");
  };

  return (
    <>
      <div className="quantitycounter d-flex">
        <button className="quantity" onClick={decreaseQuantity}>
          -
        </button>
        <div
          className="qunatityvalue"
          onChange={(e) => onchangeQue(e, item?.price)}
        >
          {quantityCart}
        </div>
        <button className="quantity" onClick={increaseQuantity}>
          +
        </button>
      </div>
    </>
  );
};

export default QuantityCounter;
