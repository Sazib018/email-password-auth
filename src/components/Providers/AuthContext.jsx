import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.utils';

export const Context = createContext(null)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoader, setIsLoder] = useState(true);

    const registration = (email, password) => {
        setIsLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setIsLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoder(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const utilitis = { user, registration, login, isLoader }
    return (
        <Context.Provider value={utilitis}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;