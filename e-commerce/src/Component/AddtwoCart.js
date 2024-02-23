import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { setQuantity } from "../store/action/quantityActions";
import { useLocation } from "react-router-dom";

const AddtwoCart = ({ item, onhandalprice, index }) => {
  console.log("item", item);

  // const location = useLocation();

  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [quantity, setQuantity] = useState(item?.price);

  useEffect(() => {
    setValue(item.quantity);
    const addQue = item?.price * value;
    setQuantity(addQue);
  }, []);

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  const onchangeQue = (e, price) => {
    setValue(e.target.value);
    dispatch(
      AuthAction.upDateQuantityCart({ index: index, quantity: e.target.value })
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
        {item?.title}
      </td>
      <td>{item?.price}</td>
      <td>
        <input
          type="number"
          value={item.quantity}
          min="1"
          max="10"
          onChange={(e) => onchangeQue(e, item?.price)}
        />
      </td>
      <td>{quantity}</td>
    </tr>
  );
};
const mapStateToProps = (state) => ({
  quantity: state.quantityReducer.quantity,
});
// export const setQuantity = createAction("SET_QUANTITY");
export default AddtwoCart;
//manage a quantity of  product list  to store a redux   list

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { AuthAction } from "../store/action/AuthAction";

// const AddtwoCart = ({ item, onhandalprice, index }) => {
//   const dispatch = useDispatch();
//   const [quantity, setQuantity] = useState(item?.quantity);

//   const onchangeQue = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     setQuantity(newQuantity);

//     dispatch(AuthAction.upDateQuantityCart({ index: index, quantity: quantity }));

//     onhandalprice(quantity);
//   };

//   return (
//     <tr className="cartable">
//       <td className="cartages">
//         <div className="quantity">
//           <img src={item?.image} height="50" width="50" alt="" />
//         </div>
//         {item?.title}
//       </td>
//       <td>{item?.price}</td>
//       <td>
//         <input
//           type="number"
//           value={quantity}
//           min="1"
//           max="10"
//           onChange={onchangeQue}
//         />
//       </td>
//       <td>{item?.price * quantity}</td>
//     </tr>
//   );
// };

// export default AddtwoCart;

//Call and store the quantity event of the product item when it is stored in Redux.
