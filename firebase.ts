// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEMO-Jw7BCNZp9-lTikTFC3nXApsdWjIY",
  authDomain: "note-fill.firebaseapp.com",
  projectId: "note-fill",
  storageBucket: "note-fill.appspot.com",
  messagingSenderId: "483979573728",
  appId: "1:483979573728:web:250a2ab3b39385f0849385",
  measurementId: "G-WXFK64MT3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);