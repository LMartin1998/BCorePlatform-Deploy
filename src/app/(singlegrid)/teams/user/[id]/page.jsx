"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { TeamsContext } from "@/app/contexts/TeamsContext";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { HiOutlineInboxIn } from "react-icons/hi";
import TeamsDatePicker from "@/app/components/teams/TeamsDatePicker";

export default function UserId() {
  const { user, goToTable, fromDate, updateFromDate, toDate, updateToDate } =
    useContext(TeamsContext);
  const params = useParams();
  console.log(params);
  console.log(user);
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full justify-start items-center">
          <button
            className="w-1/6 h-10 bg-orange-500 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-orange-600 m-1"
            onClick={goToTable}
          >
            Go back
          </button>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-11/12 h-full">
            <div className="w-full flex">
              <div className="flex w-1/2 border-2 border-gray-300 rounded-lg m-1 justify-center items-center bg-white">
                Show entries for this user
                <button className="w-1/4 flex justify-center items-center border rounded-lg bg-blue-200 m-1">
                  <HiOutlineInboxIn
                    className="m-1"
                    size={20}
                  ></HiOutlineInboxIn>
                  Show entries
                </button>
              </div>
              <div className="flex w-1/2 border-2 border-gray-300 rounded-lg m-1 justify-center items-center bg-white">
                <div className="flex w-1/3 m-1 justify-center items-center">
                  <div className="flex mr-2">From:</div>
                  <TeamsDatePicker
                    date={fromDate}
                    updateDate={updateFromDate}
                  ></TeamsDatePicker>
                </div>
                <div className="flex w-1/3 m-1 justify-center items-center">
                  <div className="flex mr-2">To:</div>
                  <TeamsDatePicker
                    date={toDate}
                    updateDate={updateToDate}
                  ></TeamsDatePicker>
                </div>
                <div className="w-1/3 m-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
