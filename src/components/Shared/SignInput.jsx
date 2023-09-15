import React from "react";

function SignInput(props){
    const {labelContent, typeInput = "text", nameInput, valueInput, handleInput} = props
    return(
        <div className="group">
        <label htmlFor="user" className="label text-white">
          {labelContent}
        </label>

        <input
          type={typeInput}
          className="input"
          name={nameInput}
          value={valueInput}
          onChange={handleInput}
          required
        />
      </div>
    )
}

export default SignInput