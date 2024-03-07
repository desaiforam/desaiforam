import React, { useState } from "react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleClick = () => {
    if (!validationCheck()) return;
    console.log("user :", user);
    console.log("password :", password);
  };

  return (
    <div className="container-login d-flex flex-column">
      <form>
        <div className="loginadmin d-flex flex-column">
          <h4> Login</h4>
          <div className="w-100 mb-5 gap-2 d-flex flex-column">
            <div className="text_area">
              <label htmlFor="uname" className="uname d-flex">
                <b className="name d-flex">Username : </b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
            <span className="error">{userError}</span>
          </div>
          <div className="w-100 mb-5 gap-2 d-flex flex-column">
            <div className="text_area ">
              <label htmlFor="psw" className="uname d-flex">
                <b className="name d-flex">Password : </b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <span className="error">{passwordError}</span>
            <div className="w-100 d-flex  justify-content-center ">
              <div className="login-btn" onClick={handleClick}>
                LOGIN
              </div>
            </div>
          </div>

          {/* <label>
            <input type="checkbox" checked={true} name="remember" /> Remember me
          </label> */}
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
