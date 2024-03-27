import { Line  } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = ({title, labels, dataChart}) => {
    const dataLine = {
        labels: labels,
        datasets: dataChart
    };

    return ( 
        <div className="h-full p-4 flex flex-col items-center justify-center">
            <h2 className="font-semibold text-base text-gray-900">{title}</h2>
            <Line data={dataLine} />
        </div> 
    );
}
 
export default LineChart;