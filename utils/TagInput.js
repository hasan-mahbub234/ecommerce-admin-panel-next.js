import React, { useState } from "react";
//import { X } from "lucide-react"; // optional: using lucide icons

function TagInput({
  label,
  placeholder,
  value,
  change,
  txtstyle,
  inputstyle,
  style,
}) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();

      // Ensure value is always an array
      const currentTags = Array.isArray(value) ? value : [];

      if (!currentTags.includes(input.trim())) {
        const newTags = [...currentTags, input.trim()];
        change(newTags); // This sends ["tag1", "tag2", ...]
      }

      setInput("");
    }
  };

  const removeTag = (index) => {
    const newTags = [...value];
    newTags.splice(index, 1);
    change(newTags);
  };

  return (
    <div className={`my-2 ${style || ""}`}>
      {label && (
        <p
          className="font-poppins font-[500] text-[16px] my-2"
          style={txtstyle}
        >
          {label}
        </p>
      )}
      <div
        className="flex flex-wrap gap-2 border-[2px] border-gray-400 rounded-[3px] py-2 px-3 min-h-[48px] w-[500px] items-center"
        style={inputstyle}
      >
        {value.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-gray-800 px-2 py-1 rounded-full text-sm font-lato font-semibold"
          >
            {tag}
            <button
              className="ml-1 text-gray-600 hover:text-red-500 text-[10px]"
              onClick={() => removeTag(index)}
            >
              X
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow border-none outline-none min-w-[120px] text-gray-600 font-lato text-[14px] placeholder:text-gray-300"
        />
      </div>
    </div>
  );
}

export default TagInput;
