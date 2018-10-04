import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyBQmB8_ycVYfBeHC7Yb5NtcZn3jHia9oJY",
    authDomain: "uiot-b8cb0.firebaseapp.com",
    databaseURL: "https://uiot-b8cb0.firebaseio.com",
    projectId: "uiot-b8cb0",
    storageBucket: "uiot-b8cb0.appspot.com",
    messagingSenderId: "568333607835"
};

const devConfig = {
    apiKey: "AIzaSyBQmB8_ycVYfBeHC7Yb5NtcZn3jHia9oJY",
    authDomain: "uiot-b8cb0.firebaseapp.com",
    databaseURL: "https://uiot-b8cb0.firebaseio.com",
    projectId: "uiot-b8cb0",
    storageBucket: "uiot-b8cb0.appspot.com",
    messagingSenderId: "568333607835"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;


export const firebaseImpl = firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({hd: "uiot.org"});
export const firebaseDatabase = firebase.database();
export {googleProvider};