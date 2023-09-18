import React from "react";

function SubmitBtn(props){
  const {content} = props
    return(
        <div className="group">
        <button type="submit" className="button">
          {content}
        </button>
      </div>
    )
}

export default SubmitBtn