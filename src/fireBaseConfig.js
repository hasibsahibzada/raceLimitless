import firebase from 'fireBase';

const firebaseConfig = {
    apiKey: "AIzaSyBp-UgTe2ZlYOHXGuFTcAv5N7k5t0Nbduw",
    authDomain: "racelimitless-c2f7b.firebaseapp.com",
    databaseURL: "https://racelimitless-c2f7b.firebaseio.com",
    projectId: "racelimitless-c2f7b",
    storageBucket: "racelimitless-c2f7b.appspot.com",
    messagingSenderId: "401320020749"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
