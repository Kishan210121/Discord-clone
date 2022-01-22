// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import {getFirestore} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY25LXrV7Yd_tVUhx0kabDFQlCy7dm-wI",
  authDomain: "my-discord-3c185.firebaseapp.com",
  projectId: "my-discord-3c185",
  storageBucket: "my-discord-3c185.appspot.com",
  messagingSenderId: "107094610533",
  appId: "1:107094610533:web:0304af0f65df6661032c8c",
  measurementId: "G-NPT8FT65KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider(app);
const auth=getAuth(app);
// const analytics = getAnalytics(app);
export {auth,provider}
// export default  getFirestore();