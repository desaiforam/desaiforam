import React, { useState } from "react";

const QuantityEvent = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity <10){
        setQuantity(quantity + 1);
    }
  };

  return (
    <div className="quantitycounter d-flex " >
      <button className="quantity" style={{}} onClick={decreaseQuantity}>-</button>
      <div className="qunatityvalue">{quantity}</div>
      <button className="quantity" onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantityEvent;





