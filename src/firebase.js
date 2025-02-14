import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCRXQYsM7lmYGzBnXEi9Jpehn0EVrBpfgA",
    authDomain: "hybytes-25248.firebaseapp.com",
    projectId: "hybytes-25248",
    storageBucket: "hybytes-25248.firebasestorage.app",
    messagingSenderId: "958890170431",
    appId: "1:958890170431:web:7ad643fd70c06ddca9408a",
    measurementId: "G-YPELKBJY6S"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };