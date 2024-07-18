// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgOf0wFlOSREp8aOdrzxADjZrlHkkiiyg",
  authDomain: "portfolio-6de12.firebaseapp.com",
  projectId: "portfolio-6de12",
  storageBucket: "portfolio-6de12.appspot.com",
  messagingSenderId: "647070473063",
  appId: "1:647070473063:web:f803c4e8e5b9fc91bbadc2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
