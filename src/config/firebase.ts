import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKMQKy6PVKaxeICvKNuC4Z03cBNw07YeU",
  authDomain: "ecommerce-e1a4c.firebaseapp.com",
  databaseURL: "https://ecommerce-e1a4c-default-rtdb.firebaseio.com",
  projectId: "ecommerce-e1a4c",
  storageBucket: "ecommerce-e1a4c.appspot.com",
  messagingSenderId: "1021021677216",
  appId: "1:1021021677216:web:cc94f4a5916bf812b68bc5",
  measurementId: "G-3QHXRGD9J9"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const googleProvider = new GoogleAuthProvider()
