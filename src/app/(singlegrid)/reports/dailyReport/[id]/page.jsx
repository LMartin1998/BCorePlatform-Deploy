"use client";
import { useState } from "react";

import { GoGear } from "react-icons/go";
import { GiElectric } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";

import LineChart from "@/app/components/charts/LineChart";
import DoughnutManP from "@/app/components/charts/DoughnutManP";
import { data } from "autoprefixer";

const DailyReport = () => {
  const [active, setActive] = useState(1);
  const handlecClick = (buttonId) => {
    setActive(buttonId);
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // TorqueTubesInfo
  const A1 = [10, 20, 10, 35, 10, 20, 7];
  const A2 = [20, 10, 5, 25, 10, 20, 10];
  const A3 = [40, 30, 8, 15, 20, 10, 5];
  const A4 = [9, 7, 20, 8, 40, 30, 8];

  const datasets = [
    {
      label: "Nothing installed",
      data: A1,
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Racking complete",
      data: A2,
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
    {
      label: "Paneling complete",
      data: A3,
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Inspections complete",
      data: A4,
      fill: false,
      backgroundColor: "rgb(230, 9, 12, 230)",
      borderColor: "rgba(230, 9, 12, 230)",
    },
  ];

  const labelsManP = ["Harness Remediation", "CAB", "End Caps"];
  const dataSetsManP = [
    {
      data: [28, 9, 2],
      backgroundColor: ["#1E40AF", "#E0E0E0", "#FF9E41"], // Colores para cada categoría
      hoverBackgroundColor: ["#4A90E2", "#D3D3D3", "#FFB36B"],
    },
  ];

  //PanelsInfo
  const B1 = [5, 30, 10, 40, 5, 25, 3];
  const B2 = [10, 5, 35, 12, 50, 40, 7];
  const B3 = [25, 5, 2, 35, 15, 30, 8];
  const B4 = [45, 20, 7, 15, 30, 10, 2];

  const datasetsPanel = [
    {
      label: "Nothing installed",
      data: B1,
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Racking complete",
      data: B2,
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
    {
      label: "Paneling complete",
      data: B3,
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Inspections complete",
      data: B4,
      fill: false,
      backgroundColor: "rgb(230, 9, 12, 230)",
      borderColor: "rgba(230, 9, 12, 230)",
    },
  ];

  const labelsSiteStatus  = ["Modules installed", "Remaining to panel", "Remaining to rack"];
  const datasetSiteStatus = [
    {
      data: [64.8, 14.7, 21.1],
      backgroundColor: ["#55AA55", "#D49A6A", "#D46A6A"], // Colores para cada categoría
      hoverBackgroundColor: ["#88CC88", "#FFD1AA", "#FFAAAA"],
    }
  ]

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-[#1A202C]">
      <div className="grid sm:grid-cols-3 gap-4 p-4">
        <div
          className={`lg-col-span-2 col-span-1  flex justify-between w-full items-center border p-4 rounded-lg  dark:border dark:border-[#00000005] ${
            active === 1
              ? "dark:bg-gray-500 bg-white"
              : "dark:bg-[#1F2733] bg-white"
          } `}
          onClick={() => handlecClick(1)}
        >
          <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px] dark:bg-gray-900">
            <GoGear style={{ color: "white" }} size={30} />
          </div>
          <div className="w-full p-2">
            <div className="flex">
              <div className="w-full p-2">
                <h2 className="text-gray-600 text-center text-md dark:text-white dark:font-normal">
                  Mechanical progress
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg  dark:border dark:border-[#00000005] ${
            active === 2 ? "dark:bg-gray-500" : "dark:bg-[#1F2733]"
          } `}
          onClick={() => handlecClick(2)}
        >
          <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px] dark:bg-gray-900">
            <GiElectric style={{ color: "white" }} size={30} />
          </div>
          <div className="w-full p-2">
            <div className="flex">
              <div className="w-full p-2">
                <h2 className="text-gray-600 text-center text-md dark:text-white dark:font-normal">
                  Electrical progress
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg  dark:border dark:border-[#00000005] ${
            active === 3 ? "dark:bg-gray-500" : "dark:bg-[#1F2733]"
          } `}
          onClick={() => handlecClick(3)}
        >
          <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px] dark:bg-gray-900">
            <MdOutlinePeopleAlt style={{ color: "white" }} size={30} />
          </div>
          <div className="w-full p-2">
            <div className="flex">
              <div className="w-full p-2">
                <h2 className="text-gray-600 text-center text-md dark:text-white">
                  Teams
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white col-span-2 p-2 max-h-96">
          <LineChart
            title={"Torque Tubes"}
            labels={daysOfWeek}
            dataChart={datasets}
          />
        </div>
        <div className="bg-white p-2  max-h-96">
          <DoughnutManP
            title={"Man power"}
            labels={labelsManP}
            dataChart={dataSetsManP}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white p-2 max-h-96">
          <DoughnutManP  
            title={"Site Status"}
            labels={labelsSiteStatus}
            dataChart={datasetSiteStatus}
          />
        </div>
        <div className="bg-white col-span-2 p-2 max-h-96">
          <LineChart
            title={"Panels"}
            labels={daysOfWeek}
            dataChart={datasetsPanel}
          />
        </div>
      </div>

      <div className="w-full bg-white p-4 dark:bg-[#1A202C]">
        <div className=" bg-blue-800 p-2">
          <p className=" text-center px-6 text-white text-lg font-bold">Tasks</p>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Manpower
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Block
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <p className="text-base text-gray-900 font-semibold">Harness remediation</p>
                <p className="text-base text-gray-900 font-normal">Fixing all slack on Harnesses</p>
                <p className="text-base text-gray-900 font-normal">Ensuring that all loops are no less than 5 inches</p>
                <p className="text-base text-gray-900 font-normal">Ensuring all zip ties are all correctly placed</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">28</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">202</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <p className="text-base text-gray-900 font-semibold">CAB</p>
                <p className="text-base text-gray-900 font-normal">Torque checking MC4 connectors</p>
                <p className="text-base text-gray-900 font-normal">Organizing DC negative and positive cables in to CAB Hangers</p>
                <p className="text-base text-gray-900 font-normal">Installing missing split loom and correcting prior split loom on PV Cables</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">104</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyReport;
