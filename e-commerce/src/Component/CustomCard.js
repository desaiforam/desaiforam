/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../asset/style/CustomCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { Blnkheart, Eyes, Heart } from "../asset/images/svg";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CustomCard = (props) => {
  const { item, index, listOfProduct } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToCart, WishList } = useSelector((state) => state.Auth);
  const [cartToad, setCartToad] = useState([]);


  const [AddToWish, setAddToWish] = useState([]);

  useEffect(() => {
    setCartToad(addToCart);
  }, [addToCart]);

  useEffect(() => {
    setAddToWish(WishList);
  }, [WishList]);
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };

  const cartAdded =
    addToCart.length > 0
      ? addToCart.find((itemed) => {
          return itemed === item.id;
        })
      : false;
  const wishListed =
    WishList.length > 0
      ? WishList.find((itemed) => {
          return itemed === item.id;
        })
      : false;

      const onclickMyOrder = (item) => {
        navigate("/product-details", {
          state: { ...item, cartAdded: !!cartAdded, listOfProduct },
        });
      };
  const addToCartbtn = (e) => {
    dispatch(AuthAction.upDateCart(item.id));
    setCartToad([...addToCart, item.id]);
    e.stopPropagation();
  };
  const addToWishList = (e) => {
    dispatch(AuthAction.upDateWishList(item.id));
    setAddToWish([...AddToWish, item.id]);
    e.stopPropagation();
  };
  const removeToCart = (id, e) => {
    const object = addToCart.filter((obj) => obj !== id.id);
    dispatch(AuthAction.removeToCart(object));
    setCartToad(object);
    e.stopPropagation();
  };
  const removeToWish = (e, id) => {

    const object = WishList.filter((obj) => obj !== id.id);
    
    
    dispatch(AuthAction.removeToWish(object));
    setAddToWish(object);
    e.stopPropagation();
  };

  return (
    <div className="d-flex  col-3 " key={index}>
      <div
        className="position-relative d-flex flex-column card_main"
        onClick={() => onclickMyOrder(item)}

      >
        <div
          className="images  position-absolute d-flex flex-column align-items-center justify-content-center"
          style={{ right: "25px", background: "transparent" }}
        >
          {!wishListed ? (
            <button
              style={{ border: "none", background: "transparent" }}
              onClick={(e) => addToWishList(e, item)}
            >
              <Blnkheart />
            </button>
          ) : (
            <button
              style={{ border: "none", background: "transparent" }}
              onClick={(e) => removeToWish(e, item)}
            >
              <Heart />
            </button>
          )}
          <Eyes />
        </div>
        {item.button && (
          <button
            className="btn  btn-success d-flex  position-absolute m-3"
            style={{ background: item.buttoncolor, border: "0" }}
          >
            {item.button}{" "}
          </button>
        )}
        <div className="custard d-flex flex-d-block align-item-center m-5 justify-content-center">
          <div className="img">
            <img
              src={item?.image}
              style={{ height: "90%", width: "90%" }}
              alt=""
            />
          </div>
        </div>
        <div className="add mb-3">
          {!cartAdded && (
            <button
              className="btn btn-dark "
              onClick={(e) => addToCartbtn(e, item)}
            >
              Add To Cart
            </button>
          )}
          {cartAdded && (
            <button
              className="btn btn-dark "
              onClick={(e) => removeToCart(item, e)}
            >
              Remove To Cart
            </button>
          )}
        </div>
        <div className="games">
          <div className="d-flex flex-column  align-items-start">
            <div className="havit">
              <h6>
                {/* {item.title} */}
                {truncate(item?.title, 5, 30)}
              </h6>
             
            </div>
            <div className="price">
              <span>{item.price}</span>
              <span style={{ color: "gray", position: "relative" }}>
                <span className="price2" />
                {item.pricetwo}
              </span>
            </div>
            <div className="value3 d-flex flex-row justify-content-center align-items-baseline mt-2 gap-2">
              <div className={item?.rating.rate} style={{ color: "orange" }}>
                <div>
                  {/* {item?.rating.rate} */}
                  <FaStar {...item?.rating.rate} />
                  <FaStar {...item?.rating.rate} />
                  <FaStar {...item?.rating.rate} />
                  <FaStar {...item?.rating.rate} />
                  <FaStar {...item?.rating.rate} />
                </div>
              </div>
              <h5 style={{ font: "small-caption" }}>({item?.rating?.count})</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
