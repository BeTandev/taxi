import React, { useState } from "react";
import aboutImg from "/contract-img.jpg";

function Contract() {
  const [messages, setMessages] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });
  const handleChange = (e) => {
    setMessages({ ...messages, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageData(messages);
  };
  const sendMessageData = async (messages) => {
    try {
      const response = await fetch(
        "https://apiuser-zavj.onrender.com/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        }
      );

      if (response.ok) {
        alert("Đã gửi tin nhắn thành công");
      } else {
        alert("Vui lòng gửi lại tin nhắn");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };
  return (
    <section id="contract" className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="wrap-contract-img d-flex justify-content-center align-items-center">
              <img src={aboutImg} className="contract-img" alt="about img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Để lại lời nhắn cho chúng tôi</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="elem-group">
                  <label className="d-block" htmlFor="name">
                    Tên bạn là gì?
                  </label>
                  <input
                    className="contract-input px-2"
                    type="text"
                    id="name"
                    name="name"
                    value={messages.name}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="elem-group">
                  <label className="d-block" htmlFor="name">
                    Email:
                  </label>
                  <input
                    className="contract-input px-2"
                    type="email"
                    id="email"
                    name="email"
                    value={messages.email}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="elem-group">
                  <label className="d-block" htmlFor="name">
                    Số điện thoại:
                  </label>
                  <input
                    className="contract-input px-2"
                    type="number"
                    id="phonenumber"
                    name="phonenumber"
                    value={messages.phonenumberL}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="elem-group">
                  <label className="d-block" htmlFor="name">
                    Lời nhắn bạn muốn để lại:
                  </label>
                  <input
                    className="contract-input px-2"
                    type="text"
                    id="message"
                    name="message"
                    value={messages.message}
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                <button className="contract-btn" type="submit">
                  Đặt xe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contract;
