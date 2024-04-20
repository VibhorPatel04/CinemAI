// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ZsNrpJrP3ephL56qBSrmi29OasLx8VA",
  authDomain: "cinemai-2763a.firebaseapp.com",
  projectId: "cinemai-2763a",
  storageBucket: "cinemai-2763a.appspot.com",
  messagingSenderId: "958075836186",
  appId: "1:958075836186:web:ba5c7021c77948d956bea3",
  measurementId: "G-84D0Y5LW23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();