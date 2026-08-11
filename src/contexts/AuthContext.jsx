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

  useEffect(() => {
    const unsubscribe = observeAuthState(async (user) => {
      try {
        setCurrentUser(user);

        if (user) {
          const profile = await getUserProfile(user.uid);

          setUserProfile(profile);
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
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}