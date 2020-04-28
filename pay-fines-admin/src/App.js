import React, { useEffect, useState } from "react";
import app from "./firebase.js";

export const AuthContext = React.createContext();

const App = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (<AuthContext.Provider value={{currentUser}}> hello {children} </AuthContext.Provider>);
};

export default App;