// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5LO67wVcsnXN6Iz6CoH6SRxaKl9reTRc",
  authDomain: "nontonmoal.firebaseapp.com",
  projectId: "nontonmoal",
  storageBucket: "nontonmoal.appspot.com",
  messagingSenderId: "608201964391",
  appId: "1:608201964391:web:3f36a997cce4feb8878dc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
