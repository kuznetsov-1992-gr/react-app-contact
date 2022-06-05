import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAe0tmIInQ44Les9Hu9n517uhHYg9l4p2U",
    authDomain: "app-contact-72ba9.firebaseapp.com",
    databaseURL: "https://app-contact-72ba9-default-rtdb.firebaseio.com",
    projectId: "app-contact-72ba9",
    storageBucket: "app-contact-72ba9.appspot.com",
    messagingSenderId: "173118281853",
    appId: "1:173118281853:web:e675e575693323346f3914"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();