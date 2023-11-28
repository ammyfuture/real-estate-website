// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-ebbd4.firebaseapp.com",
  projectId: "mern-real-estate-ebbd4",
  storageBucket: "mern-real-estate-ebbd4.appspot.com",
  messagingSenderId: "995385558642",
  appId: "1:995385558642:web:e48ed5cb288cb0fb5524eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
