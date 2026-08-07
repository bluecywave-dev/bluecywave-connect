import { useState } from "react";
import "./Register.css";

import AuthCard from "../../../components/auth/AuthCard";
import AuthHeader from "../../../components/auth/AuthHeader";

import Input from "../../../components/common/Input";
import PasswordInput from "../../../components/auth/PasswordInput";
import Checkbox from "../../../components/common/Checkbox/Checkbox";
import Button from "../../../components/common/Button";

function Register() {
  const [agree, setAgree] = useState(false);

  return (
   <div className="auth-page">
    <AuthCard>
      <AuthHeader
        title="Create Account"
        subtitle="Join Bluecywave Connect today."
      />

      <Input
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
      />

      <PasswordInput
        placeholder="Password"
      />

      <PasswordInput
        placeholder="Confirm Password"
      />

      <Checkbox
        label="I agree to the Terms & Conditions"
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />

      <Button
        text="Create Account"
      />
    </AuthCard>
   </div> 
  );
}

export default Register;