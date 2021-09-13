import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCqIdVDZuxaxXj455PzcC0mbMCRgGqqnM",
  authDomain: "app-bibliobeca.firebaseapp.com",
  projectId: "app-bibliobeca",
  storageBucket: "app-bibliobeca.appspot.com",
  messagingSenderId: "455455795976",
  appId: "1:455455795976:web:393a11e76edbdc066b5abd",
  measurementId: "G-B391TVMT3F"
};
 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;