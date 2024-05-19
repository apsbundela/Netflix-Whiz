// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFZtM_5caRINAT-kajo0Qx5v3XYAsRR14",
    authDomain: "netflix-whiz.firebaseapp.com",
    projectId: "netflix-whiz",
    storageBucket: "netflix-whiz.appspot.com",
    messagingSenderId: "862856079655",
    appId: "1:862856079655:web:753b0c802f478b87f66102",
    measurementId: "G-RXDHC8S0JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
