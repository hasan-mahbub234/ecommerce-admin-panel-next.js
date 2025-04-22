"use client";
import React, { useState } from "react";

function SelectInput({
  label,
  placeholder,
  value,
  change,
  txtstyle,
  inputstyle,
  style,
  dropdownOptions,
  renderOption, // Custom rendering function
  required,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={`my-2 ${style && style}`}>
      {label && (
        <p
          className="font-poppins font-[500] text-[16px] my-2"
          style={txtstyle}
        >
          {label}{" "}
          {required && <span className="text-[18px] text-red-600">*</span>}
        </p>
      )}

      <div className="relative">
        <div
          className="border-[2px] border-gray-400 rounded-[3px] py-2 px-3 text-gray-600 font-lato text-[14px] w-[500px] flex flex-row items-center justify-between cursor-pointer"
          style={inputstyle}
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <div className="flex flex-row items-center">
            {value.icon && value.icon()}
            {value.image && (
              <img src={value.image} className="w-[15px] h-[15px] mr-3" />
            )}
            <p className={`${value ? "text-gray-600" : "text-gray-600"}`}>
              {value.name ? value.name : value || placeholder}
            </p>
          </div>
          <i className="fa-solid fa-chevron-down text-gray-600"></i>
        </div>

        {showDropdown && (
          <div className="absolute z-10 w-[300px] bg-white shadow-lg mt-1 border border-gray-300 rounded">
            {dropdownOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  change(option);
                  setShowDropdown(false);
                }}
              >
                {renderOption ? renderOption(option) : option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectInput;
