import {getApp,getApps,initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXg7km2wnUcQPwYd7lY1hXVk7qLTmTQSg",
  authDomain: "devfest-f0af2.firebaseapp.com",
  projectId: "devfest-f0af2",
  storageBucket: "devfest-f0af2.appspot.com",
  messagingSenderId: "1086858142478",
  appId: "1:1086858142478:web:760a7786e720a416762d5f",
  measurementId: "G-B8L6WYT9E2"
};

// Initialize Firebase
const app = getApps().length ? getApp():initializeApp(firebaseConfig) 
const db=getFirestore(app);
export{db};