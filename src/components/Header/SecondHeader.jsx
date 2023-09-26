import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import ContractItem from "../Shared/ContractItem";
import { Dropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

function SecondHeader() {

  const usernameLogin = useSelector(
    (state) => state.USERNAMELOGIN.usernameLogin
  );
  let loginbtn = ''


  if (!usernameLogin) {
    loginbtn = (<NavbarItem
      connect="/login"
      content="Đăng nhập"
      isShowLoginIcon
    ></NavbarItem>)
  } else {
    loginbtn = (<li className="nav-item nav-custom">
      <Link className="nav-link">Hi! {usernameLogin}</Link>
    </li>)
  }


  return (
    <header className="header_section sticky-top bg-dark">
      <div className="header_top">
        <div className="container-fluid header_top_container">
          <div className="contact_nav">
            <ContractItem
              connect="/booking"
              icon="fa fa-map-marker"
              content="Đặt xe ngay"
            ></ContractItem>
            <ContractItem
              connect=""
              icon="fa fa-phone"
              content="Đường dây nóng: +84 0900 333 007"
            ></ContractItem>
            <ContractItem
              connect=""
              icon="fa fa-envelope"
              content="nhuttantranle@gmail.com"
            ></ContractItem>
          </div>
          <div className="social_box">
            <ContractItem
              connect="https://www.facebook.com/"
              icon="fa fa-facebook"
            ></ContractItem>
            <ContractItem
              connect="https://www.x.com/"
              icon="fa fa-twitter"
            ></ContractItem>
            <ContractItem
              connect="https://www.linkedin.com/"
              icon="fa fa-linkedin"
            ></ContractItem>
            <ContractItem
              connect="https://www.instagram.com/"
              icon="fa fa-instagram"
            ></ContractItem>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
      <Link to="/" className="navbar-brand text-white">
        Finter
      </Link>
      <Dropdown className="dropdown-custom">
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="dropdown-custom"
        >
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="dropdown-item-custom">
            <Link to="/">Trang Chủ</Link>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item-custom">
            <Link to="/about-us">About Us</Link>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item-custom">
            <Link to="/uu-dai">Ưu đãi</Link>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item-custom">
            <Link to="/my-team">Thành Viên</Link>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item-custom">
            <Link to="/partner">Đối Tác</Link>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item-custom">
            <Link to="/login">Đăng nhập</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <NavbarItem connect="/" content="Trang Chủ"></NavbarItem>
          <NavbarItem connect="/about-us" content="About Us"></NavbarItem>
          <NavbarItem connect="/uu-dai" content="Ưu đãi"></NavbarItem>
          <NavbarItem connect="/my-team" content="Thành Viên"></NavbarItem>
          <NavbarItem connect="/partner" content="Đối Tác"></NavbarItem>
          {loginbtn}
        </ul>
      </div>
    </nav>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
