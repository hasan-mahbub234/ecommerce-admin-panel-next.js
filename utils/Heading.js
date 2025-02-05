import React from "react";

function Heading({ title, style }) {
  return (
    <div className="mb-5" style={style && style}>
      <p className="font-open-sans font-semibold text-[24px] text-slate-800">
        {title}
      </p>
    </div>
  );
}

export default Heading;
