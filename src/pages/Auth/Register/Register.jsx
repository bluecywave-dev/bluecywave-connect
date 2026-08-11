import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

import AuthCard from "../../../components/auth/AuthCard";
import AuthHeader from "../../../components/auth/AuthHeader";
import Input from "../../../components/common/Input";
import PasswordInput from "../../../components/auth/PasswordInput";
import Checkbox from "../../../components/common/Checkbox/Checkbox";
import Button from "../../../components/common/Button";

import { registerUser } from "../../../firebase/auth";
import { createUserProfile } from "../../../services/userService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const {
      fullName,
      email,
      password,
      confirmPassword,
    } = formData;

    // Validate full name
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    // Validate email
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Validate password
    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Terms and conditions
    if (!agree) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    try {
      setLoading(true);

      // Step 1: Create Firebase Authentication account
      const userCredential = await registerUser(
        email.trim(),
        password
      );

      const user = userCredential.user;

      console.log(
        "Firebase registration successful:",
        user.uid
      );

      // Step 2: Create Firestore user profile
      await createUserProfile({
        uid: user.uid,
        fullName: fullName.trim(),
        email: user.email,
      });

      console.log(
        "Firestore user profile created successfully."
      );

      setSuccess(
        "Account created successfully. Redirecting..."
      );

      // Step 3: Redirect after successful registration
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (firebaseError) {
      console.error(
        "Firebase registration error:",
        firebaseError
      );

      switch (firebaseError.code) {
        case "auth/email-already-in-use":
          setError(
            "An account with this email already exists."
          );
          break;

        case "auth/invalid-email":
          setError(
            "Please enter a valid email address."
          );
          break;

        case "auth/weak-password":
          setError(
            "Your password is too weak. Please choose a stronger password."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection and try again."
          );
          break;

        case "permission-denied":
          setError(
            "Your account was created, but the user profile could not be saved. Please check your Firestore permissions."
          );
          break;

        default:
          setError(
            "Registration failed. Please try again."
          );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <AuthCard>
        <AuthHeader
          title="Create Account"
          subtitle="Join Bluecywave Connect today."
        />

        {error && (
          <div className="auth-message auth-error">
            {error}
          </div>
        )}

        {success && (
          <div className="auth-message auth-success">
            {success}
          </div>
        )}

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Checkbox
            label="I agree to the Terms & Conditions"
            name="terms"
            checked={agree}
            onChange={(event) =>
              setAgree(event.target.checked)
            }
          />

          <Button
            text={
              loading
                ? "Creating Account..."
                : "Create Account"
            }
            type="submit"
            disabled={loading}
          />

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">
              Log in
            </Link>
          </p>
        </form>
      </AuthCard>
    </div>
  );
}

export default Register;