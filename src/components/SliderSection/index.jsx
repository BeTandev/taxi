import React from "react";
import { Link } from "react-router-dom";

function SliderSection() {
  let account = ""
  const dataLogin = JSON.parse(localStorage.getItem("account"));
  if(dataLogin){
    account = JSON.parse(localStorage.getItem("account"));
  }else{
    account = JSON.parse(sessionStorage.getItem("account"));
  }
  
  function checkLogin(e){
    if(!account){
      e.preventDefault()
      alert("Bạn cần đăng nhập để đặt xe")
    }
  }
  return (
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1 style={{ lineHeight: "1.7" }}>
                      Dịch Vụ <br />
                      Taxi Tây Ninh
                    </h1>
                    <p>Hãy để chúng tôi là một phần trên con đường của bạn</p>
                    <div className="btn-box">
                      <Link to="/booking" className="btn1" onClick={checkLogin}>
                        Đặt xe ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderSection