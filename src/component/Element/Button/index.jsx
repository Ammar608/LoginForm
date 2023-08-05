import React from "react";

const Button = (props) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold bg-black rounded-md ${classname} text-white hover:bg-blue-500`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
