import React from "react";
import SimpleSlider from "./SimpleSlider";

function Preferential() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center ">
          <h2>Ưu Đãi</h2>
          <p className="col-lg-8 px-0">
            Những chương trình ưu đãi trong tháng 9 của chúng tôi
          </p>
        </div>
        <div className="service_container service_container_custom">
          <div className="carousel-wrap">
            <SimpleSlider></SimpleSlider>
          </div>
        </div>
        <div className="btn-box">
          <a>Xem nhiều ưu đãi hơn</a>
        </div>
      </div>
    </section>
  );
}

export default Preferential;
