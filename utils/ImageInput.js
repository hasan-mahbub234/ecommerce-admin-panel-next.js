"use client";
import React, { useState } from "react";

function ImageInput({ value, change, label, txtstyle, inputstyle }) {
  const [preview, setPreview] = useState(value ? `${value}` : null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // console.log(file);
      setPreview(imageUrl);
      change(file); // Pass the file, not the URL
    }
  };

  return (
    <div className="my-2 w-[30%]">
      <p
        className="font-poppins font-[500] text-[16px] my-2"
        style={txtstyle && txtstyle}
      >
        {label}
      </p>
      <label
        className="border-[2px] border-gray-400 rounded-[3px] flex flex-row items-center justify-center w-[200px] h-[200px] cursor-pointer"
        style={inputstyle && inputstyle}
      >
        {preview ? (
          <img
            src={preview}
            alt="Selected"
            className="w-[180px] h-[180px] rounded-[3px]"
          />
        ) : (
          <div className="border-2 border-dashed border-gray-400 rounded-[50px] p-3 flex items-center justify-center">
            <i className="fa-solid fa-plus text-[20px] "></i>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default ImageInput;
