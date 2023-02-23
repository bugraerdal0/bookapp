import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import {... } from "firebase/auth";
// import {... } from "firebase/database";
// import {... } from "firebase/firestore";
// import {... } from "firebase/functions";
// import {... } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC2YcFUH4ZITPweIdVkdz42GSMgvzsbhSY",
    authDomain: "bookapp-d5211.firebaseapp.com",
    projectId: "bookapp-d5211",
    storageBucket: "bookapp-d5211.appspot.com",
    messagingSenderId: "583767203904",
    appId: "1:583767203904:web:5e341e476db6214091ffa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };




