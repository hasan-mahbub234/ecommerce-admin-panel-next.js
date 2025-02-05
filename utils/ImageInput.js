import React from "react";

function ImageInput({ value, change, label, txtstyle, inputstyle }) {
  return (
    <div className="my-2 w-[30%]">
      <p
        className="font-poppins font-[500] text-[16px] my-2"
        style={txtstyle && txtstyle}
      >
        {label}
      </p>
      <div
        className="border-[2px] border-gray-400 rounded-[3px] flex flex-row items-center justify-center w-[200px] h-[200px]"
        style={inputstyle && inputstyle}
      >
        {value ? (
          <image src={value} className="w-[180px] h-[180px] rounded-[3px]" />
        ) : (
          <div className="border-2 border-dashed border-gray-400 rounded-[50px] p-3 flex items-center justify-center cursor-pointer">
            <i className="fa-solid fa-plus text-[20px] "></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageInput;
