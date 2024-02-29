import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";

const AddtwoCart = ({ item, onhandalprice, index}) => {
  const dispatch = useDispatch();
  
  const [quantityCart, setQuantityCart] = useState(item?.price);
  const { quantity } = useSelector((state) => state.Auth);

  useEffect(() => {
    setQuantityCart(item.quantity);
  }, [item]);

  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(
      AuthAction.updateQuantity({ id: item.id, quantity: newQuantity })
    );
    onhandalprice(newQuantity);
    const addQue = price * newQuantity;
    setQuantityCart(addQue);


  };
  const quantityItem = quantity.find(
    (quantityCart) => quantityCart.id === item.id
  );
 
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
          value={quantityItem ? quantityItem.quantity :0}
          min="1"
          max="10"
          onChange={(e) => onchangeQue(e, item?.price)}
        />
      </td>
      <td>{quantityItem ? item.price * quantityItem.quantity : 0}</td>
    </tr>
  );
};

export default AddtwoCart;

//get the   