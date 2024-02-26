import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { useLocation } from "react-router-dom";

const QuantityCounter = ({ item }) => {
  const location = useLocation(item);
   const {  } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  const [quantityCart, setQuantityCart] = useState(1);
  const [CartToad, setCartToad] = useState([]);
  const product = location?.state;
  const { addToCart,quantity } = useSelector((state) => state.Auth);

  useEffect(() => {
    setCartToad(addToCart);
  }, [addToCart]);

  const cartAdded =
    addToCart.length > 0
      ? addToCart.find((itemed) => {
          return itemed === location.state.id;
        })
      : false;
  const addToCartbtn = () => {
    dispatch(AuthAction.upDateCart(location.state.id));
    setCartToad([...addToCart, location.state.id]);
  };
  const removeToCart = () => {
    const object = addToCart.filter((obj) => obj !== location.state.id);

    dispatch(AuthAction.removeToCart(object));
    setCartToad(object);
  };
  const decreaseQuantity = () => {
    if (quantityCart > 1) {
      const newQuantity = quantityCart - 1;
      setQuantityCart(newQuantity);
      dispatch(AuthAction.updateQuantity(newQuantity));
    }
  };
  const increaseQuantity = () => {
    if (quantityCart < 10) {
      const newQuantity = quantityCart + 1;
      setQuantityCart(newQuantity);
      dispatch(AuthAction.updateQuantity(newQuantity));
    }
  };
  const onchangeQue = (e, price) => {
    const newQuantity = parseInt(e.target.value );
    dispatch(AuthAction.upDateQuantityCart({ id: item.id, quantity:newQuantity}));
    setQuantityCart(newQuantity);
   
  };

  return (
    <>
      <div className="quantitycounter d-flex">
        <button className="quantity" onClick={decreaseQuantity}>
          -
        </button>
        <div className="qunatityvalue" onChange={() => onchangeQue( item)}>{quantityCart}
        </div>
        <button className="quantity" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <div className="buyNow">
        {!cartAdded ? (
          <button
            className="btn btn-now"
            style={{ backgroundColor: "orangeade" }}
            onClick={() => addToCartbtn(location.state.id)}
          >
            Buy Now
          </button>
        ) : (
          <button
            className="btn btn-now "
            style={{ backgroundColor: "orangeade" }}
            onClick={(e) => removeToCart(location.state.id)}
          >
            Remove To Cart
          </button>
        )}
      </div>
    </>
  );
};

export default QuantityCounter;

