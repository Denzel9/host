import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from 'firebase/auth'
  import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCn82jSMjNzjDopw0iKBvKGskyGuFIs1as",
  authDomain: "calendar-dedea.firebaseapp.com",
  projectId: "calendar-dedea",
  storageBucket: "calendar-dedea.appspot.com",
  messagingSenderId: "772339505038",
  appId: "1:772339505038:web:ddabc84188d035121ff6df"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()

// export const storage = getStorage(app)


