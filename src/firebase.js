import firebase from "firebase";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyBp7w1QGjMoYm0tnWnOu4OoXh8HNEV3ZRs",
    authDomain: "webpage-7812a.firebaseapp.com",
    databaseURL: "https://webpage-7812a.firebaseio.com",
    projectId: "webpage-7812a",
    storageBucket: "webpage-7812a.appspot.com",
    messagingSenderId: "84345965134",
    appId: "1:84345965134:web:2955b762c19259623f111f",
    measurementId: "G-E24HHWT9DD"
};

firebase.initializeApp(config);

export default firebase.firestore();
