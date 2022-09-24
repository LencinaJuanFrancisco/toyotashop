// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsVwT_n_lbnWzxQ8jSHX-JOYwzh5qcfMs",
  authDomain: "toyotashop-e2cba.firebaseapp.com",
  projectId: "toyotashop-e2cba",
  storageBucket: "toyotashop-e2cba.appspot.com",
  messagingSenderId: "22102839580",
  appId: "1:22102839580:web:c4411aad1fd964dc05ead9"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db