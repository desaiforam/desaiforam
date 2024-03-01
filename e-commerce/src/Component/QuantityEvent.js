import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";

const QuantityCounter = (props) => {



  const location = useLocation();
  const dispatch = useDispatch();
  
  const { quantity } = useSelector((state) => state.Auth);
  const {id,item ,quantityCart, setQuantityCart} = props
  const decreaseQuantity = () => {
    if (quantityCart > 1) {
      const newQuantity = quantityCart - 1;
      setQuantityCart(newQuantity);
      const quantityFind = { id: id, quantity: newQuantity };
      dispatch(AuthAction.updateQuantity(quantityFind));
    }
  };
  const increaseQuantity = () => {
    if (quantityCart < 10) {
      const newQuantity = quantityCart + 1;
      setQuantityCart(newQuantity);
      const quantityFind = { id: id, quantity: newQuantity };
      dispatch(AuthAction.updateQuantity(quantityFind));
    }
  };
  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(AuthAction.updateQuantity({ id: item.id, quantity: newQuantity }));
    setQuantityCart(newQuantity);
    const addQue = price * newQuantity;
    setQuantityCart(addQue);
    
  };
  const quantityItem = quantity.find((item) => item.id === location.state.id);
  return (
    <>
      <div className="quantitycounter d-flex">
        <button className="quantity" onClick={decreaseQuantity}>
          -
        </button>
        <div
          className="qunatityvalue"
          onChange={() => onchangeQue(item?.price)}
        >
          {quantityItem ? quantityItem.quantity : 1}
        </div>
        <button className="quantity" onClick={increaseQuantity}>
          +
        </button>
      </div>
    </>
  );
};

export default QuantityCounter;
