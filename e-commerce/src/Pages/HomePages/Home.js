/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
import {  getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config";
import ReactLoader from "react-loader";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading ,setIsLoading] = useState([])
  const { listOfProduct} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();


  const fetchData = async () => {
    try {
      const response = await axios.get(
       "https://mocki.io/v1/9c86b615-3d28-4182-a1eb-e2f1b27fe6d5"
     
      
      );
      const data = response.data.map((product) => ({
        ...product,
      }));

      dispatch(AuthAction.addToProduct(data));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  
  }, []);

  return (
    <>
    
      <Navbar isLoggedIn={isLoggedIn}/>
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
export const database = getAuth(app);
export default Home;

//how  login user can save the quantitycart value  in local storage in own account
// a wishlist can save the local storage in the with wishlist uid
//How a login user can save AddToCart data to local storage in their account
// how  login user can save the addtocart  in local storage in own account
//how to get addtocart data value using user login in local storage
// a user can addtocart data it is the save for the user login data