import { TeamsContext } from "@/app/contexts/TeamsContext";
import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

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

  useEffect(() => {
    console.log(randomData);
  }, [randomData]);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Activity found",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Activity",
        data: randomData,
        backgroundColor: "rgba(75,192,192,0.2)", // Color del relleno de las barras
        borderColor: "rgba(75,192,192,1)", // Color del borde de las barras
      },
    ],
  };

  return <Line options={options} data={data} />;
}
