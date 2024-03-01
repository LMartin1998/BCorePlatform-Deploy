"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import GenreDropdown from "@/app/components/teams/GenreDropdown";
import TeamsDatePicker from "@/app/components/teams/TeamsDatePicker";
import { useEffect, useState } from "react";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";

export default function AddUser() {
  const save = (formData) => {
    const firstName = formData.get("firstName");
    alert(firstName);
  };

  const [date, setDate] = useState(new Date());

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <form action={save}>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-11/12 h-full flex items-start justify-center">
            <div className="flex flex-col w-1/2 h-full m-1 rounded-lg shadow-lg bg-white justify-center items-center self-start">
              <div className="w-full flex justify-start items-center">
                <p className="m-2">General information</p>
              </div>
              <div className="w-full flex items-center justify-start">
                <p className="m-2">Full Name</p>
              </div>
              <div className="flex w-full justify-start items-center">
                <input
                  className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  required
                ></input>
                <input
                  className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                  required
                ></input>
              </div>
              <div className="w-full flex">
                <div className="flex flex-col w-1/2 m-1">
                  <div className="w-full flex items-center justify-start">
                    <p className="m-2">Day of Birth</p>
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
                  </div>
                  <GenreDropdown></GenreDropdown>
                </div>
              </div>
              <div className="w-full flex items-center justify-start">
                <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                  <div className="w-full flex items-center justify-start">
                    <label htmlFor="phone" className="m-1">
                      Phone
                    </label>
                  </div>
                  <div className="flex m-1 w-full items-center justify-start">
                    <MdOutlineLocalPhone size={20}></MdOutlineLocalPhone>
                    <input
                      className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
                      required
                    />
                  </div>
                </div>
                <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                  <div className="w-full flex items-center justify-start">
                    <label htmlFor="email" className="m-1">
                      Email
                    </label>
                  </div>
                  <div className="flex m-1 w-full items-center justify-start">
                    <MdOutlineEmail size={20}></MdOutlineEmail>
                    <input
                      className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                      type="email"
                      id="email"
                      name="email"
                      required
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 h-full m-1 rounded-lg shadow-lg bg-white justify-center items-center self-start">
              <div className="w-full flex justify-start items-center">
                <p className="m-2">Contact information</p>
              </div>
              <div className="w-full flex flex-col m-1 justify-center items-center">
                <div className="w-full flex flex-col m-1 items-start justify-center">
                  <label htmlFor="addrs1" className="m-1">
                    Address Line 1
                  </label>
                  <input
                    className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    name="addrs1"
                    id="addrs1"
                  ></input>
                </div>
                <div className="w-full flex flex-col m-1 items-start justify-center">
                  <label htmlFor="addrs2" className="m-1">
                    Address Line 2
                  </label>
                  <input
                    className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    name="addrs2"
                    id="addrs2"
                  ></input>
                </div>
                <div className="w-full flex m-1 justify-center items-center">
                  <div className="w-full flex m-1 items-center justify-start">
                    <label htmlFor="city" className="m-2">
                      City
                    </label>
                    <input
                      className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                      type="text"
                      id="city"
                      name="city"
                    ></input>
                  </div>
                  <div className="w-full flex m-1 items-center justify-start">
                    <label htmlFor="state" className="m-2">
                      State
                    </label>
                    <input
                      className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                      type="text"
                      name="state"
                      id="state"
                    ></input>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="w-full flex flex-col m-1 items-start justify-center">
                    <label htmlFor="zip" className="m-1">
                      ZIP
                    </label>
                    <div className="w-1/2 flex items-center justify-start">
                      <input
                        className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                        type="text"
                        name="zip"
                        id="zip"
                      ></input>
                      <button
                        className="flex w-fit items-center justify-center p-1 border-2 border-blue-300 rounded-md bg-blue-100 hover:border-blue-500"
                        type="button"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start">
                  <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                    <div className="w-full flex items-center justify-start">
                      <label htmlFor="emergency1" className="m-1">
                        Emergency Contact 1
                      </label>
                    </div>
                    <div className="flex m-1 w-full items-center justify-start">
                      <MdOutlineLocalPhone size={20}></MdOutlineLocalPhone>
                      <input
                        className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                        type="text"
                        name="emergency1"
                        id="emergency1"
                      ></input>
                    </div>
                  </div>
                  <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                    <div className="w-full flex items-center justify-start">
                      <label htmlFor="emergency2" className="m-1">
                        Emergency Contact 2
                      </label>
                    </div>
                    <div className="flex m-1 w-full items-center justify-start">
                      <MdOutlineLocalPhone size={20}></MdOutlineLocalPhone>
                      <input
                        className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                        type="text"
                        name="emergency2"
                        id="emergency2"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center m-1">
                <button
                  className="w-fit flex items-center justify-center m-1 rounded-md shadow-md p-1 bg-blue-200 hover:bg-blue-300"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
