import { TeamsContext } from "@/app/contexts/TeamsContext";
import { useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function TeamsChart() {
  const { dates } = useContext(TeamsContext);

  useEffect(() => {
    console.log(dates);
  }, [dates]);
}
