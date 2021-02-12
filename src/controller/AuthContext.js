import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Loader from '../views/Onboarding/Loading';

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setLoading(false);
            setUser(user);
        });
        return unsubscribe;
    }, []);

    if (loading) {
        return <Loader/>
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
