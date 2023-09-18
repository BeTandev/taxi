import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsernameLogin } from "../../../store/UsernameLoginSlice";
import SignInput from "../../Shared/SignInput";
import BackHomeBtn from "./BackHomeBtn";
import SubmitBtn from "./SubmitBtn";

function SignIn() {
  const dispatch = useDispatch();
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
        navigate("/");
        dispatch(getUsernameLogin(user.username));
        sessionStorage.setItem('account', JSON.stringify(user));
      } else {
        alert("Vui lòng kiểm tra lại tài khoản và mật khẩu của bạn");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <form className="sign-in-htm" onSubmit={handleSubmit}>
      <SignInput
        labelContent="Tên người dùng"
        nameInput="username"
        valueInput={user.username}
        handleInput={handleChange}
      ></SignInput>

      <SignInput
        labelContent="Mật khẩu"
        typeInput="password"
        nameInput="password"
        valueInput={user.password}
        handleInput={handleChange}
      ></SignInput>

      <SubmitBtn content="Đăng nhập"></SubmitBtn>

      <BackHomeBtn></BackHomeBtn>

      <div className="hr" />
    </form>
  );
}

export default SignIn;
