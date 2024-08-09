import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-chat-app-a2d71.firebaseapp.com",
  projectId: "react-chat-app-a2d71",
  storageBucket: "react-chat-app-a2d71.appspot.com",
  messagingSenderId: "1098190986098",
  appId: "1:1098190986098:web:614c5743ad8a5c62ab1beb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
