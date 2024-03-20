"use client";
import { useState } from "react";

import { GoGear } from "react-icons/go";
import { GiElectric } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";

import LineChart from "@/app/components/charts/LineChart";

const DailyReport = () => {
  const [active, setActive] = useState(1);
  const handlecClick = (buttonId) => {
    setActive(buttonId);
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];   
  const A1 = [10, 20, 10, 35, 10, 20, 7];
  const A2 = [20, 10, 5,  25, 10, 20, 10,];
  const A3 = [40, 30, 8, 15, 20, 10, 5,];
  const A4 = [9,  7, 20, 8, 40, 30, 8,];

  const datasets = [
    {
        label: 'Nothing installed',
        data: A1,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
    },    
    {
        label: 'Racking complete',
        data: A2,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
    },    
    {
        label: 'Paneling complete',
        data: A3,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
        label: 'Inspections complete',
        data: A4,
        fill: false,
        backgroundColor: 'rgb(230, 9, 12, 230)',
        borderColor: 'rgba(230, 9, 12, 230)',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-[#1A202C]">
      <div className="grid sm:grid-cols-3 gap-4 p-4">
        <div
          className={`lg-col-span-2 col-span-1  flex justify-between w-full items-center border p-4 rounded-lg  dark:border dark:border-[#00000005] ${
            active === 1 ? "dark:bg-gray-500 bg-white" : "dark:bg-[#1F2733] bg-white"
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
        {/* Start of stadistics */}
        <div className="bg-white col-span-2 p-2 max-h-96">
          <LineChart  title={"Torque Tubes"} labels={daysOfWeek} dataChart={datasets} />
        </div>
        <div className="bg-white p-2">
          <p>Hola</p>
        </div>
      </div>
    </div>
  );
};

export default DailyReport;
