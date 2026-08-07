import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu9x93mXd0xiLs_G4fqL_oDN1-esScMTw",
  authDomain: "bluecywaveconnect.firebaseapp.com",
  projectId: "bluecywaveconnect",
  storageBucket: "bluecywaveconnect.firebasestorage.app",
  messagingSenderId: "319100376663",
  appId: "1:319100376663:web:5ad41ad38b56648f123512",
  measurementId: "G-G2EWCJR803",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;