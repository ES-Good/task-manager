import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0GdJJPyDxFJHQrnB89ynyLm90AE3vC3g",
  authDomain: "task-manager-76ccb.firebaseapp.com",
  databaseURL: "https://task-manager-76ccb-default-rtdb.firebaseio.com",
  projectId: "task-manager-76ccb",
  storageBucket: "task-manager-76ccb.appspot.com",
  messagingSenderId: "668394236210",
  appId: "1:668394236210:web:4c702606654b7402cecf2b"
};

// Initialize Firebase
export const initBD = initializeApp(firebaseConfig);