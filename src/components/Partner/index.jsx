import React from "react";
import aboutImg from "/about-img.jpg";

function Partner() {
  return (
    <section className="about_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img-box ">
              <img
                src={aboutImg}
                className="box_img"
                alt="about img"
              />
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="detail-box pr-md-2">
              <div className="heading_container">
                <h2>Trở thành tài xế với chúng tôi</h2>
              </div>
              <p className="detail_p_mt">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, orThere are many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, orThere are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
              </p>
              {/* <a href="about.html" className>
                Xem thêm về chúng tôi
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner