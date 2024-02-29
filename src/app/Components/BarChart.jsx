import React, {useState} from "react";
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
    const data = {
        labels: ['Final remediation', 'Kitting', 'Torque Tubes', 'Racking', 'Module',  'Module Staging', 'Module Installation', 'Array glass staging', 'Safety', 'Remediation', 'Limpieza', 'QC', 'Logistics', 'Managers y foreman', 'Tool room', 'Electrical QC'],
        datasets: [
          {
            label: 'Datos de ejemplo',
            data: [25, 30, 15, 40, 50, 30, 20, 8, 3, 30, 10, 25, 30, 20, 15, 18], // Ajusta estos valores según tus necesidades
            backgroundColor: 'rgba(75,192,192,0.2)', // Color del relleno de las barras
            borderColor: 'rgba(75,192,192,1)', // Color del borde de las barras
            borderWidth: 1, // Ancho del borde de las barras
          },
        ],
      };
    
      // Opciones del gráfico (puedes personalizar según tus necesidades)
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
      // Renderiza el componente Bar con los datos y opciones
      return <Bar data={data} options={options} />;
};
export default BarChart;