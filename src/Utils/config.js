import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBL-pVHrYjQ-eTN8nlm7KBTcgoW4BeZ8sA",
  authDomain: "offerbag-19ab9.firebaseapp.com",
  databaseURL: "https://offerbag-19ab9.firebaseio.com",
  projectId: "offerbag-19ab9",
  storageBucket: "",
  messagingSenderId: "733094086138"
};
firebase.initializeApp(config);
export const db = firebase.database();
