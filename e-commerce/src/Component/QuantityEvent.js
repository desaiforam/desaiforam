import React, { useEffect, useState } from "react";
import { AuthAction } from '../store/action/AuthAction'
import { useDispatch, useSelector } from "react-redux";


const QuantityEvent = ({ value }) => {
  console.log('value', value);
  const [quantity, setQuantity] = useState(1);

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
    setQuantity(quantity)
  }, [quantity])







  return (
    <div className="quantitycounter d-flex " >
      <button className="quantity" onClick={decreaseQuantity}>-</button>

      <div className="qunatityvalue">{value.proquantity}</div>
      <button className="quantity" onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantityEvent;





