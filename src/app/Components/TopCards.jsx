"use client";
import React from "react";
import { GoGear } from "react-icons/go";
import MyDatePicker from "./datePickers/Datepicker";
import { GiElectric } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";

const TopCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg dark:bg-slate-900 dark:border-2 dark:border-blue-400">
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]">
          <GoGear style={{ color: "white" }} size={30} />
        </div>
        <div className="w-full p-2">
          <div className="flex">
            <div className="w-3/5 p-2">
              <MyDatePicker></MyDatePicker>
            </div>
            <div className="w-2/5 p-2">
              <h2 className="text-gray-600 text-center text-md dark:text-white dark:font-normal">
                Mechanical progress
              </h2>
              <h1 className="text-xl text-center font-bold text-black dark:text-white">
                50%
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg dark:bg-slate-900 dark:border-2 dark:border-blue-400">
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]">
          <GiElectric style={{ color: "white" }} size={30} />
        </div>
        <div className="w-full p-2">
          <div className="flex">
            <div className="w-3/5 p-2">
              <MyDatePicker></MyDatePicker>
            </div>
            <div className="w-2/5 p-2">
              <h2 className="text-gray-600 text-center text-md dark:text-white">
                Electrical progress
              </h2>
              <h1 className="text-xl text-center font-bold text-black dark:text-white">
                50%
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg dark:bg-slate-900 dark:border-2 dark:border-blue-400">
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]">
          <MdOutlinePeopleAlt style={{ color: "white" }} size={30} />
        </div>
        <div className="w-full p-2">
          <div className="flex">
            <div className="w-3/5 p-2">
              <MyDatePicker></MyDatePicker>
            </div>
            <div className="w-2/5 p-2">
              <h2 className="text-gray-600 text-center text-md dark:text-white">
                Teams
              </h2>
              <h1 className="text-xl text-center font-bold text-black dark:text-white">
                50%
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
