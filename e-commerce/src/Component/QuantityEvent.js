// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setQuantity } from "../store/action/quantityActions";

// const QuantityEvent = ({ item, index }) => {
//   const dispatch = useDispatch();
//   const quantity = useSelector(state => state.QUANTITYREDUCER.quantity);

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       dispatch(setQuantity(quantity - 1));
//     }
//   };

//   const increaseQuantity = () => {
//     if (quantity < 10) {
//       dispatch(setQuantity(quantity + 1));
      
//     }
//   };

//   return (
//     <div className="quantitycounter d-flex ">
//       <button className="quantity" onClick={decreaseQuantity}>
//         -
//       </button>
//       <div className="qunatityvalue">{quantity}</div>
//       <button className="quantity" onClick={increaseQuantity}>
//         +
//       </button>
//     </div>
//   );
// };

// export default QuantityEvent;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setQuantity } from "../store/action/quantityActions";

// const QuantityCounter = ({ item }) => {
//   const dispatch = useDispatch();
//   const quantity = useSelector((state) => state.QUANTITYREDUCER.quantity);

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       dispatch(setQuantity(quantity - 1));
//     }
//   };

//   const increaseQuantity = () => {
//     if (quantity < 10) {
//       dispatch(setQuantity(quantity + 1));
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value >= 1 && value <= 10) {
//       dispatch(setQuantity(value));
//     }
//   };

//   return (
//     <div className="quantitycounter d-flex">
//       <button className="quantity" onClick={decreaseQuantity}>
//         -
//       </button>
//       <div
//         type="number"
//         className="qunatityvalue"
//         value={quantity}
//         onChange={handleInputChange}
       
//       >{quantity}</div>
//       <button className="quantity" onClick={increaseQuantity}>
//         +
//       </button>
//     </div>
//   );
// };

// export default QuantityCounter;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../store/action/quantityActions";

const QuantityCounter = ({ item }) => {
  const dispatch = useDispatch();
  
  const quantity = useSelector((state) => state.QUANTITYREDUCER);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(setQuantity(quantity - 1));
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      dispatch(setQuantity(quantity + 1));
    }
  };

  return (
    <div className="quantitycounter d-flex">
      <button className="quantity" onClick={decreaseQuantity}>
        -
      </button>
      <div className="qunatityvalue">{quantity}</div>
      <button className="quantity" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;





































// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setQuantity } from "../store/actions/quantityActions";

// const QuantityCounter = ({ item }) => {
//   const dispatch = useDispatch();
//   const quantity = useSelector((state) => state.quantityResucer.quantity);

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       dispatch(setQuantity(quantity - 1));
//     }
//   };

//   const increaseQuantity = () => {
//     if (quantity < 10) {
//       dispatch(setQuantity(quantity + 1));
//     }
//   };

//   return (
//     <div className="quantity-counter">
//       <button className="quantity-counter-btn" onClick={decreaseQuantity}>
//         -
//       </button>
//       <span className="quantity-counter-value">{quantity}</span>
//       <button className="quantity-counter-btn" onClick={increaseQuantity}>
//         +
//       </button>
//     </div>
//   );
// };

// export default QuantityCounter;




