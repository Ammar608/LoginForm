import React from "react";
import Button from "../Element/Button";
import InputForm from "../Element/input/index.";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
