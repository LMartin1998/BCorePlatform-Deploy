/*
Total de paneles, torques tubes, 
*/
"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import BlocksDropdown from "@/app/Components/stadistics/BlocksDropdown";

export default function Stadistics() {
  const [filter, setFilter] = useState(0);
  const updateFilter = (e) => {
    e.stopPropagation();
    const filt = Number(e.currentTarget.id);
    setFilter(filt);
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <div className="w-full flex justify-center items-center">
        <div
          className={`w-1/4 flex justify-center items-center rounded-lg m-2 ${
            filter === 0
              ? "bg-yellow-100 border border-yellow-500"
              : "bg-white hover:gray-100 hover:cursor-pointer shadow-lg"
          }`}
          id="0"
          onClick={updateFilter}
        >
          <button className="flex p-1 m-1 justify-center items-center">
            <p>Mechanical</p>
          </button>
        </div>
        <div
          className={`w-1/4 flex justify-center items-center rounded-lg m-2 ${
            filter === 1
              ? "bg-cyan-100 border border-cyan-500"
              : "bg-white hover:gray-100 hover:cursor-pointer shadow-lg"
          }`}
          id="1"
          onClick={updateFilter}
        >
          <button className="flex p-1 m-1 justify-center items-center">
            <p>Electrical</p>
          </button>
        </div>
        <div
          className={`w-1/4 flex justify-center items-center rounded-lg m-2 ${
            filter === 2
              ? "bg-emerald-100 border border-emerald-500"
              : "bg-white hover:gray-100 hover:cursor-pointer shadow-lg"
          }`}
          id="2"
          onClick={updateFilter}
        >
          <button className="flex p-1 m-1 justify-center items-center">
            <p>Budget</p>
          </button>
        </div>
      </div>
      {/* <BlocksDropdown></BlocksDropdown> */}
      <div className="w-full flex justify-end items-center">
        <button
          className="w-1/6 mr-5 p-1 flex justify-center items-center rounded-lg bg-sky-200 hover:bg-sky-300 hover:cursor-pointer"
          type="text"
          aria-haspopup="true"
        >
          <p>Select blocks</p>
        </button>
      </div>
      <div className="w-full h-screen flex justify-center items-center mt-2 mb-2">
        <div className="w-full h-full flex justify-center items-center m-2 rounded-lg shadow-lg bg-white"></div>
      </div>
    </main>
  );
}
