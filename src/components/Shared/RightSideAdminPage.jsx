import React from "react";
import { Link } from "react-router-dom";

function RightSideAdminPage(props) {
    const {dataName, loadHandle} = props
  return (
    <>
      <div className="back-homepage w-100">
        <Link to="/" className="d-block">Quay lại trang chủ</Link>
      </div>
      <div className="show-information d-flex justify-content-between align-items-center">
        <h2>{dataName}</h2>
        <button className="border-0" onClick={loadHandle}>
          Tải lại dữ liệu
        </button>
      </div>
      <hr />
    </>
  );
}

export default RightSideAdminPage