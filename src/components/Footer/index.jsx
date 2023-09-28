import React from "react";
import ContractItem from "../Shared/ContractItem";

function Footer() {
  return (
    <>
      <section className="info_section ">
        <div className="container">
          <div className="info_top">
            <div className="row">
              <div className="col-lg-4 ">
                <a className="navbar-brand" href="index.html">
                  Finter
                </a>
              </div>
              <div className="col-lg-5 ">
                <div className="info_contact">
                  <ContractItem connect="" icon="fa fa-phone" content="Call : +84 0900 333 007"></ContractItem>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-start">
                <div className="social_box">
                  <ContractItem connect="https://www.facebook.com/" icon="fa fa-facebook"></ContractItem>
                  <ContractItem connect="https://www.x.com/" icon="fa fa-twitter"></ContractItem>
                  <ContractItem connect="https://www.linkedin.com/" icon="fa fa-linkedin"></ContractItem>
                  <ContractItem connect="https://www.instagram.com/" icon="fa fa-instagram"></ContractItem>
                </div>
              </div>
            </div>
          </div>
          <div className="info_bottom">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="info_detail">
                  <h5>Tắc Suy Tây Ninh</h5>
                  <p>
                  Taxi Tây Ninh là công ty taxi hàng đầu, cam kết sự tin cậy, chuyên nghiệp và dịch vụ an toàn, nhanh chóng, với đội ngũ tài xế chuyên nghiệp, xe hiện đại và giá cả hợp lý.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info_detail">
                  <h5>Dịch vụ</h5>
                  <p>
                  Dịch vụ taxi Tây Ninh đa dạng xe, tài xế chuyên nghiệp, đón/trả linh hoạt, an toàn. Đặt xe online, gọi điện, chất lượng dịch vụ đáp ứng tốt nhất cho khách hàng.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div>
                  <h5>Useful links</h5>
                  <ul className="info_menu">
                    <li>
                      <ContractItem connect="/" content="Trang chủ"></ContractItem>
                    </li>
                    <li>
                      <ContractItem connect="/about-us" content="About Us"></ContractItem>
                    </li>
                    <li>
                      <ContractItem connect="/uu-dai" content="Ưu đãi"></ContractItem>
                    </li>
                    <li>
                      <ContractItem connect="/my-team" content="Thành Viên"></ContractItem>
                    </li>
                    <li className="mb-0">
                      <ContractItem connect="/" content="Đối Tác"></ContractItem>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
