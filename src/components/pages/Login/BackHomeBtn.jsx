import React from "react";
import { Link } from "react-router-dom";

function BackHomeBtn(){
    return(
        <div className="group">
        <Link to="/" className="button text-center">
          Quay lại trang chủ
        </Link>
      </div>
    )
}

export default BackHomeBtn