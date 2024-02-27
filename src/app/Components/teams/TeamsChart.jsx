import { TeamsContext } from "@/app/contexts/TeamsContext";
import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TeamsChart() {
  const { dates } = useContext(TeamsContext);

  const randomDataGen = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [randomData, setRandomData] = useState([]);

  const generateData = () => {
    const length = dates.length;
    const newData = [];
    for (let i = 0; i < length; i++) {
      newData.push(randomDataGen(1, 100));
    }
    setRandomData(newData);
  };

  useEffect(() => {
    generateData();
  }, [dates]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Activity found",
      },
    },
  };

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Activity",
        data: randomData,
        backgroundColor: "rgb(53, 162, 235)",
        borderColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
