// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABLQRFc_s2cS5moECAaxszp4LJqDw6-hQ",
  authDomain: "prepreju.firebaseapp.com",
  projectId: "prepreju",
  storageBucket: "prepreju.firebasestorage.app",
  messagingSenderId: "696209182865",
  appId: "1:696209182865:web:b829309926006e7daeaf30"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);