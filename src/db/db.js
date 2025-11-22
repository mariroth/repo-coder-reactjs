import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBxeAYxe28wCXNgHNbT5wbM58FaqRWAIYc",
  authDomain: "ecommerce-88020-d9bcd.firebaseapp.com",
  projectId: "ecommerce-88020-d9bcd",
  storageBucket: "ecommerce-88020-d9bcd.firebasestorage.app",
  messagingSenderId: "432104062806",
  appId: "1:432104062806:web:45209398f2e35a2d68a0f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;