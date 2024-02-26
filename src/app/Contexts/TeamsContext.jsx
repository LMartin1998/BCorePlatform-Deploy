import { createContext, useEffect, useState } from "react";
import users from "../data/teamsdata";
import { useRouter } from "next/navigation";

const TeamsContext = createContext();

function TeamsProvider({ children }) {
  const router = useRouter();

  const [usersList, setUsersList] = useState(users);
  const [user, setUser] = useState([]);
  const [userInfoId, setUserInfoId] = useState("");
  const updateUserInfoId = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.id;
    const filteredUser = usersList.filter((user) => user.id == id)[0];
    const info = filteredUser ? Number(filteredUser.id) : "";
    setUserInfoId(info);
    setUser(usersList.filter((u) => u.id == info));
    router.push(`/teams/id/${userInfoId}`);
  };

  const goToTable = (e) => {
    e.stopPropagation();
    setUser([]);
    setUserInfoId("");
    router.push("/teams");
  };

  return (
    <TeamsContext.Provider
      value={{ usersList, setUsersList, userInfoId, updateUserInfoId, user, goToTable }}
    >
      {children}
    </TeamsContext.Provider>
  );
}

export { TeamsContext, TeamsProvider };
