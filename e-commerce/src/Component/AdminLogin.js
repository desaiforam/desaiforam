// import React, { useState } from "react";

// const AdminLogin = (props) => {
  
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState("");

//   const [userError, setUserError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const validationCheck = () => {
//     if (!user && !password) {
//       setUserError("Please enter your user name");
//       setPasswordError("Please enter your password");
//       return false;
//     }
//     if (!user) {
//       setUserError("Please enter your user name");
//       return false;
//     }
//     if (!password) {
//       setPasswordError("Please enter your password");
//       return false;
//     }
//     return true;
//   };

//   const handleClick = () => {
//     if (!validationCheck()) return;
//     console.log("user :", user);
//     console.log("password :", password);
//   };

//   return (
//     <div className="container-login d-flex flex-column">
//       <form>
//         <div className="loginadmin d-flex flex-column">
//           <h4> Login</h4>
//           <div className="w-100 mb-5 gap-2 d-flex flex-column">
//             <div className="text_area">
//               <label htmlFor="uname" className="uname d-flex">
//                 <b className="name d-flex">Username : </b>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 name="uname"
//                 value={user}
//                 onChange={(e) => setUser(e.target.value)}
//                 required
//               />
//             </div>
//             <span className="error">{userError}</span>
//           </div>
//           <div className="w-100 mb-5 gap-2 d-flex flex-column">
//             <div className="text_area ">
//               <label htmlFor="psw" className="uname d-flex">
//                 <b className="name d-flex">Password : </b>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 name="psw"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <span className="error">{passwordError}</span>
//             <div className="w-100 d-flex  justify-content-center ">
//               <div className="login-btn" onClick={handleClick}>
//                 LOGIN
//               </div>
//             </div>
//           </div>

//           {/* <label>
//             <input type="checkbox" checked={true} name="remember" /> Remember me
//           </label> */}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./Footer";
import Images from "../utils/images";
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../firebase"
import { Google } from "../asset/images/svg";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Signup = () => {
  const home = useNavigate();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [login, setLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const validationCheck = () => {
    if (!userName && !password && !email) {
      setUserError("Please enter your user name");
      setPasswordError("Please enter your password");
      setEmailError("Please enter your user email");
      return false;
    }
    if (!userName) {
      setUserError("Please enter your user name");
      return false;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      return false;
    }
    if (!email) {
      setEmailError("Please enter your user email");
      return false;
    }
    return true;
  };

  const onsubmit = async (e) => {
    if (!validationCheck()) return;


    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential);
        home("/");
        e.preventDefault();
        const User = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            email,
          }),
        };
        const res = fetch(
          "https://main-e-commerec-default-rtdb.firebaseio.com/UserData.json",
          User
        );
        console.log(res);
        if (res) {
          alert("Message Send");
        } else {
          alert("Error Occurred");
        }
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((err) => {
            alert(err.code);
            alert(err.message);
          });
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
        setLogin(true);
      });
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Header />
      <hr className="w-100" />
      <div className="container" style={{ marginLeft: "0" }}>
        <div className="sing-up  w-100">
          <div className="row w-100">
            <div className="col-6">
              <div className="bag">
                <img src={Images.signup} height="760px" alt="" />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <div className="form">
                <div className="details">
                  <span
                    className="acc"
                    style={{ fontSize: "xxx-large", fontWeight: "600" }}
                  >
                    {isLoggedIn ? "Sign in" : "Create an account"}
                  </span>
                  <span>Enter your details below</span>
                </div>
                <div className="form__group field">
                  <input
                    type="text"
                    placeholder="Name"
                    id=""
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id=""
                  />
                </div>
                <div className="login">
                  <div className="button-create">
                    <button className="btn" onClick={onsubmit}>
                      {isLoggedIn ? "Sign in" : "Create Account"}
                    </button>
                  </div>
                  <div className="google mt-4 mb-5 ">
                    <button className="btn btn-googl-sing">
                      <div className="svg">
                        <Google />
                      </div>
                      Sign up with Google
                    </button>
                  </div>
                  <span>
                    Already have account?
                    <a href="log-in" className="link">
                      Log in
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const database = getAuth(app);
export default Signup;
