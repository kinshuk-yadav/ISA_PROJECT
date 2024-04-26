import { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from '../firebase';
import { createUser } from "../utils/backend_functions";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logOut() {
        return signOut(auth);
    }

    const signIn = async ({email, password}) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((_) => {
                // Signed in 
                return true;
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                return false;
            });
    }

    const signUp = async ({email, password, name, phoneNumber}) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // save user data to firestore
                await createUser({uid: user.uid, email, name, phoneNumber, password})
                return true;
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                return false;
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{
                user,
                logOut,
                signIn,
                signUp
            }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext)
}
