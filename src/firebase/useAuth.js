import {useEffect, useState} from 'react';
import firebase from 'firebase/app';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const signIn = () => auth.signInWithPopup(googleAuthProvider);
const signOut = () => auth.signOut();

const useAuth = () => {
    const [isLoaded, setIsLoaded] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setIsLoaded(true);
        });
    }, []);

    return {
        signIn,
        signOut,
        isLoaded,
        user,
    };
};

export default useAuth;