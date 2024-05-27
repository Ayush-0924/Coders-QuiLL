// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tech-tales-387ea.firebaseapp.com",
  projectId: "tech-tales-387ea",
  storageBucket: "tech-tales-387ea.appspot.com",
  messagingSenderId: "130258437636",
  appId: "1:130258437636:web:17d569959f775275369751"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);