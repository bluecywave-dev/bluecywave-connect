import "./Dashboard.css";

import {
  FaBriefcase,
  FaStore,
  FaUsers,
  FaCalendarAlt,
  FaBookmark,
  FaUser,
  FaCheck,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function Dashboard() {
  const { currentUser, userProfile } = useAuth();

  const profileFields = [
    userProfile?.fullName,
    userProfile?.username,
    userProfile?.phone,
    userProfile?.location,
    userProfile?.bio,
  ];

  const completedFields = profileFields.filter(
    (field) => field?.trim()
  ).length;

  const completionPercentage = completedFields * 20;

  const quickActions = [
    {
      title: "Find Jobs",
      description: "Discover local job opportunities.",
      icon: <FaBriefcase />,
      status: "coming-soon",
    },
    {
      title: "Marketplace",
      description: "Explore products and local services.",
      icon: <FaStore />,
      status: "coming-soon",
    },
    {
      title: "Community",
      description: "Connect with your local community.",
      icon: <FaUsers />,
      status: "coming-soon",
    },
    {
      title: "Events",
      description: "Discover upcoming local events.",
      icon: <FaCalendarAlt />,
      status: "coming-soon",
    },
    {
      title: "Saved Items",
      description: "View opportunities and items you saved.",
      icon: <FaBookmark />,
      status: "coming-soon",
    },
    {
      title: "My Profile",
      description: "View and manage your profile.",
      icon: <FaUser />,
      link: "/profile",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* Welcome Header */}

      <section className="dashboard-welcome">

        <div>
          <p className="dashboard-eyebrow">
            Bluecywave Connect
          </p>

          <h1>
            Welcome back,{" "}
            {userProfile?.fullName || "User"} 👋
          </h1>

          <p className="dashboard-subtitle">
            Here's what's happening around you.
          </p>
        </div>

      </section>

      {/* Profile Completion */}

      {completionPercentage < 100 ? (
        <section className="dashboard-completion">

          <div className="dashboard-completion-top">

            <div>
              <h2>Complete your profile</h2>

              <p>
                Add your information to get the most
                from Bluecywave Connect.
              </p>
            </div>

            <strong>
              {completionPercentage}%
            </strong>

          </div>

          <div className="dashboard-progress">

            <div
              className="dashboard-progress-fill"
              style={{
                width: `${completionPercentage}%`,
              }}
            />

          </div>

          <div className="dashboard-completion-bottom">

            <span>
              {completedFields} of 5 sections completed
            </span>

            <Link to="/profile/edit">
              Complete Profile
            </Link>

          </div>

        </section>
      ) : (
        <section className="dashboard-profile-complete">

          <div className="complete-icon">
            <FaCheck />
          </div>

          <div>
            <h2>Your profile is complete</h2>

            <p>
              Your Bluecywave Connect profile is ready.
            </p>
          </div>

          <Link to="/profile">
            View Profile
          </Link>

        </section>
      )}

      {/* Quick Actions */}

      <section className="dashboard-section">

        <div className="dashboard-section-header">

          <div>
            <h2>Quick Actions</h2>

            <p>
              Quickly access the things you need.
            </p>
          </div>

        </div>

        <div className="quick-actions-grid">

          {quickActions.map((action) => {

            if (action.link) {
              return (
                <Link
                  key={action.title}
                  to={action.link}
                  className="quick-action-card"
                >

                  <div className="quick-action-icon">
                    {action.icon}
                  </div>

                  <div className="quick-action-content">

                    <h3>
                      {action.title}
                    </h3>

                    <p>
                      {action.description}
                    </p>

                  </div>

                </Link>
              );
            }

            return (
              <div
                key={action.title}
                className="quick-action-card quick-action-disabled"
              >

                <div className="quick-action-icon">
                  {action.icon}
                </div>

                <div className="quick-action-content">

                  <div className="quick-action-title">

                    <h3>
                      {action.title}
                    </h3>

                    <span>
                      Coming Soon
                    </span>

                  </div>

                  <p>
                    {action.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* Future Opportunities */}

      <section className="dashboard-section">

        <div className="dashboard-section-header">

          <div>
            <h2>Opportunities Near You</h2>

            <p>
              Jobs and opportunities from your community
              will appear here.
            </p>
          </div>

        </div>

        <div className="dashboard-empty-state">

          <div className="empty-state-icon">
            <FaBriefcase />
          </div>

          <h3>
            Opportunities are coming soon
          </h3>

          <p>
            Once the Opportunities system is
            available, you'll see relevant local
            opportunities here.
          </p>

        </div>

      </section>

      {/* Future Community */}

      <section className="dashboard-section">

        <div className="dashboard-section-header">

          <div>
            <h2>Community</h2>

            <p>
              Stay connected with what's happening
              around your community.
            </p>
          </div>

        </div>

        <div className="dashboard-empty-state">

          <div className="empty-state-icon">
            <FaUsers />
          </div>

          <h3>
            Your community hub is coming soon
          </h3>

          <p>
            Community announcements, events,
            promotions, and local updates will
            appear here.
          </p>

        </div>

      </section>

      {/* Authentication Information */}

      <section className="dashboard-section dashboard-account">

        <div className="dashboard-section-header">

          <div>
            <h2>Account Information</h2>

            <p>
              Your current Bluecywave Connect account.
            </p>
          </div>

        </div>

        <div className="dashboard-user-info">

          <div>
            <strong>Email</strong>
            <span>
              {currentUser?.email}
            </span>
          </div>

          <div>
            <strong>Account Type</strong>
            <span>
              {userProfile?.accountType || "User"}
            </span>
          </div>

          <div>
            <strong>Profile Status</strong>
            <span>
              {userProfile?.profileCompleted
                ? "Complete"
                : "Incomplete"}
            </span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;