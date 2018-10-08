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

export const dealOfTheDay = "http://tweeter-cj.herokuapp.com/dod";
export const allOffers =
  "https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json";

export const headers = {
  "Fk-Affiliate-Id": "akshaycj9",
  "Fk-Affiliate-Token": "bc9bda6792c8476e8617609de3d86afd",
  "Content-Type": "application/json; charset=utf-8"
};
