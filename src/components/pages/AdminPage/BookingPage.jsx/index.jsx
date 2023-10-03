import React, { useEffect } from "react";
import MenuItem from "../../../Shared/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../../../../store/BookingSlice";
import BookingInformationItem from "./BookingInformationItem";
import RightSideAdminPage from "../../../Shared/RightSideAdminPage";
import '../css/style.scss'

function BookingPage() {
  const dispatch = useDispatch();
    const bookingsList = useSelector((state) => state.BOOKING.bookingsList);
    useEffect(() => {
      dispatch(fetchBookings());
    }, []);

    function loadBookings() {
      dispatch(fetchBookings());
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
            selected
          ></MenuItem>

          <MenuItem
            iconMenu="fa-regular fa-user"
            content="Người dùng"
            connect="/admin/user-page"
          ></MenuItem>
        </div>
      </section>
      <section id="other">
        <RightSideAdminPage dataName="Dữ liệu cuốc xe" loadHandle={loadBookings}></RightSideAdminPage>
        <div className="wrap-user-information-item">
        {bookingsList.map((state, index) => (
          <BookingInformationItem data={state}></BookingInformationItem>
        ))}
        </div>
      </section>
    </div>
  );
}

export default BookingPage