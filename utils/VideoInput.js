"use client";
import React, { useState, useEffect } from "react";

function VideoInput({
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
    if (typeof value === "string") {
      setPreview(value);
    } else if (value instanceof File) {
      const videoUrl = URL.createObjectURL(value);
      setPreview(videoUrl);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const videoUrl = URL.createObjectURL(file);
      setPreview(videoUrl);
      change(file); // Send video file to parent
    }
  };

  return (
    <div className="relative my-10 top-10 w-[300px] h-[200px]">
      <p
        className="font-poppins font-[500] text-[16px] my-2"
        style={txtstyle && txtstyle}
      >
        {label}
        {required && <span className="text-[18px] text-red-600">*</span>}
      </p>

      <label
        className="border-[2px] border-gray-400 rounded-[3px] flex items-center justify-center w-full h-full cursor-pointer overflow-hidden bg-black"
        style={inputstyle && inputstyle}
      >
        {preview ? (
          <video
            src={preview}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="border-2 border-dashed border-gray-400 rounded-[6px] p-3 flex items-center justify-center text-white">
            <i className="fa-solid fa-video text-[20px]"></i>
          </div>
        )}
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
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

export default VideoInput;
