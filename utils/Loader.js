"use client";
import React from "react";

function Loader({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}

export default Loader;
