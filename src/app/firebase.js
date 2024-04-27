// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCfNF5amUFZdOpRDDJuOrHU5Pg0fmzARuY",
  authDomain: "reservedb-a7b84.firebaseapp.com",
  projectId: "reservedb-a7b84",
  storageBucket: "reservedb-a7b84.appspot.com",
  messagingSenderId: "895367400921",
  appId: "1:895367400921:web:f0916bbec4eabc4dea1dc8",
  measurementId: "G-TFHRRQMT0G",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db }