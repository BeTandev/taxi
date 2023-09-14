import React, { useEffect, useState } from "react";
import "../../../css/booking.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputBlock from "../../Shared/InputBlock";

function Booking() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    pickupLocation: "",
    destination: "",
    carType: "Xe 4 chỗ",
    note: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBookingData(booking);
  };

  const sendBookingData = async (booking) => {
    try {
      const response = await fetch(
        "https://apiuser-zavj.onrender.com/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(booking),
        }
      );

      if (response.ok) {
        alert("Đặt xe thành công");
      } else {
        alert("Vui lòng đặt xe lại");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="booking">
      <div className="div-booking mx-auto">
        <h2 className="text-white">Đặt xe</h2>
        <form onSubmit={handleSubmit}>
          <InputBlock
            labelContent="Tên bạn là gì?"
            idInput="name"
            valueInput={booking.name}
            handleChange={handleChange}
          ></InputBlock>
          <InputBlock
            labelContent="Số điện thoại của bạn"
            typeInput="number"
            idInput="phone"
            valueInput={booking.phone}
            handleChange={handleChange}
          ></InputBlock>
          <hr className="elem-group-hr" />
          <InputBlock
            labelContent="Chúng tôi có thể đón bạn ở đâu?"
            idInput="pickupLocation"
            valueInput={booking.pickupLocation}
            handleChange={handleChange}
          ></InputBlock>
          <InputBlock
            labelContent="Bạn muốn đi đến đâu?"
            idInput="destination"
            valueInput={booking.destination}
            handleChange={handleChange}
          ></InputBlock>
          <div className="elem-group">
            <label
              className="elem-group-label d-block text-white"
              htmlFor="room-selection"
            >
              Bạn muốn dùng loại xe mấy chỗ?
            </label>
            <select
              id="room-selection"
              name="carType"
              required
              onChange={handleChange}
              className="rounded"
            >
              <option value="Xe 4 chỗ">Xe 4 chỗ</option>
              <option value="Xe 7 chỗ">Xe 7 chỗ</option>
              <option value="Xe 16 chỗ">Xe 16 chỗ</option>
            </select>
          </div>
          <hr className="elem-group-hr" />
          <InputBlock
            labelContent="Bạn có ghi chú gì không?"
            idInput="note"
            valueInput={booking.note}
            handleChange={handleChange}
          ></InputBlock>
          <button className="btn-submit text-white" type="submit">
            Đặt xe
          </button>
          <button className="btn-submit text-white mt-4" type="submit">
            <Link to="/">Quay lại trang chủ</Link>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
