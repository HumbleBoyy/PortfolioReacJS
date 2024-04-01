// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { getFirestore} from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyC5pCt5TnV9-LLmAHDdbw1vO083NKJ9A-8",
  authDomain: "reactjs-portfolio-11e96.firebaseapp.com",
  projectId: "reactjs-portfolio-11e96",
  storageBucket: "reactjs-portfolio-11e96.appspot.com",
  messagingSenderId: "154189928604",
  appId: "1:154189928604:web:bd81e6fbec418f7d063559",
  measurementId: "G-YT3JDG31GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const provider = new GoogleAuthProvider();
export const storgae = getStorage(app)
export const firestore = getFirestore(app);

export const loginWithGoogle = () => signInWithPopup (auth, provider);