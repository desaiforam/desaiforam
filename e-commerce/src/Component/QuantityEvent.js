import React, { useEffect, useState } from "react";
import { AuthAction } from '../store/action/AuthAction'
import { useDispatch } from "react-redux";

const QuantityEvent = () => {
  const [quantity, setQuantity] = useState(1);
  console.log('quantity', quantity);
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  useEffect(() => {
    dispatch(AuthAction.updateQunty(quantity))
  }, [quantity])
  return (
    <div className="quantitycounter d-flex " >
      <button className="quantity" style={{}} onClick={decreaseQuantity}>-</button>
      <div className="qunatityvalue">{quantity}</div>
      <button className="quantity" onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantityEvent;





