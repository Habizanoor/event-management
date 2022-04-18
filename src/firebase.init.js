// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbkWSf_VY2rdfdUuHbb8K-VzOj48JPzYE",
  authDomain: "assignment10-33520.firebaseapp.com",
  projectId: "assignment10-33520",
  storageBucket: "assignment10-33520.appspot.com",
  messagingSenderId: "267834369326",
  appId: "1:267834369326:web:dd4182433a0407f81446bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;