"use client";
import { useContext, useEffect } from "react";
import BarChart from "../../components/BarChart";
import DonaChart from "../../components/DoughnutChart";
import Header from "../../components/Header";
import { MapSite } from "../../components/MapSite";
import TopCards from "../../components/TopCards";
import { ThemeContext } from "@/app/Contexts/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  return (
    <main className="bg-gray-100 min-h-screen dark:bg-black">
      <Header></Header>
      <TopCards></TopCards>
      <div className="p-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center">
              <DonaChart></DonaChart>
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Fullsite mechanical status
              </p>
              <hr className="my-4 border-t-2 border-gray-300"></hr>
              <p className="font-semibold text-gray-600 text-center text-md">
                (+15%)
              </p>
              <p className="text-sm text-gray-600 text-center text-md">
                Increased respect to the previous day
              </p>
            </div>
          </div>
          <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center">
              <DonaChart></DonaChart>
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Fullsite electrical status
              </p>
              <hr className="my-4 border-t-2 border-gray-300"></hr>
              <p className="font-semibold text-gray-600 text-center text-md">
                (+15%)
              </p>
              <p className="text-sm text-gray-600 text-center text-md">
                Increased respect to the previous day
              </p>
            </div>
          </div>
          <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center">
              <BarChart></BarChart>
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Teams
              </p>
              <hr className="my-4 border-t-2 border-gray-300"></hr>
              <p className="font-semibold text-red-600 text-center text-md">
                (-2%)
              </p>
              <p className="text-sm text-gray-600 text-center text-md">
                Decreased respect to the previous day
              </p>
            </div>
          </div>
          {/* <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center"></div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Man power
              </p>
              <hr className="my-4 border-t-2 border-gray-300"></hr>
              <p className="font-semibold text-gray-600 text-center text-md">
                (0%)
              </p>
              <p className="text-sm text-gray-600 text-center text-md">Increased respect to the previous day</p>
            </div>
          </div>
          <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center"></div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Budget
              </p>
              <hr className="my-4 border-t-2 border-gray-300"></hr>
              <p className="font-semibold text-gray-600 text-center text-md">
                (0%)
              </p>
              <p className="text-sm text-gray-600 text-center text-md">Increased respect to the previous day</p>
            </div>
          </div> */}
        </div>
        <MapSite></MapSite>
      </div>
    </main>
  );
}
