import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";

const QuantityCounter = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { addCartItem } = useSelector((state) => state.Auth);
  const { id, item,} = props;

  const quantityItem = addCartItem.find(
    (item) => item.id === location.state.id
  );
  const quantityCart = quantityItem ? quantityItem.quantity :1; 

  const decreaseQuantity = () => {
    if (quantityCart > 1) {
      const newQuantity = quantityCart - 1;
      dispatch(AuthAction.updateQuantity({ id: id, quantity: newQuantity }))
    }
   
  };

  const increaseQuantity = () => {
    if (quantityCart < 10) {
      const newQuantity = quantityCart + 1;
      dispatch( AuthAction.updateQuantity({ id: id, quantity: newQuantity}));
    }
  };

  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value);
    if( newQuantity>= 1 && newQuantity <= 10){
      dispatch(AuthAction.updateQuantity({ id: item.id, quantity: newQuantity }));
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
