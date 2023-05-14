// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbRHGemMIs7W5c7Vjr9cvs3vd2Ah7qKw8",
  authDomain: "health-care-d4b56.firebaseapp.com",
  projectId: "health-care-d4b56",
  storageBucket: "health-care-d4b56.appspot.com",
  messagingSenderId: "960295143731",
  appId: "1:960295143731:web:172ac8a3b258670f579646",
  measurementId: "G-NJBJCQ3F52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);