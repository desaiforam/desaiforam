
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import AddtwoCart from "./AddtwoCart";
import { useNavigate } from "react-router-dom";

const Useradd = () => {
  const navigate = useNavigate();
  const { addToCart, listOfProduct, addCartItem } = useSelector((state) => state.Auth);

  const [subTotal, setSubTotal] = useState([]);
  const [total, setTotal] = useState(0);

  const proceedToCheckout = () => {
    navigate("/Cart-Details", { state: subTotal });
  };

  useEffect(() => {
    const updatedSubTotal = addToCart.map((id) => {
      const product = listOfProduct.find((item) => item.id === id);
      const quantity = addCartItem?.find((item) => item.id === product.id)?.quantity || 1;
      const price = product.price * quantity;
      return { id: product.id, price: price };
    });
    const totalData = updatedSubTotal.reduce((accumulator, item) => accumulator + item.price, 0);
    setTotal(totalData);
    setSubTotal(updatedSubTotal);
  }, [addToCart, listOfProduct, addCartItem]);

  const onhandalprice = (index, quantity, price) => {
    const updatedSubTotal = [...subTotal];
    updatedSubTotal[index].price = price * quantity;
    setSubTotal(updatedSubTotal);
    const totalData = updatedSubTotal.reduce((accumulator, item) => accumulator + item.price, 0);
    setTotal(totalData);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container d-flex flex-column ">
        <div className="homers">Home / Cart</div>
        <div className="tablet">
          <div className="cartable">
            <div className="cartages">Product </div>
            <div>Price</div>
            <div>Quantity</div>
            <div>subTotal</div>
          </div>
          {addToCart.map((id, index) => {
            const item = listOfProduct.find((product) => product.id === id);
            return (
              <AddtwoCart
                key={index}
                item={item}
                index={index}
                onhandalprice={(quantity) => onhandalprice(index, quantity, item.price)}
              />
            );
          })}
        </div>
        <div className="btn btngroup d-flex">
          <button>Return To Shop </button>
          <button>Update Cart</button>
        </div>
        <div className="applycoupon d-flex flex-row justify-content-between">
          <div className="codecoupon ">
            <input
              className="inputted"
              type="text"
              name="Coupon Code"
              placeholder="Coupon Code"
            />
            <button className="coupon">Apply Coupon</button>
          </div>
          <div className="carlotta d-flex flex-column ">
            <span className="total mb-3">Cart Total</span>
            <div className="pricetotal d-flex flex-row justify-content-between">
              <span>SubTotal:</span>
              {total.toFixed(2)}
            </div>
            <hr w-75 />
            <div className="pricetotal d-flex flex-row justify-content-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr></hr>
            <div className="pricetotal d-flex flex-row justify-content-between">
              <span>Total:</span>
              {total.toFixed(2)}
            </div>
            <div className="process d-flex justify-content-center">
              <div
                onClick={proceedToCheckout}
                style={{ cursor: "pointer" }}
                className="position-relative"
              >
                <button className="coupon mt-4 ">Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Useradd;
