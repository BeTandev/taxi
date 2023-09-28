import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const { iconMenu, selected, content, connect } = props;
  let classNameCustom = ''
  if(selected){
    classNameCustom = "d-flex align-items-center d-block select"
  }else{
    classNameCustom = "d-flex align-items-center d-block"
  }
  return (
    <Link to={connect} className={classNameCustom}>
      <i className={iconMenu} /> <p>{content}</p>
    </Link>
  );
}

export default MenuItem;
