import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCostYkswtHr1XQtiSqmGZEGJKZWnO9_SI",
  authDomain: "employee-management--system.firebaseapp.com",
  projectId: "employee-management--system",
  storageBucket: "employee-management--system.appspot.com",
  messagingSenderId: "455917888289",
  appId: "1:455917888289:web:31651208cb02f44867d460",
  measurementId: "G-2S69BZ14J4"
};
// Initialize Firebase with your configuration

const app = initializeApp(firebaseConfig);
// Use Firebase Authentication
// const firestore = firebase.firestore(app);
const auth = getAuth(app);
export const db = getFirestore(app);

// export const storage = getStorage(app);
// export const db = firestore(app);


// const app = initializeApp(firebaseConfig);
// Initialize Firebase services
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);


// export { app, auth, db, storage, createUserWithEmailAndPassword,  doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, ref, uploadBytes, getDownloadURL };
export { auth, signInWithEmailAndPassword, signOut };
// Import Firebase services as named exports

