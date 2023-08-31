import React from "react";
import "../../../css/login.css";
import { Link } from "react-router-dom";

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
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label text-white">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label text-white">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <input
                id="check"
                type="checkbox"
                className="check"
                defaultChecked
              />
              <label htmlFor="check">
                <span className="icon" /> Keep me Signed in
              </label>
            </div>
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign In" />
            </div>
            <div className="group">
              <Link to="/" className="button text-center">Quay lại trang chủ</Link>
            </div>
            <div className="hr" />
            <div className="foot-lnk">
              <a href="#forgot" className="text-white">Forgot Password?</a>
            </div>
          </div>
          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="user" className="label text-white">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label text-white">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label text-white">
                Repeat Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label text-white">
                Email Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign Up" />
            </div>
            <div className="group">
              <Link to="/" className="button text-center">Quay lại trang chủ</Link>
            </div>
            <div className="hr" />
            {/* <div className="foot-lnk">
              <label htmlFor="tab-1">Already Member?</label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
