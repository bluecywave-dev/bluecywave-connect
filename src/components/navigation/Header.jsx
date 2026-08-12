import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Header.css";

import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaTachometerAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../contexts/AuthContext";
import { logoutUser } from "../../firebase/auth";

function Header() {
  const { currentUser, userProfile } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const profileMenuRef = useRef(null);
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();

      setMenuOpen(false);

      console.log("Logout successful.");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Close the profile menu when clicking outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
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

  return (
    <header className="header">

      <div className="logo">
        <strong>Bluecywave</strong>
        <span> Connect</span>
      </div>

      <div className="search-box">
        <FaSearch />

        <input
          type="search"
          placeholder="Search Bluecywave..."
          aria-label="Search"
        />
      </div>

      <div className="header-icons">

        {currentUser ? (
          <>
            {/* Notifications */}
            <button
              type="button"
              className="header-icon-button"
              aria-label="Notifications"
            >
              <FaBell />
            </button>

            {/* Profile */}
            <div
              className="profile-menu-wrapper"
              ref={profileMenuRef}
            >
              <button
                type="button"
                onClick={() => navigate("/profile")}
                aria-label="Profile"
              >
                
               <FaUserCircle />
              </button>

              {menuOpen && (
                <div className="account-menu">

                  {/* User information */}
                  <div className="account-menu-header">

                    <div className="account-menu-avatar">
                      <FaUserCircle />
                    </div>

                    <div className="account-menu-user">
                      <strong>
                        {userProfile?.fullName ||
                          "Bluecywave User"}
                      </strong>

                      <span>
                        {currentUser.email}
                      </span>
                    </div>

                  </div>

                  <div className="account-menu-divider" />

                  {/* Dashboard */}
                  <Link
                    to="/dashboard"
                    className="account-menu-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaTachometerAlt />

                    <span>
                      Dashboard
                    </span>
                  </Link>

                  {/* Profile */}
                  <Link
                    to="/profile"
                    className="account-menu-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUser />

                    <span>
                      My Profile
                    </span>
                  </Link>

                  {/* Settings */}
                  <Link
                    to="/settings"
                    className="account-menu-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaCog />

                    <span>
                      Settings
                    </span>
                  </Link>

                  <div className="account-menu-divider" />

                  {/* Logout */}
                  <button
                    type="button"
                    className="account-menu-item account-menu-logout"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt />

                    <span>
                      Logout
                    </span>
                  </button>

                </div>
              )}
            </div>
          </>
        ) : (
          <span className="header-guest">
            Guest
          </span>
        )}

      </div>

    </header>
  );
}

export default Header;