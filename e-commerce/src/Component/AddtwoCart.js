import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";

const AddtwoCart = ({ item, onhandalprice }) => {
  const dispatch = useDispatch();
  const [quantityCart, setQuantityCart] = useState(1);
  const { quantity } = useSelector((state) => state.Auth);
  
  useEffect(() => {
    
    setQuantityCart(quantityCart);
  }, [quantityCart]);
  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value );
    dispatch(AuthAction.upDateQuantityCart({ id: item.id, quantity:newQuantity}));
    setQuantityCart(newQuantity);
    onhandalprice(newQuantity);
  };

  return (
    <tr className="cartable">
      <td className="cartages">
        <div className="quantity">
          <img src={item.image} height="50" width="50" alt="" />
        </div>
        {item.title}
      </td>
      <td>{item.price}</td>
      <td>
        <input
          type="number"
          value={quantityCart}
          min="1"
          max="10"
          onChange={(e) => onchangeQue(e, item.price)}
        />
      </td>
      <td>{item.price * item.quantity}</td>
    </tr>
  );
};

export default AddtwoCart;
//get the quantity value can redux stor
//get the redux store color using id fetch and store a redux list 
//get the redux store size using id fetch and store a redux list 