import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";

import "./EditProfile.css";

import { useAuth } from "../../../contexts/AuthContext";
import { updateUserProfile } from "../../../services/userService";

function EditProfile() {
  const navigate = useNavigate();

const {
  currentUser,
  userProfile,
  refreshUserProfile,
} = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phone: "",
    location: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (userProfile) {
      setFormData({
        fullName: userProfile.fullName || "",
        username: userProfile.username || "",
        phone: userProfile.phone || "",
        location: userProfile.location || "",
        bio: userProfile.bio || "",
      });
    }
  }, [userProfile]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.username.trim()) {
      setError("Please enter a username.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.location.trim()) {
      setError("Please enter your location.");
      return;
    }

    try {
      setLoading(true);

        await updateUserProfile({
        uid: currentUser.uid,
        fullName: formData.fullName,
        username: formData.username,
        phone: formData.phone,
        location: formData.location,
        bio: formData.bio,
});

// Reload the updated profile from Firestore
await refreshUserProfile(currentUser.uid);

setSuccess("Profile updated successfully.");

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (error) {
      console.error(
        "Profile update error:",
        error
      );

      setError(
        "Unable to update your profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-profile-page">

      <div className="edit-profile-card">

        <div className="edit-profile-header">

          <Link
            to="/profile"
            className="back-profile-link"
          >
            <FaArrowLeft />
            Back to Profile
          </Link>

          <h1>Edit Profile</h1>

          <p>
            Update your Bluecywave Connect profile information.
          </p>

        </div>

        {error && (
          <div className="edit-profile-message edit-profile-error">
            {error}
          </div>
        )}

        {success && (
          <div className="edit-profile-message edit-profile-success">
            {success}
          </div>
        )}

        <form
          className="edit-profile-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label htmlFor="fullName">
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              disabled={loading}
            />

          </div>

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={currentUser?.email || ""}
              disabled
            />

            <small>
              Your email address is managed by Firebase Authentication.
            </small>

          </div>

          <div className="form-group">

            <label htmlFor="username">
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
            />

          </div>

          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />

          </div>

          <div className="form-group">

            <label htmlFor="location">
              Location
            </label>

            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Ughelli, Delta State"
              value={formData.location}
              onChange={handleChange}
              disabled={loading}
            />

          </div>

          <div className="form-group">

            <label htmlFor="bio">
              Bio
            </label>

            <textarea
              id="bio"
              name="bio"
              placeholder="Tell people a little about yourself..."
              value={formData.bio}
              onChange={handleChange}
              rows="5"
              disabled={loading}
            />

          </div>

          <button
            type="submit"
            className="save-profile-button"
            disabled={loading}
          >
            <FaSave />

            {loading
              ? "Saving Profile..."
              : "Save Profile"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProfile;