import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { observeAuthState } from "../firebase/auth";
import { getUserProfile } from "../services/userService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUserProfile = async (uid) => {
    if (!uid) {
      setUserProfile(null);
      return null;
    }

    try {
      const profile = await getUserProfile(uid);

      setUserProfile(profile);

      return profile;
    } catch (error) {
      console.error(
        "Error refreshing user profile:",
        error
      );

      setUserProfile(null);

      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = observeAuthState(async (user) => {
      setLoading(true);

      try {
        setCurrentUser(user);

        if (user) {
          await refreshUserProfile(user.uid);
        } else {
          setUserProfile(null);
        }
      } catch (error) {
        console.error(
          "Error loading user profile:",
          error
        );

        setUserProfile(null);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        refreshUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}