// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeeP9KfQBcAOl6MtMeZ2CAYpvIirepDLA",
    authDomain: "health-diary-4338b.firebaseapp.com",
    projectId: "health-diary-4338b",
    storageBucket: "health-diary-4338b.appspot.com",
    messagingSenderId: "1096690849604",
    appId: "1:1096690849604:web:ee834e258048c68ef3e911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };