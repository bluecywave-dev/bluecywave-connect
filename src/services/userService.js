import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

// Create a user profile in Firestore
export const createUserProfile = async ({
  uid,
  fullName,
  email,
}) => {
  const userRef = doc(db, "users", uid);

  await setDoc(userRef, {
    uid,
    fullName,
    email,
    accountType: "user",
    profileCompleted: false,
    createdAt: serverTimestamp(),
  });
};

// Get a user's profile from Firestore
export const getUserProfile = async (uid) => {
  const userRef = doc(db, "users", uid);

  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    return null;
  }

  return {
    id: userSnapshot.id,
    ...userSnapshot.data(),
  };
};

// Update a user's profile
export const updateUserProfile = async ({
  uid,
  fullName,
  username,
  phone,
  location,
  bio,
}) => {
  const userRef = doc(db, "users", uid);

  const profileCompleted =
    Boolean(fullName?.trim()) &&
    Boolean(username?.trim()) &&
    Boolean(phone?.trim()) &&
    Boolean(location?.trim());

  await updateDoc(userRef, {
    fullName: fullName.trim(),
    username: username.trim(),
    phone: phone.trim(),
    location: location.trim(),
    bio: bio?.trim() || "",
    profileCompleted,
  });
};