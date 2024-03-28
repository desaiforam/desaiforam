/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";
import { auth } from "../config";

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
    saveQuantityLocally(newQuantity);
  };

  const saveQuantityLocally = (quantity) => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      localStorage.setItem(
        `quantity_${userId}`,
        JSON.stringify({ id: id, quantity: quantity })
      );
    }
  };
  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const savedQuantity = localStorage.getItem(`quantity_${userId}`);
      if (savedQuantity) {
        const parsedQuantity = JSON.parse(savedQuantity);
        if (parsedQuantity.id === id) {
          setQuantityCart(parsedQuantity.quantity);
        }
      }
    }
  }, [id, auth.currentUser?.uid]);

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
// if quantity cart is !null
