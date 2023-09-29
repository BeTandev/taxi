import React from "react";
import SimpleSlider from "./SimpleSlider";

function Preferential() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center ">
          <h2>Cam kết</h2>
          <p className="col-lg-8 px-0">
           Cam kết của chúng tôi
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
