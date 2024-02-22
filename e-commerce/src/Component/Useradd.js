import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import AddtwoCart from "./AddtwoCart";
import {  useNavigate } from "react-router-dom";
// import AuthAction from '../store/action/AuthAction'

const Useradd = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // console.log("dispatch", dispatch);


  const { addToCart } = useSelector((state) => state.Auth);
  // console.log("addToCart", addToCart);
  const [subTotal, setsubTotal] = useState([]);
  const [Total, setTotal] = useState(0);
  const proceedToCheckout = () => {
    navigate("/Cart-Details ", { state: subTotal });
  };
  const gasprice = () => {
    const pricetotal = addToCart.map((item)=> ({
      id: item.id,
      price: item.price,
      addToCart :item.id, 
    }));
    
    const totalData = pricetotal.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
    setTotal(totalData);
    setsubTotal(pricetotal);
  };

  useEffect((id) => {
    gasprice(id);
  }, []);

  const onhandalprice = (index, qty, itemize) => {
    const data = [...subTotal];
    data[index].price = itemize * qty;
    setsubTotal(data);

    const totalData = data.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);

    setTotal(totalData);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container d-flex flex-column ">
        <div className="homers">Home  / Cart</div>
        <div className="tablet">
          <tr className="cartable">
            <td className="cartages">Product </td>
            <td>Price</td>
            <td>Quantity</td>
            <td>subTotal</td>
          </tr>
          {addToCart &&
            addToCart.map((item, index) => {
              return (
                <>
                  <AddtwoCart
                    item={item} 
                    index={index}
                    onhandalprice={(quantity) =>
                      onhandalprice(index, quantity, item.price)
                    }
                  />
                </>
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
              <span>subTotal:</span>
              {Number(Total).toFixed(2)}
            </div>
            <hr w-75 />
            <div className="pricetotal d-flex flex-row  justify-content-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr></hr>
            <div className="pricetotal d-flex flex-row justify-content-between">
              <span>Total:</span>
              {Number(Total).toFixed(2)}
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
