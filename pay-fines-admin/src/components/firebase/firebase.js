import * as firebase from 'firebase';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAlud5UlUUD3QN9qTsV8iUXp3qVXfmgYzw",
    authDomain: "pay-fines.firebaseapp.com",
    databaseURL: "https://pay-fines.firebaseio.com",
    projectId: "pay-fines",
    storageBucket: "pay-fines.appspot.com",
    messagingSenderId: "906785021760",
    appId: "1:906785021760:web:b0b00b7040c0f45e7324a5"
};

firebase.initializeApp(config);

export default firebase;