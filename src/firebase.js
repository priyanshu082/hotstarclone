import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBqM2PCl78c7RdqHR7944ROdjparmPE6Xs",
    authDomain: "disney-clone-24f68.firebaseapp.com",
    projectId: "disney-clone-24f68",
    storageBucket: "disney-clone-24f68.appspot.com",
    messagingSenderId: "955170358635",
    appId: "1:955170358635:web:3769ba704118a9430db82e",
    measurementId: "G-ZD0W504JTY"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage();
  

  export{auth ,provider,storage};
  export default db;

  