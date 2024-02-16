import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import AddtwoCart from "./AddtwoCart";
import { useLocation, useNavigate } from "react-router-dom";
// import AuthAction from '../store/action/AuthAction'

const Useradd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("dispatch", dispatch);

  const { state } = useLocation();

  const { advocaat } = useSelector((state) => state.Auth);
  console.log("advocaat", advocaat);
  const [SubTotal, setSubTotal] = useState([]);
  const [Total, setTotal] = useState(0);
  const proceedToCheckout = () => {
    navigate("/Cart-Details ", { state: SubTotal });
  };
  const gasprice = () => {
    const pricetotal = advocaat.map((item) => ({
      id: item.id,
      price: item.price,
    }));

    

    const totalData = pricetotal.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
    setTotal(totalData);
    setSubTotal(pricetotal);
  };

  useEffect(() => {
    gasprice();
  }, []);
  

  const onhandalprice = (index, qty, itemize) => {
    const data = [...SubTotal];
    data[index].price = itemize * qty;
    setSubTotal(data);

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
        <div className="homers">Home/ Cart</div>
        <div className="tablet">
          <tr className="cartable">
            <td className="cartages">Product </td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
          {advocaat &&
            advocaat.map((item, index) => {
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
              <span>Subtotal:</span>
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
