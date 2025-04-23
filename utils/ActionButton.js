import React from "react";

function ActionButton({ text, change, style, txtStyle, content }) {
  return (
    <button
      onClick={change}
      className={`text-white px-3 py-[2px] rounded-[3px] font-lato font-semibold text-[13px] flex flex-row items-center tracking-[0.4px]  ${
        style && style
      }`}
    >
      {text ? text : content()}
    </button>
  );
}

export default ActionButton;
