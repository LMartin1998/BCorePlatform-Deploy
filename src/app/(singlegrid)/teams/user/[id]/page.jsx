"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { TeamsContext } from "@/app/contexts/TeamsContext";
import { useContext, useState } from "react";
import { HiOutlineInboxIn } from "react-icons/hi";
import TeamsDatePicker from "@/app/components/teams/TeamsDatePicker";
import DateRange from "@/app/components/teams/DateRange";
import TeamsChart from "@/app/components/teams/TeamsChart";
import UserActivity from "@/app/components/teams/UserActivity";
import EntriesTeams from "@/app/components/teams/EntriesTeams";
import Modal from "@/app/Components/Modal";

export default function UserId() {
  const {
    user,
    goToTable,
    fromDate,
    updateFromDate,
    toDate,
    updateToDate,
    errorDate,
  } = useContext(TeamsContext);

  const [openEntries, setOpenEntries] = useState(false);

  return (
    <main className="bg-gray-100 w-full h-screen max-h-screen">
      <div className="flex flex-col justify-center w-full h-[5%]">
        <Header></Header>
      </div>
      <div className="flex w-full h-[20%] items-center">
        <TopCards></TopCards>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[75%]">
        <div className="w-full justify-start items-center">
          <button
            className="w-1/6 h-10 bg-orange-500 text-white px-3 py-1 rounded-lg focus:outline-none hover:bg-orange-600 m-1"
            onClick={goToTable}
          >
            Go back
          </button>
        </div>
        <div className="w-full jusify-center items-center">
          <div className="w-1/2 justify-start items-center m-1">
            {user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName} - ${user.team}`
              : ""}
          </div>
        </div>
        <div className="w-full h-[82%] flex justify-center items-center">
          <div className="w-11/12 h-full rounded-lg bg-white divide-y divide-y-gray-200 shadow-2xl">
            <div className="flex w-full h-[16%]">
              <div className="flex w-1/2 border-2 border-gray-300 rounded-lg m-1 justify-center items-center bg-white">
                Show entries for this user
                <button
                  className="w-1/4 flex justify-center items-center border-2 rounded-lg bg-blue-200 m-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenEntries(true);
                  }}
                >
                  <HiOutlineInboxIn
                    className="m-1"
                    size={20}
                  ></HiOutlineInboxIn>
                  Show entries
                </button>
              </div>
              <div className="relative flex w-1/2 border-2 border-gray-300 rounded-lg m-1 justify-center items-center bg-white select-none">
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
                <div className="w-1/3 m-1">
                  <DateRange></DateRange>
                </div>
                {errorDate && (
                  <div className="absolute flex w-1/2 left-0 right-0 bottom-16 z-50 p-1 border-2 border-red-300 rounded-lg bg-red-100 justify-center items-center">
                    <p>Verify your dates comparsion</p>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-[84%] flex">
              <div className="flex flex-col w-1/2 m-2 pb-1 justify-center items-center">
                <div className="w-full justify-start ml-2">
                  Users activity throughout the period
                </div>
                <div className="w-11/12 h-full border-2 rounded-lg">
                  <TeamsChart></TeamsChart>
                </div>
              </div>
              <div className="flex flex-col w-1/2 m-2 pb-1 justify-center items-center">
                <div className="w-full justify-start ml-2">Activity</div>
                <div className="w-full border-2 rounded-lg overflow-auto">
                  <UserActivity></UserActivity>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openEntries && (
        <Modal onClose={() => {}}>
          <EntriesTeams setOpenEntries={setOpenEntries}></EntriesTeams>
        </Modal>
      )}
    </main>
  );
}
