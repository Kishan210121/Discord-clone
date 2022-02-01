// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import {getFirestore} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8uOBNz7FRJ7yoyk1HQA0Gem03RmahhN4",
  authDomain: "discord-2-8f689.firebaseapp.com",
  projectId: "discord-2-8f689",
  storageBucket: "discord-2-8f689.appspot.com",
  messagingSenderId: "995921474689",
  appId: "1:995921474689:web:e6036fb272bc5c96fb8980",
  measurementId: "G-NYSMSYTGM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider(app);
const auth=getAuth(app);
const db=getFirestore(app);
// const analytics = getAnalytics(app);
export {auth,provider,db}
// export default  getFirestore();