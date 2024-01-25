import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [logged, setLogged] = useState(false);
    const updateLogged = (e) => {
        e.stopPropagation();
        setLogged((prevLogged) => !prevLogged);
    };

    return (<UserContext.Provider value={{ logged, updateLogged }}>
        {children}
    </UserContext.Provider>);
}

export {UserContext, UserProvider};