import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [repeatPassword, setRepeatPassword] = useState()
  function getRepeatPassword(e){
    setRepeatPassword(e.target.value)
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi user object lên API
    if(user.password === repeatPassword){
      sendRegistrationData(user);
    }else{
      alert('Mật khẩu bạn đã điền không giống nhau')
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
        alert("Đã đăng ký thành công");
      } else {
        alert("Vui lòng thử lại");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <form className="sign-up-htm" onSubmit={handleSubmit}>
      {/* <div className="sign-up-htm"> */}

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
          required
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
          required
        />
      </div>

      <div className="group">
        <label htmlFor="pass" className="label text-white">
          Repeat Password
        </label>
        <input type="password" name="repeatpassword" className="input" onChange={getRepeatPassword} required/>
      </div>

      <div className="group">
        <label htmlFor="pass" className="label text-white">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div className="group">
        <button type="submit" className="button">
          Đăng ký
        </button>
      </div>

      <div className="group">
        <Link to="/" className="button text-center">
          Quay lại trang chủ
        </Link>
      </div>

      <div className="hr" />
      {/* </div> */}
    </form>
  );
}

export default SignUp;
