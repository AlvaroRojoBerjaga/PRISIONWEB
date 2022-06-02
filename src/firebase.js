import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyCJVdvbCDX_kCF21Swawjo3cFJ6qPh2RgA",
  authDomain: "prisionweb-e0154.firebaseapp.com",
  databaseURL: "https://prisionweb-e0154.firebaseapp.com",
  projectId: "prisionweb-e0154",
  storageBucket: "prisionweb-e0154.appspot.com",
  messagingSenderId: "1009824857480",
  appId: "1:1009824857480:web:4c99434bba6d0e73344e3d"
};
firebase.initializeApp(config);
export default firebase.firestore();