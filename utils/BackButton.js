import React from 'react'

function BackButton({text, change, style, txtStyle}) {
  return (
    <button onClick={change} className={` text-[18px] text-gray-400 mr-3 flex flex-row items-center ${style && style}`}>
        <i className="fa-solid fa-arrow-left"></i>
    </button>
  )
}

export default BackButton;