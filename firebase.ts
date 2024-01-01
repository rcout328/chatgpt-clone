import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKGw36iRLuFqM-9-AkYy0-vb08YmXf1Vc",
  authDomain: "chatgpt-clone-efc0a.firebaseapp.com",
  projectId: "chatgpt-clone-efc0a",
  storageBucket: "chatgpt-clone-efc0a.appspot.com",
  messagingSenderId: "820265608995",
  appId: "1:820265608995:web:137101c797650c39c88e96"
};



const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};