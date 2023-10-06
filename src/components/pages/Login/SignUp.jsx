import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInput from "../../Shared/SignInput";
import BackHomeBtn from "./BackHomeBtn";
import SubmitBtn from "./SubmitBtn";
import { useDispatch } from "react-redux";
import { getUsernameLogin } from "../../../store/UsernameLoginSlice";

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })
  useEffect(() => {
    setLoginData({
      username: user.username,
      password: user.password
    })
  }, [user.username, user.password])

  const [repeatPassword, setRepeatPassword] = useState();
  function getRepeatPassword(e) {
    setRepeatPassword(e.target.value);
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi user object lên API
    if (user.password === repeatPassword) {
      sendRegistrationData(user);
    } else {
      alert("Mật khẩu bạn đã điền không giống nhau");
    }
  };

  const sendRegistrationData = async (user) => {
    try {
      const response = await fetch("https://apiuser-zavj.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // alert(" Đã đăng ký thành công\n Bạn có thể chuyển qua phần đăng nhập để bắt đầu đăng nhập");
        setUser({
          username: "",
          password: "",
          email: "",
        });
        setRepeatPassword('')
        dispatch(sendLoginData(loginData))
      } else if (response.status === 400) {
        alert("Tên người dùng đã tồn tại");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  const sendLoginData = async (loginData) => {
    try {
      const response = await fetch("https://apiuser-zavj.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        navigate("/");
        dispatch(getUsernameLogin(user.username));
        sessionStorage.setItem("account", JSON.stringify(loginData));
      } else {
        alert("Vui lòng kiểm tra lại tài khoản và mật khẩu của bạn");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <form className="sign-up-htm" onSubmit={handleSubmit}>
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

      <SignInput
        labelContent="Nhật lại mật khẩu"
        typeInput="password"
        nameInput="repeatpassword"
        handleInput={getRepeatPassword}
        valueInput={repeatPassword}
      ></SignInput>

      <SignInput
        labelContent="Địa chỉ Email"
        typeInput="email"
        nameInput="email"
        valueInput={user.email}
        handleInput={handleChange}
      ></SignInput>

      <SubmitBtn content="Đăng ký"></SubmitBtn>

      <BackHomeBtn></BackHomeBtn>

      <div className="hr" />
    </form>
  );
}

export default SignUp;
