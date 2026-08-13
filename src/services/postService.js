import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

// Firestore posts collection
const postsCollection = collection(db, "posts");

// Create a new community post
export const createPost = async ({
  authorId,
  authorName,
  authorUsername,
  authorLocation,
  content,
  category = "general",
  imageUrl = "",
}) => {
  if (!authorId) {
    throw new Error("Author ID is required.");
  }

  if (!content?.trim()) {
    throw new Error("Post content is required.");
  }

  const postData = {
    authorId,
    authorName: authorName?.trim() || "",
    authorUsername: authorUsername?.trim() || "",
    authorLocation: authorLocation?.trim() || "",
    content: content.trim(),
    category,
    imageUrl: imageUrl?.trim() || "",
    likesCount: 0,
    commentsCount: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    status: "published",
  };

  const postReference = await addDoc(
    postsCollection,
    postData
  );

  return postReference.id;
};

// Get published community posts
export const getPosts = async () => {
  const postsQuery = query(
    postsCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(postsQuery);

  return snapshot.docs
    .map((postDocument) => ({
      id: postDocument.id,
      ...postDocument.data(),
    }))
    .filter(
      (post) => post.status === "published"
    );
};

// Update a community post
export const updatePost = async ({
  postId,
  content,
  category,
  imageUrl,
}) => {
  if (!postId) {
    throw new Error("Post ID is required.");
  }

  if (!content?.trim()) {
    throw new Error("Post content is required.");
  }

  const postReference = doc(
    db,
    "posts",
    postId
  );

  await updateDoc(postReference, {
    content: content.trim(),
    category: category || "general",
    imageUrl: imageUrl?.trim() || "",
    updatedAt: serverTimestamp(),
  });
};

// Delete a community post
export const deletePost = async (postId) => {
  if (!postId) {
    throw new Error("Post ID is required.");
  }

  const postReference = doc(
    db,
    "posts",
    postId
  );

  await deleteDoc(postReference);
};