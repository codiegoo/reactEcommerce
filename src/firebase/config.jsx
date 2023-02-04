// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBymZN1lm_7Ps4-oRDV9wnAj1N7S3ZMg5k",
  authDomain: "reactecommercediego.firebaseapp.com",
  projectId: "reactecommercediego",
  storageBucket: "reactecommercediego.appspot.com",
  messagingSenderId: "39751967712",
  appId: "1:39751967712:web:6d9788eb9c641146a48185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)