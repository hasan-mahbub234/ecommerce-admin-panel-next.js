import React from "react";

function TextArea({
  label,
  placeholder,
  value,
  change,
  txtstyle,
  inputstyle,
  style,
  type,
}) {
  return (
    <div className={`my-2 ${style && style}`}>
      {label && (
        <p
          className="font-poppins font-[500] text-[16px] my-1"
          style={txtstyle && txtstyle}
        >
          {label}
        </p>
      )}

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => change(e.target.value)}
        className="border-[2px] border-gray-400 rounded-[3px] py-2 px-3 placeholder:text-gray-300 text-gray-600 font-lato text-[14px] w-[500px]"
        style={inputstyle && inputstyle}
        rows={5}
      />
    </div>
  );
}

export default TextArea;
