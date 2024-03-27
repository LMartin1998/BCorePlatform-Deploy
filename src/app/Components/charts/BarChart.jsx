import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ThemeContext } from "../../contexts/ThemeContext";

const BarChart = () => {
  const { theme } = useContext(ThemeContext);

  const data = {
    labels: [
      "Final remediation",
      "Kitting",
      "Torque Tubes",
      "Racking",
      "Module",
      "Module Staging",
      "Module Installation",
      "Array glass staging",
      "Safety",
      "Remediation",
      "Limpieza",
      "QC",
      "Logistics",
      "Managers y foreman",
      "Tool room",
      "Electrical QC",
    ],
    datasets: [
      {
        label: "Datos de ejemplo",
        data: [25, 30, 15, 40, 50, 30, 20, 8, 3, 30, 10, 25, 30, 20, 15, 18], // Ajusta estos valores según tus necesidades
        backgroundColor:
          theme === "light" ? "rgba(75,192,192,0.2)" : "rgba(187, 134, 252, 1)", // Color del relleno de las barras
        borderColor: theme === "light" ? "rgba(75,192,192,1)" : "#00000005", // Color del borde de las barras
        borderWidth: 1, // Ancho del borde de las barras
      },
    ],
  };

  // Opciones del gráfico (puedes personalizar según tus necesidades)
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color:
            theme === "light" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
        },
      },
      x: {
        ticks: {
          color:
            theme === "light" ? "rgb(75 85 99);" : "rgba(255, 255, 255, 1)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color:
            theme === "light" ? "rgb(75 85 99);" : "rgba(255, 255, 255, 1)",
        },
      },
    },
  };

  // Renderiza el componente Bar con los datos y opciones
  return <Bar data={data} options={options} />;
};
export default BarChart;
