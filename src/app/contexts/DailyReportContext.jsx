import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import dailyReport from "../data/dailyReport";

const DailyReportContext = createContext();

function DailyReportProvider({ children }) {
  const router = useRouter();

  const [listDate, setListDate] = useState(dailyReport);
  const [daily, setDaily] = useState([]);
  const [reportInfo, setReportInfo] = useState("");

  const updateReportInfoId = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.id;
    const filteredById = listDate.filter((report) => report.id == id)[0];
    const info = filteredById ? Number(filteredById.id) : "";
    setReportInfo(info);
    setDaily(listDate.filter((u) => u.id == info)[0] || []);
    router.push(`/reports/dailyReport/${info}`);
  };

  return (
    <DailyReportContext.Provider
      value={{
        listDate,
        setListDate,
        updateReportInfoId,
      }}
    >
      {children}
    </DailyReportContext.Provider>
  );
}

export { DailyReportContext, DailyReportProvider };
