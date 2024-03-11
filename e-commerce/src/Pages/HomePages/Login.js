/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/header";
import Footer from "../../Component/Footer";
import Images from "../../utils/images";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config";
import { useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const Login = () => {
  const home = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validationCheck = () => {
    if (!email && !password) {
      setUserError("Please enter your email name");
      setPasswordError("Please enter your password");
      return false;
    }
    if (!email) {
      setUserError("Please enter your email name");
      return false;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      return false;
    }
    return true;
  };
  const auth = getAuth();

  
  const onLogin = async () => {
    if (!validationCheck()) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("data", userCredential);
        home("/");
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
      });
  };

  return (
    <div>
      <Navbar />
      <Header />
      <hr className="w-100" />
      <div className="container w-100" style={{ marginLeft: "0" }}>
        <div className="login-form w-100">
          <div className="row w-100">
            <div className="col-7">
              <div className="bag">
                <img src={Images.signup} height="760px" alt="" />
              </div>
            </div>

            <div className="col-5">
              <div className="form">
                <div className="details">
                  <span
                    className="acc"
                    style={{ fontSize: "xxx-large", fontWeight: "600" }}
                  >
                    Log in
                  </span>
                  <span>Enter your details below</span>
                </div>
                <div className="form__group field">
                  <div className="w-100  gap-2 d-flex flex-column">
                    <input
                      type="text"
                      className="form__field"
                      placeholder=" Enter Your Email "
                      value={email}
                      name="uname"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span
                      className="error"
                      style={{ color: "red", alignItems: "baseline" }}
                    >
                      {userError}
                    </span>
                  </div>
                  <div className="w-100  gap-2 d-flex flex-column">
                    <input
                      type="password"
                      className="form__field"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      className="error"
                      style={{ color: "red", alignItems: "baseline" }}
                    >
                      {userError}
                    </span>
                  </div>
                </div>
                <div className="login mt-5">
                  <div className="button-create">
                    <div className="btn" 
                    onClick={onLogin}
                    >
                      Log in
                    </div>
                  </div>
                  <div className="password">
                    <span className=" d-flex flex-column justify-content-center">
                      Forget Password?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export const auth = getAuth(app);
export default Login;
  
 