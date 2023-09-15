import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInput from "../../Shared/SignInput";
import BackHomeBtn from "./BackHomeBtn";
import SubmitBtn from "./SubmitBtn";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
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
        alert(" Đã đăng ký thành công\n Bạn có thể chuyển qua phần đăng nhập để bắt đầu đăng nhập");
        setUser({
          username: "",
          password: "",
          email: "",
        });
        setRepeatPassword('')
      } else if (response.status === 400) {
        alert("Tên người dùng đã tồn tại");
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

      <SubmitBtn></SubmitBtn>

      <BackHomeBtn></BackHomeBtn>

      <div className="hr" />
    </form>
  );
}

export default SignUp;
