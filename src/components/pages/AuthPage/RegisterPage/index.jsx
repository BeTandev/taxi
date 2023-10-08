import React, { useEffect, useState } from "react";
import SecondHeader from "../../../Header/SecondHeader";
import Footer from "../../../Footer";
import "../../../../css/auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsernameLogin } from "../../../../store/UsernameLoginSlice";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    setLoginData({
      username: user.username,
      password: user.password,
    });
  }, [user.username, user.password]);

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
        setUser({
          username: "",
          password: "",
          email: "",
        });
        setRepeatPassword("");
        dispatch(sendLoginData(loginData));
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
    <>
      <SecondHeader />
      <div className="log-form">
        <h2 className="d-block text-white w-100 m-0 text-uppercase">
          Đăng nhập
        </h2>
        <form className="d-block w-100" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Tên tài khoản"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Nhập lại mật khẩu"
            onChange={getRepeatPassword}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <button type="submit" className="btn">
            Đăng ký
          </button>
          <Link to="/login" className="forgot" href="#">
            Đăng nhập
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage