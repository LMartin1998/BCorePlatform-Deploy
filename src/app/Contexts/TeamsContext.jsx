import { createContext, useState } from "react";
import users from "../data/teamsdata";

const TeamsContext = createContext();

function TeamsProvider({ children }) {
  const [usersList, setUsersList] = useState(users);

  return (
    <TeamsContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </TeamsContext.Provider>
  );
}

export { TeamsContext, TeamsProvider };
