import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../Firebase/firebase.utils';

export const Context = createContext(null)

const AuthContext = ({ children }) => {
    const [user ,setUser] = useState(null)

    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const utilitis = { user, registration }
    return (
        <Context.Provider value={utilitis}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;