import React from "react";

function InputBlock(props) {
  const {
    labelContent,
    typeInput = "text",
    idInput,
    valueInput,
    handleChange,
    isTextDark,
  } = props;

  let labelClass = "";

  if (isTextDark) {
    labelClass = "elem-group-label d-block text-dark";
  } else {
    labelClass = "elem-group-label d-block text-white";
  }
  
  return (
    <div className="elem-group">
      <label className={labelClass}>{labelContent}</label>
      <input
        className="elem-group-input rounded"
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
