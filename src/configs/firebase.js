// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nYZaYqnfrNhMlki4IA30NIoMpYcUUqc",
  authDomain: "test-dating-project.firebaseapp.com",
  projectId: "test-dating-project",
  storageBucket: "test-dating-project.appspot.com",
  messagingSenderId: "172473678691",
  appId: "1:172473678691:web:59a5dd0c8c6d1926faf156",
  measurementId: "G-GNQTH06NWQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
