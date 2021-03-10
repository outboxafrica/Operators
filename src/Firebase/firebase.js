
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyBj3Cy-2mjtUkZTfcy4Z2S0vW9ScTlsI7Q",
    authDomain: "edu-online-979b8.firebaseapp.com",
    projectId: "edu-online-979b8",
    storageBucket: "edu-online-979b8.appspot.com",
    messagingSenderId: "150335879361",
    appId: "1:150335879361:web:b85dbca7b09891ae9efc40" 
     
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db, auth, storage};