import React from "react";
import { Link } from "react-router-dom";

function ContractItem(props) {
  let contentItem = "";
  let iconItem = "";
  const { connect, icon, content } = props;
  if (icon) {
    iconItem = <i className={icon} aria-hidden="true" />;
  }
  if (content) {
    contentItem = <span>{content}</span>;
  }

  return (
    <Link to={connect}>
      {iconItem}
      {contentItem}
    </Link>
  );
}

export default ContractItem;
