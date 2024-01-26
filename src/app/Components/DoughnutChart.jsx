import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
const DoughnutChart = () => {

  const [data, setData] = useState({
    labels: ['A', 'B'],
    datasets: [
      {
        data: [60, 40], // Porcentajes para cada categoría
        backgroundColor: ['#1E40AF', '#E0E0E0'], // Colores para cada categoría
        hoverBackgroundColor: ['#4A90E2', '#D3D3D3'],
      },
    ],
  });

  const options = {
    cutoutPercentage: 70, // Porcentaje de recorte para crear un efecto de dona
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return (
      <Doughnut data={data} options={options}/>
  );
};

export default DoughnutChart;
