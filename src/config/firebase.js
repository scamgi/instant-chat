import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-u93G1t88MkqFWL-hm1jRCiqL_gTnghU",
  authDomain: "instant-chat-59328.firebaseapp.com",
  projectId: "instant-chat-59328",
  storageBucket: "instant-chat-59328.appspot.com",
  messagingSenderId: "532947066136",
  appId: "1:532947066136:web:5e2cb037a38ca611bf526d",
  measurementId: "G-BHL00JNZ78"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();