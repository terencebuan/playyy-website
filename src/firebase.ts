import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPXaFWGr4J9WCHziJrT8j49tGKdN3usKU",
  authDomain: "playyy-comments.firebaseapp.com",
  projectId: "playyy-comments",
  storageBucket: "playyy-comments.firebasestorage.app",
  messagingSenderId: "45375191070",
  appId: "1:45375191070:web:4ea65244c362596eb9960f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);