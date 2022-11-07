// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdPYzKBfFB9BNPZdl3rrzp9wCExxktnFI",
  authDomain: "animez-f7354.firebaseapp.com",
  projectId: "animez-f7354",
  storageBucket: "animez-f7354.appspot.com",
  messagingSenderId: "959175890269",
  appId: "1:959175890269:web:8419315a113236e3a0c4b4",
  measurementId: "G-YZPSRF8B7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();