import React from "react";

function MessageItem(props) {
  const {name, email, phoneNumber, message} = props.data
  // console.log(props.data)
  return (
    <div className="message-item mb-4">
      <div className="wrap-title-message-item d-flex">
        <strong className="d-block col-3">{name}</strong>
        <p className="col-6">{email}</p>
        <p className="col-3 phonemessage-message-item">{phoneNumber}</p>
      </div>
      <div className="wrap-message-message-item">
        <p className="col-12">{message}</p>
      </div>
    </div>
  );
}

export default MessageItem