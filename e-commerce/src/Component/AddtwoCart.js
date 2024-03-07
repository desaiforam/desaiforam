/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useNavigate } from "react-router-dom";

const AddtwoCart = ({ item, onhandalprice,id, index}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [quantityCart, setQuantityCart] = useState(item?.price);
  const { quantity,addToCart,listOfProduct,addCartItem } = useSelector((state) => state.Auth);

  useEffect(() => {
    if(item){
      
      setQuantityCart(item.quantity);
    }
  }, [item]);

  const cartAdded =
    addToCart.length > 0
      ? addToCart.find((itemed) =>  itemed === item?.id)
      : false;


  const onclickMyOrder = (item) => {
    navigate("/product-details", {
      state: { ...item, cartAdded: !!cartAdded, listOfProduct },
    });
  };
  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(
      AuthAction.updateQuantity({ id: item.id, quantity: newQuantity})
    );

    onhandalprice(newQuantity);
    const addQue = price * newQuantity;
    setQuantityCart(addQue);
  };

  const quantityItem = addCartItem.find(
    (quantityCart) => quantityCart.id === item?.id);
 
  return (
    <tr className="cartable">
      <td className="cartages" onClick={() => onclickMyOrder(item)}>
        <div className="quantity">
          <img src={item?.image} height="50" width="50" alt="" />
        </div>
        {item?.title}
      </td>
      <td>{item?.price}</td>
      <td>
        <input
          type="number"
          value={quantityItem ? quantityItem.quantity : 1}
          min="1"
          max="10"
          onChange={(e) =>onchangeQue(e, item?.price)}
        />
      </td>
      <td>{quantityItem ? item?.price * quantityItem.quantity : item?.price}</td>
    </tr>
  );
};

export default AddtwoCart;

// Cannot read properties of undefined (reading 'id')
//     at AddtwoCart.js:20:1
//solve a error 