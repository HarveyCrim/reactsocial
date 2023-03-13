import { initializeApp }  from 'firebase/app';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBQrGEQD31IEMyDhxvEsRHj0tqHENxQJ9I",
    authDomain: "reactsocial-3baab.firebaseapp.com",
    projectId: "reactsocial-3baab",
    storageBucket: "reactsocial-3baab.appspot.com",
    messagingSenderId: "848468167431",
    appId: "1:848468167431:web:928b943e89100d457a53a2",
    measurementId: "G-YRJZ067B02"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
