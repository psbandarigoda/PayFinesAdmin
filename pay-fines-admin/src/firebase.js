import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlud5UlUUD3QN9qTsV8iUXp3qVXfmgYzw",
    authDomain: "pay-fines.firebaseapp.com",
    databaseURL: "https://pay-fines.firebaseio.com",
    projectId: "pay-fines",
    storageBucket: "pay-fines.appspot.com",
    messagingSenderId: "906785021760",
    appId: "1:906785021760:web:b0b00b7040c0f45e7324a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;