import React from "react";
import "../../../css/login.scss";
import { Link } from "react-router-dom";
// import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Login() {
  return (
    <div className="login-wrap mt-5">
      <div className="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          defaultChecked
        />
        <label htmlFor="tab-1" className="tab">
          Đăng nhập
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Đăng ký
        </label>
        <div className="login-form">
          {/* <SignIn></SignIn> */}
          <SignUp></SignUp>
        </div>
      </div>
    </div>
  );
}

export default Login;
