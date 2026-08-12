import "./Profile.css";

import {
  FaCheck,
  FaEdit,
  FaUserCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { currentUser, userProfile } = useAuth();

  const profileFields = [
    {
      label: "Full Name",
      value: userProfile?.fullName,
    },
    {
      label: "Username",
      value: userProfile?.username,
    },
    {
      label: "Phone",
      value: userProfile?.phone,
    },
    {
      label: "Location",
      value: userProfile?.location,
    },
    {
      label: "Bio",
      value: userProfile?.bio,
    },
  ];

  const completedFields = profileFields.filter(
    (field) => field.value?.trim()
  ).length;

  const completionPercentage =
    completedFields * 20;

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* Profile Header */}
        <div className="profile-header">

          <div className="profile-avatar">
            <FaUserCircle />
          </div>

          <h1>
            {userProfile?.fullName || "User"}
          </h1>

          <p>
            {currentUser?.email}
          </p>

          <Link
            to="/profile/edit"
            className="edit-profile-button"
          >
            <FaEdit />
            Edit Profile
          </Link>

        </div>

        {/* Profile Completion */}
        <div className="profile-completion">

          <div className="completion-header">

            <div>
              <h2>Profile Completion</h2>

              <p>
                {completionPercentage === 100
                  ? "Your profile is complete."
                  : "Complete your profile to get the most from Bluecywave Connect."}
              </p>
            </div>

            <strong>
              {completionPercentage}%
            </strong>

          </div>

          <div className="completion-bar">

            <div
              className="completion-progress"
              style={{
                width: `${completionPercentage}%`,
              }}
            />

          </div>

          <div className="completion-status">

            {profileFields.map((field) => {

              const completed =
                Boolean(field.value?.trim());

              return (
                <div
                  className={`completion-item ${
                    completed
                      ? "completed"
                      : ""
                  }`}
                  key={field.label}
                >

                  <span className="completion-icon">
                    {completed ? (
                      <FaCheck />
                    ) : (
                      ""
                    )}
                  </span>

                  <span>
                    {field.label}
                  </span>

                </div>
              );
            })}

          </div>

          {completionPercentage < 100 && (
            <Link
              to="/profile/edit"
              className="complete-profile-link"
            >
              Complete Your Profile
            </Link>
          )}

        </div>

        {/* Profile Details */}
        <div className="profile-details">

          <div className="profile-item">
            <strong>Username:</strong>

            <span>
              {userProfile?.username || "Not set"}
            </span>
          </div>

          <div className="profile-item">
            <strong>Phone:</strong>

            <span>
              {userProfile?.phone || "Not set"}
            </span>
          </div>

          <div className="profile-item">
            <strong>Location:</strong>

            <span>
              {userProfile?.location || "Not set"}
            </span>
          </div>

          <div className="profile-item">
            <strong>Bio:</strong>

            <span>
              {userProfile?.bio || "No bio added yet."}
            </span>
          </div>

          <div className="profile-item">
            <strong>Account Type:</strong>

            <span>
              {userProfile?.accountType || "User"}
            </span>
          </div>

          <div className="profile-item">
            <strong>Profile Completed:</strong>

            <span>
              {userProfile?.profileCompleted
                ? "Yes"
                : "No"}
            </span>
          </div>

          <div className="profile-item">
            <strong>UID:</strong>

            <span>
              {currentUser?.uid}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;