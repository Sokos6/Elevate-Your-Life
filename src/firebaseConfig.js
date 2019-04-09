import * as firebase from "firebase";
// replace this variable, with your own config variable
// from your firebase project
var config = {
    apiKey: "AIzaSyBX2gemuiGjymdU6tbhr0hiCRTti2UZGsU",
    authDomain: "elevate-your-life.firebaseapp.com",
    databaseURL: "https://elevate-your-life.firebaseio.com",
    projectId: "elevate-your-life",
    storageBucket: "elevate-your-life.appspot.com",
    messagingSenderId: "886202242823"
  };
let firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;