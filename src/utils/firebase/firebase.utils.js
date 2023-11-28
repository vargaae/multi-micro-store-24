import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9QWsbUs5Ujtbhw6toKzyIuyw92ck6AAw",
  authDomain: "e-comm-react-2024.firebaseapp.com",
  projectId: "e-comm-react-2024",
  storageBucket: "e-comm-react-2024.appspot.com",
  messagingSenderId: "1067320049640",
  appId: "1:1067320049640:web:ea90807d83e2ba96ba2e5d"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
