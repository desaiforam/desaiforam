/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/header";
import Footer from "../../Component/Footer";
import { useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../store/action/AuthAction";
import SizeSelector from "../../Component/SizeSelector";
import QuantityEvent from "../../Component/QuantityEvent";
import { Blnkheart, Heart, Refresh, Truck } from "../../asset/images/svg";
import ColorSelector from "../../Component/ColorSelector";

const ProductDetails = ({ id, posts }) => {
  const location = useLocation();

  const { WishList, } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  

  const [AddToWish, setAddToWish] = useState([]);

  const product = location?.state;

  useEffect(() => {
    setAddToWish(WishList);
  }, [WishList]);

  const wishListed =
    WishList.length > 0
      ? WishList.find((itemed) => {
          return itemed === location.state.id;
        })
      : false;

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

                <ColorSelector id={product.id} />

                <div className="size-chart mt-4" >
                  Size :
                  <div className="size d-flex">
                    <SizeSelector id={product.id} />
                  </div>
                </div>
              </>
              <div className="buyNow mt-4">
                <div className="counter " style={{ border: "0" }}>
                  <QuantityEvent id={product.id} />
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
                    {/* <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clippath="url(#clip0_261_4843)">
                        <path
                          d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                          stroke="black"
                          strokewidth="{2}"
                          strokelinecap="round"
                          strokelinejoin="round"
                        />
                        <path
                          d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                          stroke="black"
                          strokewidth="{2}"
                          strokelinecap="round"
                          strokelinejoin="round"
                        />
                        <path
                          d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                          stroke="black"
                          strokewidth="{2}"
                          strokelinecap="round"
                          strokelinejoin="round"
                        />
                        <path
                          d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                          stroke="black"
                          strokewidth="{2}"
                          strokelinecap="round"
                          strokelinejoin="round"
                        />
                        <path
                          d="M5 11.8182H11.6667"
                          stroke="black"
                          strokewidth="{2}"
                          strokelinecap="round"
                          strokelinejoin="round"
                        />
                        <path
                          d="M1.81836 15.4545H8.48503"
                          stroke="black"
                          strokewidth="{2}"
                          strokelinecap="round"
                          strokelinejoin="round"
                        />
                        <path
                          d="M5 19.0909H11.6667"
                          stroke="black"
                          strokewidth="{2}"
                          strokelinecap="round"
                          strokelinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_261_4843">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> */}
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
                    {/* <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_261_4865)">
                        <path
                          d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_261_4865">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> */}
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
      <div className="container CustomCard p-1 gap-5 mt-2">
        
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

