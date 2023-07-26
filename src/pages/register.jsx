import React from "react";
import AuthLayout from "../component/Layout/AuthLayout";
import FormRegister from "../component/Fragment/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
