import React, { useEffect } from "react";
import "../../../css/booking.css"
import { Link } from "react-router-dom";

function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="booking">
      <div className="div-booking mx-auto">
        <h2 className="text-white">Đặt xe</h2>
        <form action="reservation.php" method="post">
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
              name="visitor_name"
              placeholder="John Doe"
              pattern="[A-Z\sa-z]{3,20}"
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
              type="tel"
              id="phone"
              name="visitor_phone"
              placeholder="498-348-3872"
              pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
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
              type="tel"
              id="phone"
              name="visitor_phone"
              placeholder="498-348-3872"
              pattern="[A-Z\sa-z]{3,20}"
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
              type="tel"
              id="phone"
              name="visitor_phone"
              placeholder="498-348-3872"
              pattern="[A-Z\sa-z]{3,20}"
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
            <select id="room-selection" name="room_preference" required>
              <option value>Xe 4 chỗ</option>
              <option value="adjoining">Xe 7 chỗ</option>
              <option value="adjacent">Xe 16 chỗ</option>
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
              id="message"
              name="visitor_message"
              placeholder="Tell us anything else that might be important."
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
