// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6uBUyFfprgTwrk2s7Pkd-eCyEW2xpPc",
  authDomain: "independent-service-prov-58c7d.firebaseapp.com",
  projectId: "independent-service-prov-58c7d",
  storageBucket: "independent-service-prov-58c7d.appspot.com",
  messagingSenderId: "361866342423",
  appId: "1:361866342423:web:af5a2cbb96346d61796c52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;