import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaTachometerAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Header.css";

import { useAuth } from "../../contexts/AuthContext";
import { logoutUser } from "../../firebase/auth";

function Header() {
  const { currentUser, userProfile } = useAuth();

  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const accountMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target)
      ) {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = async () => {
    try {
      setAccountMenuOpen(false);

      await logoutUser();

      console.log("Logout successful.");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="header">

      {/* Logo */}
      <Link to="/" className="logo">
        <strong>Bluecywave</strong>
        <span> Connect</span>
      </Link>

      {/* Search */}
      <div className="search-box">
        <FaSearch />

        <input
          type="search"
          placeholder="Search Bluecywave..."
          aria-label="Search"
        />
      </div>

      {/* Header Actions */}
      <div className="header-icons">

        {currentUser ? (
          <>
            {/* Notifications */}
            <button
              type="button"
              className="header-icon-button"
              aria-label="Notifications"
              title="Notifications"
            >
              <FaBell />
            </button>

            {/* Account */}
            <div
              className="account-menu-container"
              ref={accountMenuRef}
            >
              <button
                type="button"
                className={`header-icon-button ${
                  accountMenuOpen
                    ? "account-button-active"
                    : ""
                }`}
                onClick={() =>
                  setAccountMenuOpen(
                    (previous) => !previous
                  )
                }
                aria-label="Account menu"
                aria-expanded={accountMenuOpen}
                title="Account"
              >
                <FaUserCircle />
              </button>

              {accountMenuOpen && (
                <div className="account-dropdown">

                  {/* User information */}
                  <div className="account-dropdown-header">

                    <div className="account-dropdown-avatar">
                      <FaUserCircle />
                    </div>

                    <div className="account-dropdown-user">

                      <strong>
                        {userProfile?.fullName ||
                          "User"}
                      </strong>

                      <span>
                        {userProfile?.username
                          ? `@${userProfile.username}`
                          : currentUser.email}
                      </span>

                    </div>

                  </div>

                  <div className="account-dropdown-divider" />

                  {/* Dashboard */}
                  <Link
                    to="/dashboard"
                    className="account-dropdown-item"
                    onClick={() =>
                      setAccountMenuOpen(false)
                    }
                  >
                    <FaTachometerAlt />

                    <span>Dashboard</span>
                  </Link>

                  {/* Profile */}
                  <Link
                    to="/profile"
                    className="account-dropdown-item"
                    onClick={() =>
                      setAccountMenuOpen(false)
                    }
                  >
                    <FaUser />

                    <span>Profile</span>
                  </Link>

                  {/* Settings */}
                  <Link
                    to="/settings"
                    className="account-dropdown-item"
                    onClick={() =>
                      setAccountMenuOpen(false)
                    }
                  >
                    <FaCog />

                    <span>Settings</span>
                  </Link>

                  <div className="account-dropdown-divider" />

                  {/* Logout */}
                  <button
                    type="button"
                    className="account-dropdown-item account-logout"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt />

                    <span>Logout</span>
                  </button>

                </div>
              )}
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="header-guest"
          >
            Login
          </Link>
        )}

      </div>

    </header>
  );
}

export default Header;