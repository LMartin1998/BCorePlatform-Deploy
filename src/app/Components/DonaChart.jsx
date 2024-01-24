// src/DonaChart.js
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
    labels: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
    datasets: [
      {
        data: [30, 40, 30], // Porcentajes para cada categoría
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colores para cada categoría
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Gráfico de Dona</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default DonaChart;
