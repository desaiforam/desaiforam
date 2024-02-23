import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/header";
import Footer from "../../Component/Footer";
import Iphone from "../../Component/Iphone";
import ToDays from "../../Component/ToDays";
import Categories from "../../Component/Categories";
import Products from "../../Component/Products";
import OurProducts from "../../Component/OurProducts";
import Music from "../../Component/Music";
import Featured from "../../Component/Featured";
import Service from "../../Component/Service";
import "../../asset/style/Style.scss";
import "../../asset/style/footer.scss";
import "../../asset/style/_header.scss";
import "../../asset/style/CustomCard.scss";
import "../../asset/style/CustomCard2.scss";
import "../../asset/style/iphone.scss";
import { AuthAction } from "../../store/action/AuthAction";

const Home = () => {
  const { listOfProduct, quantity } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(listOfProduct({ ...listOfProduct, quantity }));
    console.log("quantity", quantity);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/553960a9-f177-4b4b-a1d2-48fb57c5ebd7"
      );

      const data = response.data.map((product) => ({
        ...product,
        quantityCart: '',
        color: "",
        size: "",
      }));

      dispatch(AuthAction.addToProduct(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      {listOfProduct && <Header posts={listOfProduct} />}
      <div className="container mt-0">
        <hr className="w-100" />
      </div>
      <Iphone />
      {listOfProduct && <ToDays posts={listOfProduct} />}
      <div className="container">
        <hr className="w-100" />
      </div>
      <Categories />
      <div className="container">
        <hr className="w-100" mt-2 mb-2 />
      </div>
      {listOfProduct && <Products posts={listOfProduct} />}
      <Music />
      {listOfProduct && <OurProducts posts={listOfProduct} />}
      <Featured />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
//set a also quantity of the Product   addtocart
