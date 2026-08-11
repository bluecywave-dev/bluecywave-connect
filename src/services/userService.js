import {
  doc,
  setDoc,
  getDoc,
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