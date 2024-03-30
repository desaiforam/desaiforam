import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";
import { auth, db } from "../config";
import { addDoc, collection } from "firebase/firestore";

const QuantityCounter = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { addCartItem } = useSelector((state) => state.Auth);
  const { id, item } = props;
  const [quantityCart, setQuantityCart] = useState(1);

  useEffect(() => {
    const quantitycart = addCartItem.find(
      (item) => item.id === location.state.id
    );
    setQuantityCart(quantitycart ? quantitycart.quantity : 1);
  }, [addCartItem, location.state.id]);

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
    setQuantityCart(newQuantity);
     console.log("newQuantity", newQuantity);
     const handleQuantityChange = async (newQuantity) =>{
      try {
        
        const userId = auth.currentUser.uid;
        const quantityData = {
          itemID: location.state.id,
          quantity: newQuantity,
        };
        console.log("newQuantity", newQuantity);
        await addDoc(collection(db, `users/${userId}/quantity`), quantityData);
        console.log("Document added successfully to the 'quantity' collection!");
      } catch (error) {
        console.log("Error adding document to 'quantity' collection:", error);
      }
    }
    handleQuantityChange(newQuantity)
  };

  

  const onchangeQue = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1 && newQuantity <= 10) {
   
      updateQuantity(newQuantity);
     
     
    }
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
