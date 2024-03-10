import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHWmN8NdZlRaScB5ZEHb7PTVUyC0qEy2c",
  authDomain: "ecomm-react-2024.firebaseapp.com",
  projectId: "ecomm-react-2024",
  storageBucket: "ecomm-react-2024.appspot.com",
  messagingSenderId: "1001400880468",
  appId: "1:1001400880468:web:1ba814f789fe455fa6ccc1"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);