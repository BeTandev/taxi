import React, { useState } from "react";
import "../../../../css/auth.scss";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsernameLogin } from "../../../../store/UsernameLoginSlice";
import Footer from "../../../Footer";
import SecondHeader from "../../../Header/SecondHeader";
import InputBlock from "../../../Shared/InputBlock";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkSaveLogin, setCheckSaveLogin] = useState(true);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  console.log(user);

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
        if (user.username === "admin") {
          navigate("/admin/message-page");
        } else {
          navigate("/");
        }
        dispatch(getUsernameLogin(user.username));
        if (checkSaveLogin) {
          localStorage.setItem("account", JSON.stringify(user));
          sessionStorage.setItem("account", JSON.stringify(user));
        } else {
          sessionStorage.setItem("account", JSON.stringify(user));
        }
      } else {
        alert("Vui lòng kiểm tra lại tài khoản và mật khẩu của bạn");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  function checkCheckBox(e) {
    if (e.target.checked) {
      setCheckSaveLogin(true);
    } else {
      setCheckSaveLogin(false);
    }
  }
  return (
    <>
      <SecondHeader />
      <div className="log-form">
        <h2 className="d-block text-white w-100 m-0 text-uppercase">
          Đăng nhập
        </h2>
        <form className="d-block w-100" onSubmit={handleSubmit}>
          <InputBlock
            typeInput="text"
            idInput="username"
            placeholderInput="Tên tài khoản"
            handleChange={handleChange}
          ></InputBlock>

          <InputBlock
            typeInput="password"
            idInput="password"
            placeholderInput="Mật khẩu"
            handleChange={handleChange}
          ></InputBlock>

          <div className="wrap-checkbox mb-3">
            <input
              type="checkbox"
              defaultChecked
              handleChange={checkCheckBox}
            ></input>
            <label htmlFor="">Lưu lại đăng nhập</label>
          </div>
          <button type="submit" className="btn">
            Đăng nhập
          </button>
          <Link to="/register" className="forgot" href="#">
            Bạn chưa có tài khoản
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
