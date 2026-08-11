import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

import AuthCard from "../../../components/auth/AuthCard";
import AuthHeader from "../../../components/auth/AuthHeader";
import Input from "../../../components/common/Input";
import PasswordInput from "../../../components/auth/PasswordInput";
import Button from "../../../components/common/Button";

import { loginUser } from "../../../firebase/auth";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    const { email, password } = formData;

    // Validate email
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Validate password
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await loginUser(
        email.trim(),
        password
      );

      console.log(
        "Firebase login successful:",
        userCredential.user.uid
      );

      setSuccess("Login successful. Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (firebaseError) {
      console.error(
        "Firebase login error:",
        firebaseError.code
      );

      switch (firebaseError.code) {
        case "auth/invalid-credential":
          setError(
            "Invalid email or password. Please check your details and try again."
          );
          break;

        case "auth/user-not-found":
          setError(
            "No account was found with this email address."
          );
          break;

        case "auth/wrong-password":
          setError(
            "The password you entered is incorrect."
          );
          break;

        case "auth/invalid-email":
          setError(
            "Please enter a valid email address."
          );
          break;

        case "auth/too-many-requests":
          setError(
            "Too many login attempts. Please wait a while and try again."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection and try again."
          );
          break;

        default:
          setError(
            "Login failed. Please try again."
          );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <AuthCard>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to your Bluecywave Connect account."
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
          className="login-form"
          onSubmit={handleSubmit}
        >
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
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button
            text={
              loading
                ? "Signing In..."
                : "Login"
            }
            type="submit"
            disabled={loading}
          />

          <div className="login-links">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>

            <Link to="/register">
              Create Account
            </Link>
          </div>
        </form>
      </AuthCard>
    </div>
  );
}

export default Login;