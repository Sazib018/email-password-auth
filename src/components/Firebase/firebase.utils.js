// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP6tGUs3lL9TTeznI_qiODn1aoqUgcDJs",
  authDomain: "email-password-auth-8edb2.firebaseapp.com",
  projectId: "email-password-auth-8edb2",
  storageBucket: "email-password-auth-8edb2.firebasestorage.app",
  messagingSenderId: "568347423753",
  appId: "1:568347423753:web:9cf99ccf6e896a9c8474d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;