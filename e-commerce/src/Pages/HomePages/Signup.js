/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/header";
import Footer from "../../Component/Footer";
import Images from "../../utils/images";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase";


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
  const auth = getAuth();

  const onsubmit = async (e) => {
    if (!validationCheck()) return;

    
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential);
        home("/");
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
        setLogin(true);
      });
        
  };
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });



      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
         
        } else {
          
        }
      });



  return (
    <>
      <Navbar />
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
                    Create an account
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
                      Create Account
                    </button>
                  </div>
                  <div className="google mt-4 mb-5 ">
                    <button className="btn btn-googl-sing">
                      <div className="svg">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clippath="url(#clip0_1316_3336)">
                            <path
                              d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                              fill="#34A853"
                            />
                            <path
                              d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                              fill="#FBBC04"
                            />
                            <path
                              d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                              fill="#EA4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1316_3336">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
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
