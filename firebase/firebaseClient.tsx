import firebase, { getApp, getApps, initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_BUCKET_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURE_ID,
};

if(!getApps().length) {
    initializeApp(clientCredentials)
}



// Initialize Firebase
const app = !getApps().length ? initializeApp(clientCredentials) : getApp()
const db = getFirestore()
const auth = getAuth()

export { clientCredentials }
export default app
export { auth, db }