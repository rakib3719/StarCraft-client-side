// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBrTvcMMQAxCxCk1mKjB7geo87l5KkDGI",
  authDomain: "starcraft-1.firebaseapp.com",
  projectId: "starcraft-1",
  storageBucket: "starcraft-1.appspot.com",
  messagingSenderId: "534172222846",
  appId: "1:534172222846:web:8eeba70d18eb12432edf2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;