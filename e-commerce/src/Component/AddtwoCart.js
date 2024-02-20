import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { setQuantity } from "../store/action/quantityActions";
import { useLocation } from "react-router-dom";

const truncate = (str, max, len) => {
  return str.length > max ? str.substring(0, len) + "..." : str;
};

const AddtwoCart = ({ item, onhandalprice, index }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [Value, setValue] = useState()
  const [quantity, setQuantity] = useState([item?.price]);
  useEffect(() => {
    setValue(item.quantity);
    const addQue = item?.price * Value;
    setQuantity(addQue);
  }, []);

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

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
  quantity: state.quantityReducer.quantity
});

export default connect(mapStateToProps)(AddtwoCart);
