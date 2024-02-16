import React, { useEffect, useState } from "react";
import "../asset/style/cumstcard.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { Blnkheart, Eyes, Heart } from "../asset/images/svg";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CumstCard = (props) => {
  const { item, index, posts } = props;

  const navigate = useNavigate();
  const {  advocaat, wishlist } = useSelector((state) => state.Auth);
  const [CartToad, setCartToad] = useState([]);

  const [AddToWish, setAddToWish] = useState([]);
  

  useEffect(() => {
    setCartToad(advocaat);
  }, [advocaat]);
  useEffect(() => {
    setAddToWish(wishlist);
  }, [wishlist]);
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };

  const isar =
    CartToad.length > 0
    ? CartToad.find((itemed) => {
      return itemed.id === item.id;
    })
      : false;
  const swish =
    AddToWish.length > 0
      ? AddToWish.find((itemed) => {
          return itemed.id === item.id;
        })
      : false;

  const dispatch = useDispatch();

  const onclickMyOrder = (item) => {
    navigate("/prodect-details", {
      state: { ...item, isar: !!isar, posts },
    });
  };
  const addtocartbtn = (e) => {
    dispatch(AuthAction.UpDatCart(item));
    setCartToad([...CartToad, item]);
    e.stopPropagation();
  };
  const onclickwishlistbtn = (e) => {
    dispatch(AuthAction.UpDateWishList(item));
    setAddToWish([...AddToWish, item]);
    e.stopPropagation();
  };
  const carttoremove = (id, e) => {
    dispatch(AuthAction.RemoveToCart(id));
    const object = CartToad.filter((obj) => obj.id !== id);
    setCartToad(object);
    e.stopPropagation();
  };
  const wishtoremovebtn = (e, id) => {
    dispatch(AuthAction.RemoveToWish(id));
    const object = AddToWish.filter((obj) => obj.id !== id);
    setAddToWish(object);
    e.stopPropagation();
  };

  return (
    <div className="d-flex  col-3 " key={index}>
      <div
        className="position-relative d-flex flex-column cardmain"
        onClick={() => onclickMyOrder(item)}
      >
        <div
          className="images  position-absolute d-flex flex-column align-items-center justify-content-center"
          style={{ right: "25px", background: "transparent" }}
        >
          {!swish ? (
            <button
              style={{ border: "none", background: "transparent" }}
              onClick={(e) => onclickwishlistbtn(e, item)}
            >
              <Blnkheart />
            </button>
          ) : (
            <button
              style={{ border: "none", background: "transparent" }}
              onClick={(e) => wishtoremovebtn(e, item.id)}
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
        <div className="cardcustm d-flex flex-d-block align-item-center m-5 justify-content-center">
          <div className="img">
            <img
              src={item?.image}
              style={{ height: "90%", width: "90%" }}
              alt=""
            />
          </div>
        </div>
        <div className="addto mb-3">
          {!isar && (
            <button
              className="btn btn-dark "
              onClick={(e) => addtocartbtn(e, item)}
            >
              Add To Cart
            </button>
          )}
          {isar && (
            <button
              className="btn btn-dark "
              onClick={(e) => carttoremove(item.id, e)}
            >
              Remove To Cart
            </button>
          )}
        </div>
        <div className="games">
          <div className="d-flex flex-column  align-items-start">
            <div className="havit">
              <h6>{truncate(item?.title, 5, 30)}</h6>
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

export default CumstCard;
