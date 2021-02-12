import firebase from 'firebase/app';
import 'firebase/firestore';

//Here is the configuration of firebase and initit app
const firebaseConfig = {
  apiKey: "AIzaSyB97MFDk0wRoFav5TnoI6OOYdsWYmt7ZIQ",
  authDomain: "ecopetrol-tf.firebaseapp.com",
  projectId: "ecopetrol-tf",
  storageBucket: "ecopetrol-tf.appspot.com",
  messagingSenderId: "488819244820",
  appId: "1:488819244820:web:9e396db99bd0be01348c01"
  };

// Initialize Firebase
export default () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
}
