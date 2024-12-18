import React from "react";

const Input = React.forwardRef(({ text }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className="bg-slate-900 rounded-md p-3 text-white font-mono"
      placeholder={text}
    />
  );
});

export default Input;
