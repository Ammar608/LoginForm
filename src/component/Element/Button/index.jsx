import React from "react";

const Button = (props) => {
  const { children, classname = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold bg-black rounded-md ${classname} text-white hover:bg-blue-500`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
