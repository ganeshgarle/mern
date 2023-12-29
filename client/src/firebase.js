// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-a1ed2.firebaseapp.com",
  projectId: "mern-a1ed2",
  storageBucket: "mern-a1ed2.appspot.com",
  messagingSenderId: "358134693711",
  appId: "1:358134693711:web:f47f0e424a2c1454170f3a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
