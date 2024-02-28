"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import GenreDropdown from "@/app/components/teams/GenreDropdown";
import TeamsDatePicker from "@/app/components/teams/TeamsDatePicker";
import { useEffect, useState } from "react";

export default function AddUser() {
  //   const [nameRegex, setNameRegex] = useState(/^[^\d]+(?: [^\d]+)*$/);
  const [verifyName, setVerifyName] = useState(true);
  const [firstName, setFirstName] = useState("");
  const verifyFirstName = (e) => {
    e.stopPropagation();
    const data = e.target.value;
    setFirstName(data);
  };

  const [lastName, setLastName] = useState("");
  const verifyLastName = (e) => {
    e.stopPropagation();
    const data = e.target.value;
    setLastName(data);
  };

  useEffect(() => {
    if (firstName && lastName) {
      setVerifyName(false);
    } else {
      setVerifyName(true);
    }
  }, [firstName, lastName]);

  const [date, setDate] = useState(new Date());

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 h-full flex justify-center items-center">
          <div className="flex flex-col w-1/2 h-full m-1 rounded-lg shadow-lg bg-white justify-center items-center">
            <div className="w-full flex justify-start items-center">
              <p className="m-2">General information</p>
            </div>
            <div className="w-full flex justify-center m-1 items-center">
              <div className="w-full flex flex-col items-start justify-center">
                <div className="w-full flex items-center justify-start">
                  <p className="m-2">Full Name</p>
                  {verifyName && <span className="text-red-500">*</span>}
                </div>
                <div className="flex w-full justify-start items-center">
                  <input
                    className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={verifyFirstName}
                  ></input>
                  <input
                    className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={verifyLastName}
                  ></input>
                </div>
                <div className="w-full flex">
                  <div className="flex flex-col w-1/2 m-1">
                    <div className="w-full flex items-center justify-start">
                      <p className="m-2">Day of Birth</p>
                      {verifyName && <span className="text-red-500">*</span>}
                    </div>
                    <div className="w-full flex m-1">
                      <TeamsDatePicker
                        date={date}
                        updateDate={setDate}
                      ></TeamsDatePicker>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 m-1">
                    <div className="w-full flex items-center justify-start">
                      <p className="m-2">Genre</p>
                      {verifyName && <span className="text-red-500">*</span>}
                    </div>
                    <GenreDropdown></GenreDropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full m-1 rounded-lg shadow-lg bg-white justify-center items-center">
            <div className="w-full flex justify-start items-center">
              <p className="m-2">Contact information</p>
            </div>
            <div className="w-full flex flex-col m-1 justify-center items-center">
              <div className="w-full flex flex-col m-1 items-start justify-center">
                <p className="m-2">Address Line 1</p>
                <input
                  className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  placeholder="..."
                ></input>
              </div>
              <div className="w-full flex flex-col m-1 items-start justify-center">
                <p className="m-2">Address Line 2</p>
                <input
                  className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  placeholder="..."
                ></input>
              </div>
              <div className="w-full flex m-1 justify-center items-center">
                <div className="w-full flex m-1 items-center justify-start">
                  <p className="m-2">City</p>
                  <input
                    className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    placeholder="..."
                  ></input>
                </div>
                <div className="w-full flex m-1 items-center justify-start">
                  <p className="m-2">State</p>
                  <input
                    className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    placeholder="..."
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
