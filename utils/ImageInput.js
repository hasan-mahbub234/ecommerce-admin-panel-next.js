"use client";
import React, { useState, useEffect } from "react";

function ImageInput({
  value,
  change,
  remove,
  label,
  txtstyle,
  inputstyle,
  required,
}) {
  const [preview, setPreview] = useState(value ? `${value}` : null);

  useEffect(() => {
    // Update preview if value changes externally
    if (typeof value === "string") {
      setPreview(value);
    } else if (value instanceof File) {
      const imageUrl = URL.createObjectURL(value);
      setPreview(imageUrl);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      change(file); // Pass file to parent
    }
  };

  return (
    <div className="relative my-2 w-[200px] h-[200px]">
      <p
        className="font-poppins font-[500] text-[16px] my-2"
        style={txtstyle && txtstyle}
      >
        {label}
        {required && <span className="text-[18px] text-red-600">*</span>}
      </p>

      <label
        className="border-[2px] border-gray-400 rounded-[3px] flex items-center justify-center w-full h-full cursor-pointer  overflow-hidden"
        style={inputstyle && inputstyle}
      >
        {preview ? (
          <img
            src={preview}
            alt="Selected"
            className="w-full h-full object-cover"
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
          required={required}
        />
      </label>

      {preview && (
        <button
          type="button"
          onClick={remove}
          className="absolute top-12 right-1 bg-gray-500/50 rounded-full text-[14px] text-white px-[9px] py-1 shadow font-bold transition-all"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default ImageInput;
