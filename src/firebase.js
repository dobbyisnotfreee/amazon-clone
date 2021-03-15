import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCT0r9xgM9S8aWC3yT4tiXlxxe2PQLwCos",
    authDomain: "clone-test-c0f8e.firebaseapp.com",
    projectId: "clone-test-c0f8e",
    storageBucket: "clone-test-c0f8e.appspot.com",
    messagingSenderId: "236015373230",
    appId: "1:236015373230:web:ed5f935ab71dd3f113563f",
    measurementId: "G-KZ2BS54DNP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };
