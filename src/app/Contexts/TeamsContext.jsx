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
    router.push(`/teams/user/${info}`);
  };

  const goToTable = (e) => {
    e.stopPropagation();
    setUser([]);
    setUserInfoId("");
    router.push("/teams");
  };

  const [fromDate, setFromDate] = useState(new Date());
  const updateFromDate = (date) => {
    setFromDate(date);
  };
  const [toDate, setToDate] = useState(new Date());
  const updateToDate = (date) => {
    setToDate(date);
  };

  const [errorDate, setErrorDate] = useState(false);

  const verifyDates = () => {
    const startDate = fromDate.getTime();
    const endDate = toDate.getTime();
    const diff = endDate - startDate;
    const days = diff / (1000 * 3600 * 24);
    days >= 0 ? setErrorDate(false) : setErrorDate(true);
  };

  useEffect(() => {
    if (fromDate && toDate) {
      verifyDates();
    }
  }, [fromDate, toDate]);

  return (
    <TeamsContext.Provider
      value={{
        usersList,
        setUsersList,
        userInfoId,
        updateUserInfoId,
        user,
        goToTable,
        fromDate,
        setFromDate,
        updateFromDate,
        toDate,
        setToDate,
        updateToDate,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
}

export { TeamsContext, TeamsProvider };
