import React, { useEffect } from "react";
import "./css/style.scss";
import MessageItem from "./MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../../../../store/MessageSlice";

function MessagePage() {
  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.MESSAGES.message);
  console.log(messageList)
  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  function loadMessage(){
    dispatch(fetchMessage());
  }


  return (
    <div>
      <section id="menu">
        <div className="menu col-3 float-left d-flex flex-column">
          <p className="text-secondary text-center title-menu">Hi Admin</p>
          <div className="d-flex align-items-center select">
            <i className="fa-solid fa-house" /> <p>Lời nhắn</p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-house" /> <p>Tài xế</p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-house" /> <p>Cuốc xe</p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-house" /> <p>Người dùng</p>
          </div>
        </div>
      </section>
      <section id="other">
        <div className="back-homepage w-100">
          <a className="d-block">Quay lại trang chủ</a>
        </div>
        <div className="show-information d-flex justify-content-between align-items-center">
          <h2>Dữ liệu lời nhắn</h2>
          <button className="border-0" onClick={loadMessage}>Tải lại dữ liệu</button>
        </div>
        <hr />
        {messageList.map((state, index) => (
            <MessageItem data={state}></MessageItem>
        ))}
      </section>
    </div>
  );
}

export default MessagePage;
