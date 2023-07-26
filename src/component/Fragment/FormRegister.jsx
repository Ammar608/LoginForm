import React from "react";
import Button from "../Element/Button";
import InputForm from "../Element/input/index.";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert your name"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="text"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
