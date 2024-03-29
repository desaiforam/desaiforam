/* eslint-disable no-unused-vars */
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
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config";
import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
import ReactLoader from "react-loader";

const ProductDetails = (props) => {
  const location = useLocation();

  const { addToCart, WishList } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  const [quantityCart, setQuantityCart] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const [AddToWish, setAddToWish] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  const product = location?.state;
  const [CartToad, setCartToad] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setAddToWish(WishList);
  }, [WishList]);
  useEffect(() => {
    setCartToad(addToCart);
  }, [addToCart]);
  setTimeout(() => {
    setIsLoading(false);
  }, 500);
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
      const querySnapshot = await getDocs(db, userId);
      const cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push(doc.data());
      }); 
      setCartToad(cartItems);
      const cartItem = [];
      querySnapshot.forEach((doc) => {
        cartItem.push(doc.data());
      });
      setCartToad(cartItem);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  useEffect(() => {
    fetchCartItem();
  }, []);
  const addToCartbtn = async (e) => {
    try {
      if (!isLoggedIn) {
        return;
      }
      setIsLoading(true);
      const userId = auth.currentUser.uid;

      await addDoc(collection(db, `users/${userId}/addtocart`), {
        itemId: location.state.id,
        quantity: 1,
        color: "",
        size: "",
      });
      fetchCartItem();

      dispatch(AuthAction.upDateCart(location.state.id));
      setCartToad([...addToCart, location.state.id]);
      const updatedCart = [...addToCart, location.state.id];
      setCartToad(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const removeToCart = async () => {
    setIsLoading(true);
    const userId = auth.currentUser.uid;
    try {
      const wishRef = collection(db, `users/${userId}/addtocart`);
      const snapshot = await getDocs(wishRef);
      let docToDelete;
      snapshot.forEach((doc) => {
        if (doc.data().itemId === location.id) {
          docToDelete = doc.ref;
        }
      });

      if (docToDelete) {
        await deleteDoc(docToDelete);
        console.log("addToCart item removed from Firestore");
      } else {
        console.error("addToCart item not found in Firestore");
      }
    } catch (error) {
      console.error("Error removing addToCart item from Firestore:", error);
    }
    const object = addToCart.filter((obj) => obj !== location.state.id);

    dispatch(AuthAction.removeColor(location.state.id));
    dispatch(AuthAction.removeData(location.state.id));
    dispatch(AuthAction.removeSize(location.state.id));
    dispatch(AuthAction.removeQuantity(location.state.id));
    dispatch(AuthAction.removeToCart(object));

    setCartToad(object);
    setSelectedColor(object);
    setSelectedSize(object);
    setQuantityCart(object);
  };
  const addToWishList = async () => {
    setIsLoading(true);
    try {
      if (!isLoggedIn) {
        return;
      }
      const userId = auth.currentUser.uid;
      await addDoc(collection(db, `users/${userId}/wishlist`), {
        itemId: location.state.id,
      });
      fetchCartItem();
      alert("item add to wishlist");

      dispatch(AuthAction.upDateWishList(location.state.id));
      setAddToWish([...AddToWish, location.state.id]);
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  };

  const removeToWish = async () => {
    setIsLoading(true);
    const userId = auth.currentUser.uid;
    try {
      const wishRef = collection(db, `users/${userId}/wishlist`);
      const snapshot = await getDocs(wishRef);

      let docToDelete;
      snapshot.forEach((doc) => {
        if (doc.data().itemId === location.state.id) {
          docToDelete = doc.ref;
        }
      });

      if (docToDelete) {
        await deleteDoc(docToDelete);
        console.log("Wishlist item removed from Firestore");
      } else {
        console.error("Wishlist item not found in Firestore");
      }
    } catch (error) {
      console.error("Error removing wishlist item from Firestore:", error);
    }
    const object = WishList.filter((obj) => obj !== location.state.id);
    dispatch(AuthAction.removeToWish(object));
    setAddToWish(object);
  };
  // 
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
              <div className="set-of-images mt-5 g-3">
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
              <div className="main-havit">
                <img src={product.image} alt="" height="50%" width="90%" />
              </div>
            </div>
            <div className="col-5 gap-5">
              <>
                <div className="havit-gamed">
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
                  <div className="havit mt-3">
                    <span>${product.price} </span>
                    <p className="sensitive">{product.description}</p>
                  </div>
                  <hr className="w-100"></hr>
                </div>

                <ColorSelector
                  id={product.id}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />

                <div className="size-chart mt-4">
                  Size :
                  <div className="size d-flex">
                    <SizeSelector
                      id={product.id}
                      selectedSize={selectedSize}
                      setSelectedSize={setSelectedSize}
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
                  {isLoggedIn &&
                    (!cartAdded ? (
                      <button
                        className="btn btn-now"
                        style={{ backgroundColor: "orangeade" }}
                        onClick={() => addToCartbtn(location.state.id)}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <ReactLoader type="ball-scale-multiple" />
                        ) : (
                          " Buy Now"
                        )}
                      </button>
                    ) : (
                      <button
                        className="btn btn-now "
                        style={{ backgroundColor: "orangeade" }}
                        onClick={(e) => removeToCart(location.state.id)}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <ReactLoader type="ball-scale-multiple" />
                        ) : (
                          "Remove To Cart"
                        )}
                      </button>
                    ))}
                </div>
                {isLoggedIn && (
                  <div className="Wishart">
                    {!wishListed ? (
                      <button
                        style={{ border: "none", background: "transparent" }}
                        onClick={(e) => addToWishList(e, location.state.id)}
                      >
                        {isLoading ? (
                          <ReactLoader type="ball-scale-multiple" />
                        ) : (
                          <Blnkheart />
                        )}
                      </button>
                    ) : (
                      <button
                        style={{ border: "none", background: "transparent" }}
                        onClick={(e) => removeToWish(e, location.state.id)}
                      >
                        {isLoading ? (
                          <ReactLoader type="ball-scale-multiple" />
                        ) : (
                          <Heart />
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="delivery mt-5">
                <div className="free-delivery">
                  <div className="svg-logo">
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
                <div className="free-delivery">
                  <div className="svg-logo">
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

// get the value can also seen by local store
// get the value can set for the Logged In user
