import React, { useEffect, useState } from "react";
import "../../../css/booking.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Booking() {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    pickupLocation: "",
    destination: "",
    carType: "Xe 4 chỗ",
    note: ""
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBookingData(booking);
  };

  const sendBookingData = async (user) => {
    try {
      const response = await fetch("https://apiuser-zavj.onrender.com/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

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
          <div className="elem-group">
            <label
              className="elem-group-label d-block text-white"
              htmlFor="name"
            >
              Tên bạn là gì?
            </label>
            <input
              className="elem-group-input"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={booking.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="elem-group">
            <label
              className="elem-group-label d-block text-white"
              htmlFor="phone"
            >
              Số điện thoại của bạn
            </label>
            <input
              className="elem-group-input"
              type="number"
              id="phone"
              name="phone"
              placeholder="498-348-3872"
              value={booking.phone}
              onChange={handleChange}
              required
            />
          </div>
          <hr className="elem-group-hr" />
          <div className="elem-group">
            <label
              className="elem-group-label d-block text-white"
              htmlFor="phone"
            >
              Chúng tôi có thể đón bạn ở đâu?
            </label>
            <input
              className="elem-group-input"
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              placeholder="498-348-3872"
              value={booking.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="elem-group">
            <label
              className="elem-group-label d-block text-white"
              htmlFor="phone"
            >
              Bạn muốn đi đến đâu?
            </label>
            <input
              className="elem-group-input"
              type="text"
              id="destination"
              name="destination"
              placeholder="498-348-3872"
              value={booking.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div className="elem-group">
            <label
              className="elem-group-label d-block text-white"
              htmlFor="room-selection"
            >
              Bạn muốn dùng loại xe mấy chỗ?
            </label>
            <select id="room-selection" name="carType" required onChange={handleChange}>
              <option value="Xe 4 chỗ">Xe 4 chỗ</option>
              <option value="Xe 7 chỗ">Xe 7 chỗ</option>
              <option value="Xe 16 chỗ">Xe 16 chỗ</option>
            </select>
          </div>
          <hr className="elem-group-hr" />
          <div className="elem-group">
            <label
              className="elem-group-label d-block text-white"
              htmlFor="message"
            >
              Bạn có ghi chú gì không?
            </label>
            <textarea
              className="elem-group-textarea"
              id="note"
              name="note"
              placeholder="Tell us anything else that might be important."
              value={booking.note}
              onChange={handleChange}
              required
              defaultValue={""}
            />
          </div>
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
