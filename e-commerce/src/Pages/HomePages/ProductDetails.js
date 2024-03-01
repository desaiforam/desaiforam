/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/header";
import Footer from "../../Component/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../store/action/AuthAction";
import SizeSelector from "../../Component/SizeSelector";
import QuantityEvent from "../../Component/QuantityEvent";
import { Blnkheart, Heart, Refresh, Truck } from "../../asset/images/svg";
import ColorSelector from "../../Component/ColorSelector";

const ProductDetails = (props) => {
  const location = useLocation();

  const { addToCart, WishList, removeCart } = useSelector(
    (state) => state.Auth
  );
  const { id, index } = props;
  const dispatch = useDispatch();
  const [quantityCart, setQuantityCart] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const [AddToWish, setAddToWish] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  const product = location?.state;
  const [CartToad, setCartToad] = useState([]);

  useEffect(() => {
    setAddToWish(WishList);
  }, [WishList]);
  useEffect(() => {
    setCartToad(addToCart);
  }, [addToCart]);
  const cartAdded =
    addToCart.length > 0
      ? addToCart.find((itemed) => {
          return itemed === location.state.id;
        })
      : false;

  const wishListed =
    WishList.length > 0
      ? WishList.find((itemed) => {
          return itemed === location.state.id;
        })
      : false;
  const addToCartbtn = () => {
    dispatch(AuthAction.upDateCart(location.state.id));
    setCartToad([...addToCart, location.state.id]);
  };
  const removeToCart = () => {
    const [updatedCart] = addToCart.filter(
      (itemId) => itemId !== location.state.id
    );
    console.log("updatedCart", updatedCart);
    dispatch(AuthAction.removeColor(updatedCart));
    dispatch(AuthAction.removeData(updatedCart))
    dispatch(AuthAction.removeToCart(updatedCart));
    dispatch(AuthAction.removeSize(updatedCart))
    dispatch(AuthAction.removeQuantity(updatedCart))
    setCartToad(updatedCart);
    setSelectedColor(updatedCart);
    setSelectedSize(updatedCart);
    setQuantityCart(updatedCart);
  };
  const addToWishList = () => {
    dispatch(AuthAction.upDateWishList(location.state.id));
    setAddToWish([...AddToWish, location.state.id]);
  };

  const removeToWish = () => {
    const object = WishList.filter((obj) => obj !== location.state.id);
    dispatch(AuthAction.removeToWish(object));
    setAddToWish(object);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <hr w-100></hr>
      <div className="container">
        <div className="productcart">
          <p className="accountHavit gap-3">
            <span className=" d-flex gap-2">
              <span>Account</span>
              <span>/</span>
            </span>
            <span className=" d-flex gap-2">
              <span>Gaming</span>/
            </span>{" "}
            {product.title}{" "}
          </p>
          <div className="row">
            <div className="col-7  d-flex g-2">
              <div className="setofimages mt-5 g-3">
                <img
                  className="mb-5"
                  src={product.image}
                  height="90px"
                  width="90px"
                  alt=""
                />
                <img
                  className="mb-5"
                  src={product.image}
                  height="90px"
                  width="90px"
                  alt=""
                />
                <img
                  className="mb-5"
                  src={product.image}
                  height="90px"
                  width="90px"
                  alt=""
                />
                <img
                  className="mb-5"
                  src={product.image}
                  height="90px"
                  width="90px"
                  alt=""
                />
              </div>
              <div className="mainhavic">
                <img src={product.image} alt="" height="50%" width="100%" />
              </div>
            </div>
            <div className="col-5 gap-5">
              <>
                <div className="havicgamepad">
                  <div className="stock d-flex flex-column  align-items-baseline">
                    <span className="d-flex align-items-baseline">
                      {product.title}
                    </span>
                    <div className="value3 d-flex flex-row justify-content-center align-items-baseline mt-3 gap-2">
                      <div
                        className="d-flex  flex-row gap-1"
                        style={{ color: "orange" }}
                      >
                        <link
                          rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                        />

                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <h5 style={{ font: "small-caption" }}>
                        ({product?.rating?.count})
                      </h5>
                      <div className="line">|</div>
                      <span style={{ color: "#00FF66", fontSize: "small" }}>
                        In Stock
                      </span>
                    </div>
                  </div>
                  <div className="havice mt-3">
                    <span>${product.price} </span>
                    <p className="sensitive">{product.description}</p>
                  </div>
                  <hr className="w-100"></hr>
                </div>

                <ColorSelector
                  id={product.id}
                  selectedColor={selectedColor}
                  setSelectedColor={selectedColor}
                />

                <div className="size-chart mt-4">
                  Size :
                  <div className="size d-flex">
                    <SizeSelector
                      id={product.id}
                      setSelectedSize={setSelectedSize}
                      selectedSize={selectedSize}
                    />
                  </div>
                </div>
              </>
              <div className="buyNow mt-4">
                <div className="counter " style={{ border: "0" }}>
                  <QuantityEvent
                    id={product.id}
                    quantityCart={quantityCart}
                    setQuantityCart={setQuantityCart}
                  />
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
                <div className="Wishart">
                  {!wishListed ? (
                    <button
                      style={{ border: "none", background: "transparent" }}
                      onClick={(e) => addToWishList(e, location.state.id)}
                    >
                      <Blnkheart />
                    </button>
                  ) : (
                    <button
                      style={{ border: "none", background: "transparent" }}
                      onClick={(e) => removeToWish(e, location.state.id)}
                    >
                      <Heart />
                    </button>
                  )}
                </div>
              </div>

              <div className="delivery mt-5">
                <div className="freedelivery">
                  <div className="svglogo">
                    <Truck />
                  </div>
                  <div className="postal">
                    <span>Free Delivery</span>
                    <a href="/" style={{ color: "black" }}>
                      Enter your postal code for Delivery Availability
                    </a>
                  </div>
                </div>
                <hr className="opacity: 40 m-0"></hr>
                <div className="freedelivery">
                  <div className="svglogo">
                    <Refresh />
                  </div>
                  <div className="postal">
                    <span>Return Delivery</span>
                    <span>
                      Free 30 Days Delivery Returns.
                      <a href="/" style={{ color: "black" }}>
                        Details
                      </a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container CustomCard p-1 gap-5 mt-2"></div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

//removeToCart to removeColor from the  and redux list
