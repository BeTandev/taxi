import React from "react";

function UserInformationItem(props){
    const {id, username, password, email} = props.data
    return(
        <div className="user-information-item">
            <div className="wrap-id">
              <strong>Id: </strong>
              <span>{id}</span>
            </div>
            <div className="wrap-user">
              <strong>User: </strong>
              <span>{username}</span>
            </div>
            <div className="wrap-password">
              <strong>Password: </strong>
              <span>{password}</span>
            </div>
            <div className="wrap-email">
              <strong>Email: </strong>
              <span>{email}</span>
            </div>
          </div>
    )
}

export default UserInformationItem