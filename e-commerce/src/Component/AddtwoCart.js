import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";

const AddtwoCart = ({ item, onhandalprice, index }) => {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [quantityCart, setQuantityCart] = useState(item?.price);
  const { quantity } = useSelector((state) => state.Auth);
  console.log("quantity", quantity);
  
 
  useEffect(() => {
    setValue(item.quantityCart);
    const addQue = item?.price * value;
    setQuantityCart(addQue);
  }, []);
  useEffect(() => {
    setQuantityCart(quantityCart);
  }, [quantityCart]);

  
  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(
      AuthAction.upOnChangeQuantity({ id: item.id, quantity: newQuantity })
    );
    const addQue = price * newQuantity;
    setQuantityCart(addQue);
    onhandalprice(newQuantity);
  };

  return (
    <tr className="cartable">
      <td className="cartages">
        <div className="quantity">
          <img src={item?.image} height="50" width="50" alt="" />
        </div>
        {item?.title}
      </td>
      <td>{item?.price}</td>
      <td>
        <input
          type="number"
          value={item.quantityCart}
          min="1"
          max="10"
          onChange={(e) => onchangeQue(e, item?.price)}
        />
      </td>
      <td>{quantityCart}</td>
    </tr>
  );
};

export default AddtwoCart;
