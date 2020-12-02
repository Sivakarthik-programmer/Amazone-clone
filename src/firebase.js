import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZO1BUVxj5nGNt-z-aJkc-B6otyS7e1Rw",
  authDomain: "clone-837e9.firebaseapp.com",
  databaseURL: "https://clone-837e9.firebaseio.com",
  projectId: "clone-837e9",
  storageBucket: "clone-837e9.appspot.com",
  messagingSenderId: "828462149831",
  appId: "1:828462149831:web:3cf0ad43556a9816294ee2",
  measurementId: "G-53S9D7S3KH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
