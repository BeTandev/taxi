import React from "react";
import './css/style.scss'

function BookingInformationItem(props) {
    const {id, name, phone, pickupLocation, destination, carType, note} = props.data
  return (
    <div className="booking-information-item">
      <div className="wrap wrap-id">
        <strong>Id: </strong>
        <span>{id}</span>
      </div>
      <div className="wrap wrap-user">
        <strong>Người dùng: </strong>
        <span>{name}</span>
      </div>
      <div className="wrap wrap-phone">
        <strong>Số điện thoại: </strong>
        <span>{phone}</span>
      </div>
      <div className="wrap wrap-pickupLocation">
        <strong>Địa điểm đón khách: </strong>
        <span>{pickupLocation}</span>
      </div>
      <div className="wrap wrap-destination">
        <strong>Địa điểm trả khách: </strong>
        <span>{destination}</span>
      </div>
      <div className="wrap wrap-carType">
        <strong>Loại xe: </strong>
        <span>{carType}</span>
      </div>
      <div className="wrap wrap-note">
        <strong>Ghi chú cho tài xế: </strong>
        <span>{note}</span>
      </div>
    </div>
  );
}

export default BookingInformationItem