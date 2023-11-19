import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLb6SSKK3naFSHvBZIAom00Zdlg1KecRA",
  authDomain: "com-forum.firebaseapp.com",
  projectId: "com-forum",
  storageBucket: "com-forum.appspot.com",
  messagingSenderId: "615891376572",
  appId: "1:615891376572:web:062960ee973c5b83a133b9",
  measurementId: "G-NLVTSV8MW5"
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
