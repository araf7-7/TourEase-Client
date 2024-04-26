// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEe-9g5cjL-B4SKHO3YmYmwFZROSUCl1o",
  authDomain: "assignment-10-cd43f.firebaseapp.com",
  projectId: "assignment-10-cd43f",
  storageBucket: "assignment-10-cd43f.appspot.com",
  messagingSenderId: "735988354910",
  appId: "1:735988354910:web:caa112a3669c4d883449cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 