/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCW9e5RznfefViXdfsD8-G05-nBC66irqk",
  authDomain: "main-e-commerec.firebaseapp.com",
  projectId: "main-e-commerec",
  storageBucket: "main-e-commerec.appspot.com",
  messagingSenderId: "200883106944",
  appId: "1:200883106944:web:bbfae8f5519d0febeca265",
  databaseURL: "https://main-e-commerec-default-rtdb.firebaseio.com",
};
const Logout = () => {
  signOut(auth);
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app);

export { app, auth, database, db, Logout };
export default firebaseConfig;
