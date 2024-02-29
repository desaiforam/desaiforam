import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";


const AddtwoCart = ({ item, onhandalprice, index }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [quantityCart, setQuantityCart] = useState(item?.price);
  const { quantity } = useSelector((state) => state.Auth);
  console.log("quantity", quantity);

  useEffect(() => {
    setValue(item.quantityCart);
    const addQue = item?.price * value;
    setQuantityCart(addQue);
  }, [item?.price, item.quantityCart, value]);
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
  const quantityItem = quantity.find(
    (quantityCart) => quantityCart.id === item.id
  );
  console.log("quantityItem", quantityItem);

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
          value={quantityItem.quantity}
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
