import React from "react";
import FormLogin from "../component/Fragment/FromLogin";
import AuthLayout from "../component/Layout/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't Have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
