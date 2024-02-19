import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";

const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
      };

const AddtwoCart = ({ item, onhandalprice, index }) => {
  // console.log('item', item);
  const [value, setValue] = useState(1);
  const [quantity, setQuantity] = useState([item?.price]);
  const dispatch = useDispatch();
  useEffect(() => {
    setValue(item.profundity);
    const addQue = item?.price * value;
    setQuantity(addQue);
  }, []);
//   const {quantity} = useSelector([state => state.quantity,item?.price])
  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);
  // console.log('quantity', quantity);

  // const { quntityfind, } = useSelector((state) => state.Auth)
  // console.log('quntityfind', quntityfind);

  const onchangeQue = (e, price) => {
    setValue(e.target.value);
    dispatch(
      AuthAction.UpDatQuantityCart({ index: index, quantity: e.target.value })
    );
    const addQue = price * e.target.value;
    setQuantity(addQue);
    onhandalprice(e.target.value);
  };

  return (
    <tr className="cartable">
      <td className="cartages">
        <div className="quantity">
          <img src={item?.image} height="50" width="50" alt="" />
        </div>
        {truncate(item?.title, 5, 30)}
      </td>
      <td>{item?.price}</td>
      {/* <td>
                {Number(item?.price).toFixed(2)}
            </td> */}
      <td>
        <input
          type="number"
          value={item.profundity}
          min="1"
          max="10"
          onChange={(e) => onchangeQue(e, item?.price)}
        />
      </td>
      <td>{quantity}</td>
    </tr>
  );
};

export default AddtwoCart;

// src/components/AddtwoCart.js
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { AuthAction } from "../store/action/AuthAction";

// const AddtwoCart = ({ item, onhandalprice, index }) => {
//   const [quantity, setQuantity] = useState(item?.price);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setQuantity(item.profundity);
//   }, [item.profundity]);

//   const onchangeQue = (e, price) => {
//     const newQuantity = e.target.value;
//     setQuantity(newQuantity);
//     dispatch(
//       AuthAction.UpDatQuantityCart({ index: index, quantity: newQuantity })
//     );
//     onhandalprice(newQuantity);
//   };
//   const truncate = (str, max, len) => {
//     return str.length > max ? str.substring(0, len) + "..." : str;
//   };

//   return (
//     <tr className="cartable">
//       <td className="cartages">
//         <div className="quantity">
//           <img src={item?.image} height="50" width="50" alt="" />
//         </div>
//         {truncate(item?.title, 5, 30)}
//       </td>
//       <td>{item?.price}</td>
//       <td>
//         <input
//           type="number"
//           value={quantity}
//           min="1"
//           max="10"
//           onChange={(e) => onchangeQue(e, item?.price)}
//         />
//       </td>
//       <td>{quantity}</td>
//     </tr>
//   );
// };

// export default AddtwoCart;
