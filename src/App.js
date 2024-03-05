import logo from './logo.svg';
import './App.css';

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-u93G1t88MkqFWL-hm1jRCiqL_gTnghU",
  authDomain: "instant-chat-59328.firebaseapp.com",
  projectId: "instant-chat-59328",
  storageBucket: "instant-chat-59328.appspot.com",
  messagingSenderId: "532947066136",
  appId: "1:532947066136:web:5e2cb037a38ca611bf526d",
  measurementId: "G-BHL00JNZ78"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
