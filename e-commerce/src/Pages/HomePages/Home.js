// import Featured from "../../Component/Featured";
// import Service from "../../Component/Service";
// import "../../asset/style/Style.scss";
// import "../../asset/style/footer.scss";
// import "../../asset/style/_header.scss";
// import "../../asset/style/CustomCard.scss";
// import "../../asset/style/CustomCard2.scss";
// import "../../asset/style/iphone.scss";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import Navbar from "../../Component/Navbar";
// import Header from "../../Component/header";
// import Iphone from "../../Component/Iphone";
// import ToDays from "../../Component/ToDays";
// import Categories from "../../Component/Categories";
// import Products from "../../Component/Products";
// import OurProducts from "../../Component/OurProducts";
// import Music from "../../Component/Music";

// import Footer from "../../Component/Footer";
// import { AuthAction } from "../../store/action/AuthAction";

// // import { isAction } from "@reduxjs/toolkit";
// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const { ADDTOCART } = useSelector((state) => state.Auth);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://mocki.io/v1/e93df3d3-714f-47c5-a223-e12112899cdd"
//         );
//         const data = response.data.map((item) => item.id);
//         console.log(data);
//         const productshopping = localStorage.getItem((Product) => Product.id);

//         const newData = response.data.map((item) => {
//           const finditem =
//             ADDTOCART.length > 0
//               ? ADDTOCART.find((o) => o.id === item.id)
//               : { quantity: 1 };
//           return {
//             quantity: finditem?.quantity || 1,
//             ...item,
//           };
//         });

//         dispatch(AuthAction.ADDTOPRODUCT(productshopping || newData));

//         setPosts(newData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [dispatch, ADDTOCART]);

//   return (
//     <>
//       <Navbar />
//       {posts && <Header posts={posts} />}
//       <div className="container mt-0  ">
//         <hr className="w-100" />
//       </div>
//       <Iphone />
//       {posts && <ToDays posts={posts} />}

//       <div className="container ">
//         <hr className="w-100" />
//       </div>
//       <Categories />
//       <div className="container ">
//         <hr className="w-100" mt-2 mb-2 />
//       </div>
//       {posts && <Products posts={posts} />}
//       <Music />
//       {posts && <OurProducts posts={posts} />}
//       <Featured />
//       <Service />
//       <Footer />
//     </>
//   );
// };
// export default Home;

// api can Storag localStorage but console can print only id not a all Value of the api  in auth funcation will

//the api  in auth funcation will LISTFOPRODUCT will  print only id not a all Value of the api  in auth funcation will print is id

import Featured from "../../Component/Featured";
import Service from "../../Component/Service";
import "../../asset/style/Style.scss";
import "../../asset/style/footer.scss";
import "../../asset/style/_header.scss";
import "../../asset/style/CustomCard.scss";
import "../../asset/style/CustomCard2.scss";
import "../../asset/style/iphone.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/header";
import Iphone from "../../Component/Iphone";
import ToDays from "../../Component/ToDays";
import Categories from "../../Component/Categories";
import Products from "../../Component/Products";
import OurProducts from "../../Component/OurProducts";
import Music from "../../Component/Music";
import Footer from "../../Component/Footer";
import { AuthAction } from "../../store/action/AuthAction";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { ADDTOCART } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/e93df3d3-714f-47c5-a223-e12112899cdd"
        );

        const data = response.data.map((item) => item.id);
        console.log(data);
        const IDs = localStorage.getItem((Product) => Product.id);

        const newData = response.data.map((item) => {
          const finditem =
            ADDTOCART.length > 0
              ? ADDTOCART.find((o) => o.id === item.id)
              : { quantity: 1 };
          return {
            quantity: finditem?.quantity || 1,
            ...item,
          };
        });
        dispatch(AuthAction.ADDTOPRODUCT(IDs || newData));
        // dispatch(ADDTOPRODUCT(IDs));
        console.log("IDs", IDs);
        setPosts(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, ADDTOCART]);

  return (
    <>
      <Navbar />
      {posts && <Header posts={posts} />}
      <div className="container mt-0  ">
        <hr className="w-100" />
      </div>
      <Iphone />
      {posts && <ToDays posts={posts} />}

      <div className="container ">
        <hr className="w-100" />
      </div>
      <Categories />
      <div className="container ">
        <hr className="w-100" mt-2 mb-2 />
      </div>
      {posts && <Products posts={posts} />}
      <Music />
      {posts && <OurProducts posts={posts} />}
      <Featured />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
//in auth function list in LISTFOPRODUCT WILL also print is the only id not all deteils of the product
