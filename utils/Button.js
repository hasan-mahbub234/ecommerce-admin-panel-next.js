import React from 'react'

function Button({text, change, style, txtStyle}) {
  return (
    <button onClick={change} className={`bg-rose-600 text-white px-4 py-[6px] rounded-[3px] font-lato font-semibold text-[18px] border border-rose-800 hover:bg-rose-800 flex flex-row items-center tracking-[0.4px]  ${style && style}`}>{text}</button>
  )
}

export default Button