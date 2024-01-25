'use client';
import DonaChart from "../Components/DonaChart";
import Header from "../components/Header";
import { MapSite } from "../components/MapSite";
import TopCards from "../components/TopCards";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="p-4">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center"><DonaChart></DonaChart></div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Fullsite mechanical status
              </p>
              <hr className="my-4 border-t-2 border-gray-300"></hr>
              <p className="font-semibold text-gray-600 text-center text-md">
                (+15%)
              </p>
              <p className="text-sm text-gray-600 text-center text-md">Increased respect to the previous day</p>
            </div>
          </div>
          <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center"><DonaChart></DonaChart></div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Fullsite electrical status
              </p>
              <hr className="my-4 border-t-2 border-gray-300"></hr>
              <p className="font-semibold text-gray-600 text-center text-md">
                (+15%)
              </p>
              <p className="text-sm text-gray-600 text-center text-md">Increased respect to the previous day</p>
            </div>
          </div>
          <div className="md-col-span-2 col-span-1 bg-white  border rounded-lg h-auto">
            <div className="h-60 flex justify-center"></div>
            <div className="p-4">
              <p className="font-semibold text-gray-600 text-center text-md">
                Teams
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
          </div>
        </div>
        <MapSite></MapSite>
      </div>
    </main>
  );
}
