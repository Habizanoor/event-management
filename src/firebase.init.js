import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC1Hr6oP1Ndx5-4TunoaLaFrfsiHW9Ml8",
  authDomain: "independent-service-prov-f268e.firebaseapp.com",
  projectId: "independent-service-prov-f268e",
  storageBucket: "independent-service-prov-f268e.appspot.com",
  messagingSenderId: "825540007114",
  appId: "1:825540007114:web:da5df9eac8ed8e4d8d9033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;