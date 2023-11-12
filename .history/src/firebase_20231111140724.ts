// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT4XShqj8FMvTLb2rLxPQku6Y8KA0VWM4",
  authDomain: "flux-ats.firebaseapp.com",
  projectId: "flux-ats",
  storageBucket: "flux-ats.appspot.com",
  messagingSenderId: "719006106950",
  appId: "1:719006106950:web:f8aa9a4f7217e958881147",
  measurementId: "G-KNX4SP7B2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const database = getFirestore(app);

export { app, analytics, database };
