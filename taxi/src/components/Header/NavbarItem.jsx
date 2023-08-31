import React from "react";
import { Link } from "react-router-dom";

function NavbarItem(props) {
    let LoginIcon = ''
    const {connect, content, isShowLoginIcon} = props
    if(isShowLoginIcon){
        LoginIcon = <i className="fa fa-user" aria-hidden="true" />
    }
  return (
    <li className="nav-item nav-custom">
      <Link to={connect} className="nav-link">
        {LoginIcon}
        {content}
      </Link>
    </li>
  );
}

export default NavbarItem;
