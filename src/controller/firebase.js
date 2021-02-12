import firebase from 'firebase/app';
import 'firebase/firestore';

//Here is the configuration of firebase and initit app
const firebaseConfig = {
  apiKey: "AIzaSyBqkuHhOw-AjiuntRSU2Zs9FW86Osdismk",
  authDomain: "burguer-queen-88.firebaseapp.com",
  databaseURL: "https://burguer-queen-88.firebaseio.com",
  projectId: "burguer-queen-88",
  storageBucket: "burguer-queen-88.appspot.com",
  messagingSenderId: "848608553853",
  appId: "1:848608553853:web:6a877a489d6699f57cba14",
  measurementId: "G-8GZ2LHNPVD"
  };

// Initialize Firebase
export default () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
}
