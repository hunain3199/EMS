// import firebase from '../firebase_setup/config';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { auth, signInWithEmailAndPassword, signOut } from '../db/config';

export const signIn = async (email, password) => {
  try {
    const token = await signInWithEmailAndPassword(auth, email, password);
    // Sign-in successful
    return { status: 1, data: { token: token }, error: '' };
  } catch (error) {
    // Handle sign-in errors here
    console.error(error.message);
    return { status: 0, data: {}, error: error.message };
  }
};

export const signOutUser = async () => {
  try {
    const resp = await signOut(auth);
    console.log('successfully signout')
    return resp;
    // Sign-out successful
  } catch (error) {
    // Handle sign-out errors here
    console.error(error.message);
    return error.message;
  }
};