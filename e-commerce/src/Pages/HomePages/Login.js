import React from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/header";
import Footer from "../../Component/Footer";
import Images from "../../utils/images";
import { useState } from "react";

const Login = () => {
    
    const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false)
  

  const validationCheck = () => {
    if (!user && !password) {
      setUserError("Please enter your user name");
      setPasswordError("Please enter your password");
      return false;
    }
    if (!user) {
      setUserError("Please enter your user name");
      return false;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      return false;
    }
    return true;
  };

  const onsubmit = async () => {
    if (!validationCheck()) return;
    console.log("user :", user);
    console.log("password :", password);
  };
  
    return (
    <div>
      <Navbar />
      <Header />
      <hr className="w-100" />
      <div className="container w-100" style={{ marginLeft: "0" }}>
        <div className="login  w-100">
          <div className="row w-100">
            <div className="col-7">
              <div className="bag">
                <img src={Images.signup} height="760px" alt="" />
              </div>
            </div>

            <div className="col-5">
              <div className="form">
                <div className="detalis">
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
                    placeholder="Email or Phone Number"
                    value={user}
                    name="uname"
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                  <span className="error" style={{color:"red", alignItems:"baseline"}}>{userError }</span>
                </div>
                <div className="w-100  gap-2 d-flex flex-column">

                  <input
                    type="text"
                    className="form__field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                    <span className="error" style={{color:"red", alignItems:"baseline"}}>{userError }</span>
                </div>
                </div>
                <div className="login mt-5">
                  <div className="buttoncreate">
                    <div  className="btn" onClick={onsubmit}>Create Account</div>
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

export default Login;
