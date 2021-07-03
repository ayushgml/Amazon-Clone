import firebase from "firebase";

const firebaseApp = firebase.InitializeApp({
    apiKey: "AIzaSyC-qAVgm7eBCo86mPJeO5nnRO2IIAf1FAo",
    authDomain: "clone-a8927.firebaseapp.com",
    projectId: "clone-a8927",
    storageBucket: "clone-a8927.appspot.com",
    messagingSenderId: "357084100509",
    appId: "1:357084100509:web:43bd20de699c344d9ae174",
    measurementId: "G-1NWG46EP31"
});

const auth = firebase.auth();

export { auth };