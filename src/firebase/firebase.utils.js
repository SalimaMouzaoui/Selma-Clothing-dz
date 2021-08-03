import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzyYdxQwFKXklhFmQHmHrYrAzg9UsZj9w",
    authDomain: "crwn-db-afbe4.firebaseapp.com",
    projectId: "crwn-db-afbe4",
    storageBucket: "crwn-db-afbe4.appspot.com",
    messagingSenderId: "575690727351",
    appId: "1:575690727351:web:2daa2aa8e47471d20ed232",
    measurementId: "G-TLSNCJ25NK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;