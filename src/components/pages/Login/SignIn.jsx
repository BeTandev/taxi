import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsernameLogin } from "../../../store/UsernameLoginSlice";

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendLoginData(user);
  };

  const sendLoginData = async (user) => {
    try {
      const response = await fetch("https://apiuser-zavj.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate("/")
        // alert("Đăng nhập thành công");
        dispatch(getUsernameLogin(user.username))
      } else {
        alert("Vui lòng kiểm tra lại tài khoản và mạt khẩu của bạn");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <form className="sign-in-htm" onSubmit={handleSubmit}>
      <div className="group">
        <label htmlFor="user" className="label text-white">
          Username
        </label>
        <input
          type="text"
          className="input"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>

      <div className="group">
        <label htmlFor="pass" className="label text-white">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div className="group">
        <button type="submit" className="button">
          Đăng nhập
        </button>
      </div>

      <div className="group">
        <Link to="/" className="button text-center">
          Quay lại trang chủ
        </Link>
      </div>

      <div className="hr" />
    </form>
  );
}

export default SignIn;