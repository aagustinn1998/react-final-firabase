import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//añade aquí tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyCpr_TdjzrjZ3AtG3f8p8Sa_f3_-5zjXTQ",
    authDomain: "agustin-b0877.firebaseapp.com",
    projectId: "agustin-b0877",
    storageBucket: "agustin-b0877.appspot.com",
    messagingSenderId: "881055095894",
    appId: "1:881055095894:web:da40c5224d588e8721aff7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;