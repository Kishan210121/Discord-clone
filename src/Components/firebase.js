import firebase from "firebase";


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
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
