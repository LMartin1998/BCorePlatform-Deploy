"use client"
import React from "react";
import { GoGear } from "react-icons/go";
import MyDatePicker from "./Datepicker";
import { GiElectric } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 p-4">
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg">
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]">
          <GoGear style={{ color: "white" }} size={30} />  
        </div>
        <div className="w-full p-2">
          <div className="flex">
            <div className="w-3/5 p-2">
              <MyDatePicker></MyDatePicker>
            </div>
            <div className="w-2/5 p-2">
              <h2 className="text-gray-600 text-center text-md ">Mechanical progress</h2>
              <h1 className="text-xl text-center font-bold text-black">50%</h1>
            </div>

          </div>
        </div>
      </div>
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg">
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]">
          <GiElectric style={{ color: "white" }} size={30} />  
        </div>
        <div className="w-full p-2">
          <div className="flex">
            <div className="w-3/5 p-2">
              <MyDatePicker></MyDatePicker>
            </div>
            <div className="w-2/5 p-2">
              <h2 className="text-gray-600 text-center text-md ">Electrical progress</h2>
              <h1 className="text-xl text-center font-bold text-black">50%</h1>
            </div>

          </div>
        </div>
      </div>
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full items-center border p-4 rounded-lg">
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]">
          <MdOutlinePeopleAlt style={{ color: "white" }} size={30} />  
        </div>
        <div className="w-full p-2">
          <div className="flex">
            <div className="w-3/5 p-2">
              <MyDatePicker></MyDatePicker>
            </div>
            <div className="w-2/5 p-2">
              <h2 className="text-gray-600 text-center text-md ">Teams</h2>
              <h1 className="text-xl text-center font-bold text-black">50%</h1>
            </div>

          </div>
        </div>
      </div>
      {/* Cards information 
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-bold">Site Address</p>
          <p className="text-gray-600">
            450 Joe Pantel Rd, Searcy, AR 72143, USA
          </p>
        </div>
        <div className="flex items-center">
          <p className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[45px] h-[45px]">
            <HiOutlineLocationMarker style={{ color: "white" }} size={25} />
          </p>
        </div>
      </div>
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-bold">Power Capacity</p>
          <p className="text-gray-600">135MW</p>
        </div>
        <div className="flex items-center">
          <p className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[45px] h-[45px]">
            <AiOutlineThunderbolt  style={{ color: "white" }} size={25} />
          </p>
        </div>
      </div> */}
      {/* Cards button progress
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-bold pb-2">MC Drawing</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-yellow-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                30%
              </p>
            </div>
            <div className="p-4 bg-gray-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                50%
              </p>
            </div>
            <div className="p-4 bg-gray-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                90%
              </p>
            </div>
            <div className="p-4 bg-gray-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                100%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg-col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-bold pb-2">EL Drawing</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-gray-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                30%
              </p>
            </div>
            <div className="p-4 bg-gray-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                50%
              </p>
            </div>
            <div className="p-4 bg-gray-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                90%
              </p>
            </div>
            <div className="p-4 bg-green-300 rounded-md transition transform hover:scale-105 active:scale-95">
              <p className="w-full h-full aspect-w-1 aspect-h-1 text-center">
                100%
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TopCards;
