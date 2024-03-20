/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../asset/style/CustomCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../store/action/AuthAction";
import { Blnkheart, Eyes, Heart } from "../asset/images/svg";
import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const CustomCard = (props) => {
  const { item, index, listOfProduct } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToCart, WishList } = useSelector((state) => state.Auth);
  const [cartToad, setCartToad] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  const [quantityCart, setQuantityCart] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const [AddToWish, setAddToWish] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState();
  const product = location?.state;

  useEffect(() => {
    setCartToad(addToCart);
  }, [addToCart]);

  useEffect(() => {
    setAddToWish(WishList);
  }, [WishList]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const fetchCartItem = async () => {
    try {
      if (!isLoggedIn) return;
      const userId = auth.currentUser.uid;
        
      const querySnapshot = await getDocs(collection(db, userId));
      const cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push(doc.data());
      });
      setCartToad(cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  useEffect(() => {
    fetchCartItem();
  }, []);
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
  const addToCartbtn = async (e) => {
    e.stopPropagation();
    try {
      if (!isLoggedIn) {
        return;
      }

      const userId = auth.currentUser.uid;

      await addDoc(collection(db, `users/${userId}/addtocart`), {
        itemId: item.id,
        quantity: 1,
      });
      fetchCartItem();
      alert("item add to cart ");
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
    dispatch(AuthAction.upDateCart(item.id));
    setCartToad([...addToCart, item.id]);
  };
  const addToWishList = async (e) => {
    e.stopPropagation();
    try {
      if (!isLoggedIn) {
        return;
      }
      
      const userId = auth.currentUser.uid;
      
      // Add the item to the user's wishlist collection
      await addDoc(collection(db, `users/${userId}/wishlist`), {
        itemId: item.id,
      });
      fetchCartItem();
      alert("item add to wishlist");
  
      dispatch(AuthAction.upDateWishList(item.id));
      setAddToWish([...AddToWish, item.id]);
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  };
  
  const removeToCart = async (id, e) => {
    e.stopPropagation();

    const object = addToCart.filter((obj) => obj !== id.id);
    dispatch(AuthAction.removeColor(id.id));
    dispatch(AuthAction.removeData(id.id));
    dispatch(AuthAction.removeSize(id.id));
    dispatch(AuthAction.removeQuantity(id.id));
    dispatch(AuthAction.removeToCart(object));
    setCartToad(object);
    setSelectedColor(object);
    setSelectedSize(object);
    setQuantityCart(object);
  };

  const removeToWish = async (e, id) => {
    e.stopPropagation();
    const object = WishList.filter((obj) => obj !== id.id);
    dispatch(AuthAction.removeToWish(object));
    setAddToWish(object);
   
  };

  return (
    <div className="d-flex  col-3 " key={index}>
      <div
        className=" position-relative d-flex flex-column card_main"
        onClick={() => onclickMyOrder(item)}
      >
        <div
          className="images  position-absolute d-flex flex-column align-items-center justify-content-center"
          style={{ right: "25px", background: "transparent" }}
        >
          {" "}
          {isLoggedIn &&
            (!wishListed ? (
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
            ))}
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
          {isLoggedIn &&
            (!cartAdded ? (
              <button
                className="btn btn-dark "
                onClick={(e) => addToCartbtn(e, item)}
              >
                Add To Cart
              </button>
            ) : (
              <button
                className="btn btn-dark "
                onClick={(e) => removeToCart(item, e)}
              >
                Remove To Cart
              </button>
            ))}
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

//  how to wishlist data can store and remove data from firestore data base 
