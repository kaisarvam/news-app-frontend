// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY =  process.env.REACT_APP_FIREBASE_API_KEY;
const AUTH_DOMAIN =  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const MESSEGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSEGING_SENDER_ID;
const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSEGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export default FireBaseApp;