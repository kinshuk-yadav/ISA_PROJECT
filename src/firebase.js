// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1vrkyWc6YAG-mhWf5LHXk7UOd-OlKLaI",
  authDomain: "jee-leetcode.firebaseapp.com",
  projectId: "jee-leetcode",
  storageBucket: "jee-leetcode.appspot.com",
  messagingSenderId: "220432792511",
  appId: "1:220432792511:web:13f910b497ed3ab498ff0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();