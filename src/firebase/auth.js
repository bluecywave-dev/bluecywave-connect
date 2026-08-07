import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../config/firebaseConfig";

// Register
export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Reset Password
export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

// Logout
export const logoutUser = () =>
  signOut(auth);

// Listen for auth changes
export const observeAuthState = (callback) =>
  onAuthStateChanged(auth, callback);