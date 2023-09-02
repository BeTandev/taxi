import React from "react";
import ContractItem from "../Shared/ContractItem";

function Footer() {
  return (
    <>
      <section className="info_section ">
        <div className="container">
          <div className="info_top">
            <div className="row">
              <div className="col-md-3 ">
                <a className="navbar-brand" href="index.html">
                  Finter
                </a>
              </div>
              <div className="col-md-5 ">
                <div className="info_contact">
                  <ContractItem connect="" icon="fa fa-map-marker" content="Location" ></ContractItem>
                  <ContractItem connect="" icon="fa fa-phone" content="Call : +84 0900 333 007"></ContractItem>
                </div>
              </div>
              <div className="col-md-4 ">
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
              <div className="col-lg-3 col-md-6">
                <div className="info_detail">
                  <h5>Company</h5>
                  <p>
                    Randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info_form">
                  <h5>NEWSLETTER</h5>
                  <form>
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info_detail">
                  <h5>Services</h5>
                  <p>
                    Randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
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
      <footer className="footer_section">
        <div className="container">
          <p>
            © <span id="displayYear" /> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
