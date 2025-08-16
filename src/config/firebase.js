import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMl9BjLasdNIcB1sOdpNlXZZ4AMRCFH2Q",
  authDomain: "basics-a8b11.firebaseapp.com",
  projectId: "basics-a8b11",
  storageBucket: "basics-a8b11.firebasestorage.app",
  messagingSenderId: "164581283013",
  appId: "1:164581283013:web:c6206620f9e113b2530cac",
  measurementId: "G-CH2KQNC57Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);