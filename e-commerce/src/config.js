import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCW9e5RznfefViXdfsD8-G05-nBC66irqk",
  authDomain: "main-e-commerec.firebaseapp.com",
  projectId: "main-e-commerec",
  storageBucket: "main-e-commerec.appspot.com",
  messagingSenderId: "200883106944",
  appId: "1:200883106944:web:bbfae8f5519d0febeca265",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {app , auth}
export default firebaseConfig;
