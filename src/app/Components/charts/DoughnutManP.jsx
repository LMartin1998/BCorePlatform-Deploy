import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

const DoughnutManP = ({dataChart, labels, title}) => {

    const [data, setData] = useState({
        labels: labels,
        datasets: dataChart
    });

    const options = {
        cutoutPercentage: 10, 
        legend: {
          display: true,
          position: 'bottom',
        },
    };

    return (
        <div className="h-full p-4 flex flex-col items-center justify-center">
            <h2 className="font-semibold text-base text-gray-900">{title}</h2>
            <Doughnut data={data} options={options} />
        </div> 
    );
}
 
export default DoughnutManP;
