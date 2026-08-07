import "./Login.css";
import { Link } from "react-router-dom";

import AuthCard from "../../../components/auth/AuthCard";
import AuthHeader from "../../../components/auth/AuthHeader";
import Input from "../../../components/common/Input";
import PasswordInput from "../../../components/auth/PasswordInput";
import Button from "../../../components/common/Button";

function Login() {
  return (
    <div className="login-page">

      <AuthCard>

        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to your Bluecywave Connect account."
        />

        <Input
          type="email"
          placeholder="Email Address"
        />

        <PasswordInput
          placeholder="Password"
        />

        <Button
          text="Login"
        />

        <div className="login-links">

         <Link to="/forgot-password">
         Forgot Password?
         </Link>

         <Link to="/register">
          Create Account
         </Link>

        </div>

      </AuthCard>

    </div>
  );
}

export default Login;