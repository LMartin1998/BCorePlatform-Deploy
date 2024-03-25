"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/widgets/TopCards";
import GenreDropdown from "@/app/components/teams/GenreDropdown";
import TeamsDatePicker from "@/app/components/teams/TeamsDatePicker";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";

export default function AddUser() {
  const save = (formData) => {
    const firstName = formData.get("firstName");
    alert(firstName);
  };

  const [date, setDate] = useState(new Date());

  return (
    <main className="bg-gray-100 h-screen min-h-screen dark:bg-[#1A202C]">
      <Header></Header>
      <TopCards></TopCards>
      <div className="flex justify-center items-start p-4">
        <form action={save} className="flex w-full dark:text-white">
          {/* Contenedor de información general */}
          <div className="flex flex-col w-1/2 m-1 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <div className="flex justify-start items-center m-2">
              <p>General information</p>
            </div>
            {/* Campos de nombre completo */}
            <div className="flex w-full">
              <input
                className="flex-1 m-2 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                required
              />
              <input
                className="flex-1 m-2 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                required
              />
            </div>
            {/* Selección de fecha y género */}
            <div className="flex w-full">
              <div className="flex flex-col w-1/2 m-1">
                <div className="flex items-center justify-start m-2">
                  <p>Day of Birth</p>
                </div>
                <TeamsDatePicker date={date} updateDate={setDate} />
              </div>
              <div className="flex flex-col w-1/2 m-1">
                <div className="flex items-center justify-start m-2">
                  <p>Genre</p>
                </div>
                <GenreDropdown />
              </div>
            </div>
            {/* Campos de teléfono y correo electrónico */}
            <div className="flex w-full">
              <div className="flex flex-col w-1/2 m-1">
                <label htmlFor="phone" className="m-2">
                  Phone
                </label>
                <div className="flex items-center m-2">
                  <MdOutlineLocalPhone size={20} />
                  <input
                    className="flex-1 m-1 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/2 m-1">
                <label htmlFor="email" className="m-2">
                  Email
                </label>
                <div className="flex items-center m-2">
                  <MdOutlineEmail size={20} />
                  <input
                    className="flex-1 m-1 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>
            </div>
            {/* Botón de guardado */}
            <div className="flex items-center justify-center">
              <button
                className="px-4 mt-1 border-2 border-blue-300 rounded-md bg-blue-100 hover:border-blue-500 hover:bg-blue-300 dark:bg-gray-900 dark:border-white dark:hover:bg-gray-300 dark:text-white"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
          {/* Contenedor de información de contacto */}
          <div className="flex flex-col w-1/2 m-1 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <div className="flex justify-start items-center m-2">
              <p>Contact information</p>
            </div>
            {/* Campos de dirección */}
            <div className="flex flex-col w-full m-1">
              <label htmlFor="addrs1" className="m-1">
                Address Line 1
              </label>
              <input
                className="m-2 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                type="text"
                name="addrs1"
                id="addrs1"
              />
            </div>
            <div className="flex flex-col w-full m-1">
              <label htmlFor="addrs2" className="m-1">
                Address Line 2
              </label>
              <input
                className="m-2 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                type="text"
                name="addrs2"
                id="addrs2"
              />
            </div>
            {/* Campos de ciudad, estado y código postal */}
            <div className="flex w-full m-1">
              <div className="flex flex-col w-1/2">
                <label htmlFor="city" className="m-2">
                  City
                </label>
                <input
                  className="m-2 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  id="city"
                  name="city"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="state" className="m-2">
                  State
                </label>
                <input
                  className="m-2 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  name="state"
                  id="state"
                />
              </div>
            </div>
            <div className="flex flex-col w-full m-1">
              <label htmlFor="zip" className="m-1">
                ZIP
              </label>
              <div className="flex items-center m-1">
                <input
                  className="flex-1 m-2 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  name="zip"
                  id="zip"
                />
                <button
                  className="p-1 ml-2 border-2 border-blue-300 rounded-md bg-blue-100 hover:border-blue-500"
                  type="button"
                >
                  Verify
                </button>
              </div>
            </div>
            {/* Campos de contacto de emergencia */}
            <div className="flex w-full m-1">
              <div className="flex flex-col w-1/2">
                <label htmlFor="emergency1" className="m-2">
                  Emergency Contact 1
                </label>
                <div className="flex items-center m-2">
                  <MdOutlineLocalPhone size={20} />
                  <input
                    className="flex-1 m-1 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    name="emergency1"
                    id="emergency1"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="emergency2" className="m-2">
                  Emergency Contact 2
                </label>
                <div className="flex items-center m-2">
                  <MdOutlineLocalPhone size={20} />
                  <input
                    className="flex-1 m-1 p-1 border-2 border-gray-200 rounded-md outline-none focus:border-blue-500"
                    type="text"
                    name="emergency2"
                    id="emergency2"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
