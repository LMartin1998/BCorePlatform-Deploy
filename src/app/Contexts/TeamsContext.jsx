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
    setUser(usersList.filter((u) => u.id == info)[0] || []);
    router.push(`/teams/user/${info}`);
  };

  const goToTable = (e) => {
    e.stopPropagation();
    setUser([]);
    setUserInfoId("");
    setDates([]);
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

  const [dates, setDates] = useState([]);

  const [errorDate, setErrorDate] = useState(false);

  const verifyDates = () => {
    setDates([]);
    const startDate = fromDate.getTime();
    const endDate = toDate.getTime();
    const diff = endDate - startDate;
    const days = diff / (1000 * 3600 * 24);

    if (days < 0) {
      setErrorDate(true);
      setTimeout(() => {
        setErrorDate(false);
      }, 2000);
    } else {
      const newDates = [];
      const currentDate = new Date(startDate);
      const options = { day: "numeric", month: "long", year: "numeric" };
      while (currentDate <= endDate) {
        const formattedDate = currentDate.toLocaleDateString("en-US", options);
        newDates.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      setDates(newDates);
    }
  };

  useEffect(() => {
    verifyDates();
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
        errorDate,
        dates,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
}

export { TeamsContext, TeamsProvider };
