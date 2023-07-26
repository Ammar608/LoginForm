import React from "react";
import FormLogin from "../component/Fragment/FromLogin";
import AuthLayout from "../component/Layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
