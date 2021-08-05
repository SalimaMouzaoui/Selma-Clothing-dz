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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user ', error.message);

        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;