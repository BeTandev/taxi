import React, { useEffect } from "react";
import "./css/style.scss";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../../../Shared/MenuItem";
import { fetchUsers } from "../../../../store/UsersSlice";
import UserInformationItem from "./UserInformationItem";
import RightSideAdminPage from "../../../Shared/RightSideAdminPage";

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
        <RightSideAdminPage dataName="Dữ liệu người dùng" loadHandle={loadUsers}></RightSideAdminPage>
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
