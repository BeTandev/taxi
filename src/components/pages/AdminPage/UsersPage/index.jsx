import React, { useEffect } from "react";
import "./css/style.scss";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../../../Shared/MenuItem";
import { fetchUsers } from "../../../../store/UsersSlice";
import UserInformationItem from "./UserInformationItem";

function UserPage() {
    const dispatch = useDispatch();
    const usersList = useSelector((state) => state.USERS.usersList);
    useEffect(() => {
      dispatch(fetchUsers());
    }, []);

    function loadUsers() {
      dispatch(fetchUsers());
    }

  return (
    <div>
      <section id="menu">
        <div className="menu col-3 float-left d-flex flex-column">
          <p className="text-secondary text-center title-menu">Hi Admin</p>

          <MenuItem
            iconMenu="fa-solid fa-message"
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
            selected
            connect="/admin/user-page"
          ></MenuItem>
        </div>
      </section>
      <section id="other">
        <div className="back-homepage w-100">
          <a className="d-block">Quay lại trang chủ</a>
        </div>
        <div className="show-information d-flex justify-content-between align-items-center">
          <h2>Dữ liệu người dùng</h2>
          <button className="border-0" onClick={loadUsers}>
            Tải lại dữ liệu
          </button>
        </div>
        <hr />
        <div className="wrap-user-information-item">
        {usersList.map((state, index) => (
          <UserInformationItem data={state}></UserInformationItem>
        ))}
        </div>
      </section>
    </div>
  );
}

export default UserPage;
