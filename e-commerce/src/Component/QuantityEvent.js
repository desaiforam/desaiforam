import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";

const QuantityCounter = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { addCartItem } = useSelector((state) => state.Auth);
  const { id, item, quantityCart, setQuantityCart } = props;

  const decreaseQuantity = () => {
    if (quantityCart > 1) {
      const newQuantity = quantityCart - 1;
      setQuantityCart(newQuantity);
      dispatch(AuthAction.updateQuantity({id: id, quantity: newQuantity}));
    }
  };

  const increaseQuantity = () => {
    if (quantityCart < 10) {
      const newQuantity = quantityCart + 1;
      setQuantityCart(newQuantity);
      dispatch(AuthAction.updateQuantity({id: id, quantity: newQuantity}));
    }
  };
  
  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(AuthAction.updateQuantity({ id: item.id, quantity: newQuantity }));
    setQuantityCart(newQuantity);
  };
  
  const quantityItem = addCartItem.find(
    (quantityCart) => quantityCart.id === location.state.id
  );
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


//increaseQuantity and decreaseQuantity a quantity value  after a value can store a redux list  then it will also increaseQuantity and decreaseQuantity