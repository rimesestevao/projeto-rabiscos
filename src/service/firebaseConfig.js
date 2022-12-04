import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHTdGrJ5ZaARTI6XrbktyFLjjhbn9lvgU",
  authDomain: "cariocasulista-blog.firebaseapp.com",
  databaseURL: "https://cariocasulista-blog-default-rtdb.firebaseio.com",
  projectId: "cariocasulista-blog",
  storageBucket: "cariocasulista-blog.appspot.com",
  messagingSenderId: "623053044922",
  appId: "1:623053044922:web:dd1ef6b69d7b9018f15683",
  measurementId: "G-FZEHY27W03"
};

export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth = getAuth(app);