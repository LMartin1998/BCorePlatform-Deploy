// src/DonaChart.js
'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js';
import { Chart as Chartjs,
         ArcElement,
         Tooltip,
         Legend 
} from 'chart.js';

Chartjs.register(
  ArcElement, Tooltip, Legend
)
const DonaChart = () => {
  // Datos del gráfico
  const data = {
    labels: ['A', 'B'],
    datasets: [
      {
        data: [60, 40], // Porcentajes para cada categoría
        backgroundColor: ['#1E40AF', '#E0E0E0'], // Colores para cada categoría
        hoverBackgroundColor: ['#4A90E2', '#D3D3D3'],
      },
    ],
  };

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

export default DonaChart;
