import React from "react";

function InputBlock(props) {
  const {
    labelContent,
    typeInput = "text",
    idInput,
    valueInput,
    handleChange,
    isTextDark,
    checkPhoneNumber
  } = props;

  let labelClass = "";

  if (isTextDark) {
    labelClass = "elem-group-label d-block text-dark";
  } else {
    labelClass = "elem-group-label d-block text-white";
  }

  let inputClass = ""
  if(checkPhoneNumber){
    inputClass = "elem-group-input rounded mt-3"
  }else{
    inputClass = "elem-group-input rounded"
  }
  
  return (
    <div className="elem-group">
      <label className={labelClass}>{labelContent}</label>
      {checkPhoneNumber && valueInput.length < 10 && <p className="text-danger warning position-absolute">* Số điện thoại phải đủ 10 số</p>}
      {checkPhoneNumber && valueInput.length > 10 && <p className="text-danger warning position-absolute">* Số điện thoại phải đủ 10 số</p>}
      <input
        className={inputClass}
        type={typeInput}
        id={idInput}
        name={idInput}
        value={valueInput}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default InputBlock;
