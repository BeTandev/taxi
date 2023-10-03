import React, { useEffect } from "react";
import '../css/style.scss'
import MessageItem from "./MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../../../../store/MessageSlice";
import MenuItem from "../../../Shared/MenuItem";
import RightSideAdminPage from "../../../Shared/RightSideAdminPage";

function MessagePage() {
  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.MESSAGES.message);
  console.log(messageList);
  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  function loadMessage() {
    dispatch(fetchMessage());
  }

  return (
    <div>
      <section id="menu">
        <div className="menu col-3 float-left d-flex flex-column">
          <p className="text-secondary text-center title-menu">Hi Admin</p>

          <MenuItem
            iconMenu="fa-solid fa-message"
            selected
            content="Lời nhắn"
            connect="/admin/message-page"
          ></MenuItem>

          <MenuItem
            iconMenu="fa-solid fa-taxi"
            content="Tài xế"
            connect="/admin/driver-page"
          ></MenuItem>

          <MenuItem
            iconMenu="fa-regular fa-window-maximize"
            content="Cuốc xe"
            connect="/admin/booking-page"
          ></MenuItem>

          <MenuItem
            iconMenu="fa-regular fa-user"
            content="Người dùng"
            connect="/admin/user-page"
          ></MenuItem>
          
        </div>
      </section>
      <section id="other">
        <RightSideAdminPage dataName="Dữ liệu lời nhắn" loadHandle={loadMessage}></RightSideAdminPage>
        {messageList.map((state, index) => (
          <MessageItem data={state}></MessageItem>
        ))}
      </section>
    </div>
  );
}

export default MessagePage;
