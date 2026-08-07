import "./ForgotPassword.css";
import { Link } from "react-router-dom";

import AuthCard from "../../../components/auth/AuthCard";
import AuthHeader from "../../../components/auth/AuthHeader";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

function ForgotPassword() {
  return (
    <div className="forgot-page">

      <AuthCard>

        <AuthHeader
          title="Forgot Password"
          subtitle="Enter your email to receive a password reset link."
        />

        <Input
          type="email"
          placeholder="Email Address"
        />

        <Button
          text="Send Reset Link"
        />

        <div className="forgot-links">

          <Link to="/login">
            Back to Login
          </Link>

        </div>

      </AuthCard>

    </div>
  );
}

export default ForgotPassword;