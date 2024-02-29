"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import GenreDropdown from "@/app/components/teams/GenreDropdown";
import TeamsDatePicker from "@/app/components/teams/TeamsDatePicker";
import { useEffect, useState } from "react";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";

export default function AddUser() {
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

  const [verifyNumber, setVerifyNumber] = useState(true);
  const [number, setNumber] = useState("");
  const [numberRegex, setNumberReget] = useState(
    new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$")
  );
  const verifyPhoneNumber = (e) => {
    e.stopPropagation();
    setNumber(e.target.value);
  };

  useEffect(() => {
    if (number) {
      setVerifyNumber(!numberRegex.test(number));
    } else {
      setVerifyNumber(true);
    }
  }, [number]);

  const [verifyEmail, setVerifyEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [emailRegex, setEmailRegex] = useState(
    new RegExp("^[\\w.-]+@([\\w-]+\\.)+[\\w-]{2,}$")
  );

  const verifyEmailInput = (e) => {
    e.stopPropagation();
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (email) {
      setVerifyEmail(!emailRegex.test(email));
    } else {
      setVerifyEmail(true);
    }
  }, [email]);

  const [date, setDate] = useState(new Date());

  const [verifyENumber1, setVerifyENumber1] = useState(true);
  const [eNumber1, setENumber1] = useState("");
  const verifyPhoneNumber1 = (e) => {
    e.stopPropagation();
    setENumber1(e.target.value);
  };
  useEffect(() => {
    if (eNumber1) {
      setVerifyENumber1(!numberRegex.test(eNumber1));
    } else {
      setVerifyENumber1(true);
    }
  }, [eNumber1]);
  const [verifyENumber2, setVerifyENumber2] = useState(true);
  const [eNumber2, setENumber2] = useState("");
  const verifyPhoneNumber2 = (e) => {
    e.stopPropagation();
    setENumber2(e.target.value);
  };
  useEffect(() => {
    if (eNumber2) {
      setVerifyENumber2(!numberRegex.test(eNumber2));
    } else {
      setVerifyENumber2(true);
    }
  }, [eNumber2]);

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
              </div>
            </div>
            <div className="w-full flex items-center justify-start">
              <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                <div className="w-full flex items-center justify-start">
                  <p className="m-1">Phone</p>
                  {verifyNumber && <span className="text-red-500">*</span>}
                </div>
                <div className="flex m-1 w-full items-center justify-start">
                  <MdOutlineLocalPhone size={20}></MdOutlineLocalPhone>
                  <input
                    className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    placeholder="..."
                    value={number}
                    onChange={verifyPhoneNumber}
                  ></input>
                </div>
              </div>
              <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                <div className="w-full flex items-center justify-start">
                  <p className="m-1">Email</p>
                  {verifyEmail && <span className="text-red-500">*</span>}
                </div>
                <div className="flex m-1 w-full items-center justify-start">
                  <MdOutlineEmail size={20}></MdOutlineEmail>
                  <input
                    className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    placeholder="..."
                    value={email}
                    onChange={verifyEmailInput}
                  ></input>
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
                <p className="m-1">Address Line 1</p>
                <input
                  className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  placeholder="..."
                ></input>
              </div>
              <div className="w-full flex flex-col m-1 items-start justify-center">
                <p className="m-1">Address Line 2</p>
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
              <div className="w-full flex items-center justify-center">
                <div className="w-full flex flex-col m-1 items-start justify-center">
                  <p className="m-1">ZIP</p>
                  <div className="w-1/2 flex items-center justify-start">
                    <input
                      className="m-2 p-1 w-1/2 flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                      type="text"
                      placeholder="..."
                    ></input>
                    <button className="flex w-fit items-center justify-center p-1 border-2 border-blue-300 rounded-md bg-blue-100 hover:border-blue-500">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-start">
                <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                  <div className="w-full flex items-center justify-start">
                    <p className="m-1">Emergency Contact 1</p>
                    {verifyENumber1 ? (
                      <span className="text-blue-500">*</span>
                    ) : (
                      <span className="text-green-500">*</span>
                    )}
                  </div>
                  <div className="flex m-1 w-full items-center justify-start">
                    <MdOutlineLocalPhone size={20}></MdOutlineLocalPhone>
                    <input
                      className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                      type="text"
                      placeholder="..."
                      value={eNumber1}
                      onChange={verifyPhoneNumber1}
                    ></input>
                  </div>
                </div>
                <div className="w-1/2 m-1 flex flex-col items-start justify-center">
                  <div className="w-full flex items-center justify-start">
                    <p className="m-1">Emergency Contact 2</p>
                    {verifyENumber2 ? (
                      <span className="text-blue-500">*</span>
                    ) : (
                      <span className="text-green-500">*</span>
                    )}
                  </div>
                  <div className="flex m-1 w-full items-center justify-start">
                    <MdOutlineLocalPhone size={20}></MdOutlineLocalPhone>
                    <input
                      className="m-2 p-1 w-full flex border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                      type="text"
                      placeholder="..."
                      value={eNumber2}
                      onChange={verifyPhoneNumber2}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
