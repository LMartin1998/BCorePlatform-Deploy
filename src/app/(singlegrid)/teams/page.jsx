"use client";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import { GrUserManager } from "react-icons/gr";
import { FaTruckPlane } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import {
  GiAutoRepair,
  GiGearHammer,
  GiElectricalResistance,
} from "react-icons/gi";
import { HiOutlineTruck } from "react-icons/hi";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import Table from "@/app/components/table/Table";
import { TeamsContext } from "@/app/contexts/TeamsContext";
import { ThemeContext } from "@/app/Contexts/ThemeContext";

export default function Teams() {
  const { usersList, updateUserInfoId } = useContext(TeamsContext);
  const { theme } = useContext(ThemeContext);
  //Solo corre a la carga de la pagina
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  const [newUser, setNewUser] = useState(false);

  const teamLabel = {
    Logistics: <FaTruckPlane size={20} />,
    Manager: <GrUserManager size={20} />,
    Operator: <IoCall size={20} />,
    Remediation: <GiAutoRepair size={20} />,
    "Mechanical Remediation": <GiGearHammer size={20} />,
    "DC Transtions & Road Crossing": <GiElectricalResistance size={20} />,
    Cleaning: <MdOutlineCleaningServices size={20} />,
    "Tool Room": <FaTools size={20} />,
  };

  const vehicleLabel = {
    "0000": <HiOutlineTruck size={16}></HiOutlineTruck>,
    1111: <MdOutlineDirectionsBike size={16}></MdOutlineDirectionsBike>,
  };

  let timeOutId;
  const [showInfo, setShowInfo] = useState("");

  const hoverEnter = (e) => {
    e.stopPropagation();
    timeOutId = setTimeout(() => {
      setShowInfo(e.target.id);
    }, 1000);
  };
  const hoverLeave = (e) => {
    e.stopPropagation();
    clearTimeout(timeOutId);
    setShowInfo("");
  };

  const [rowStatus, setRowStatus] = useState(
    usersList.map((user) => ({
      id: user.id,
      status: user.status,
    }))
  );

  const updateStatus = (rowId) => {
    setRowStatus((prevRowStatus) => ({
      ...prevRowStatus,
      [rowId]: {
        ...prevRowStatus[rowId],
        status: !prevRowStatus[rowId].status,
      },
    }));
  };

  const statusFilter = (row, columnId, value) => {
    const b = row.getValue(columnId);
    const s = b.toString();
    return s === value.toLowerCase() || b == value;
  };

  const columns = [
    {
      id: "selector-column",
      header: ({ table }) => (
        <div className="flex items-center">
          <input
            className="appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none transition-all duration-300 ease-in-out"
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></input>
        </div>
      ),
      cell: ({ row }) => (
      <div className="flex justify-center items-center ">
        <input
          className="appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none transition-all duration-300 ease-in-out"
          type="checkbox"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></input>
      </div>
      ),
    },
    {
      id: "name",
      header: "Name",
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base dark:text-slate-50">{row.getValue()}</p>
      ),
    },
    {
      id: "team",
      header: "Team",
      accessorKey: "team",
      cell: (row) => (
        <div className="flex justify-start items-center">
          {teamLabel[row.getValue()]}
          <p className="text-gray-700 font-medium text-sm pl-1 dark:text-slate-50">
            {row.getValue()}
          </p>
        </div>
      ),
    },
    {
      id: "role",
      header: "Role",
      accessorKey: "role",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base dark:text-slate-50">{row.getValue()}</p>
      ),
    },
    {
      id: "phone",
      header: "Phone",
      accessorKey: "phone",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base dark:text-slate-50">{row.getValue()}</p>
      ),
    },
    {
      id: "machinery",
      header: "Machinery",
      accessorFn: (row) => `${row.id} ${row.machinery}`,
      cell: (row) => {
        const accesorArr = row.getValue().split(" ");
        const id = accesorArr[0];
        const machinery = accesorArr[1].split(",");
        const length = machinery.length;
        const serial = machinery.filter((r) => !isNaN(r))[0];
        const firstFourDigits = serial.substring(0, 4);

        return length <= 1 ? (
          vehicleLabel[firstFourDigits]
        ) : (
          <div className="flex flex-wrap justify-start items-baseline mt-2 size-8">
            <div className="relative bg-white py-2 px-4 border border-black rounded-full">
              {vehicleLabel[firstFourDigits]}
              <span
                className="absolute bg-gray-900 text-gray-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3 dark:text-slate-50"
                id={id}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                +{length - 1}
              </span>
              {showInfo == id && (
                <div
                  className="absolute z-10 bg-gray-900 text-gray-100 px-2 py-1 text-xs font-bold rounded border border-gray-700 -top-8 -right-16 overflow-hidden dark:text-slate-50"
                  onMouseLeave={hoverLeave}
                >
                  {machinery.map((r, index) => (
                    <p className="truncate" key={index}>
                      {r}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      },
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <div className="flex items-center">
          <div
            className={`cursor-pointer relative ${
              rowStatus[row.id] && rowStatus[row.id].status
                ? "bg-green-500 dark:bg-purple-300"
                : "bg-red-500 dark:bg-red-100"
            } rounded-full w-8 h-4 transition`}
            onClick={() => updateStatus(row.id)}
          >
            <div
              className={`absolute ${
                rowStatus[row.id] && rowStatus[row.id].status
                  ? "translate-x-4"
                  : "translate-x-0"
              } left-0 bg-white w-4 h-4 rounded-full shadow-md transition transform duration-300 ease-in-out`}
            />
          </div>
        </div>
      ),
      filterFn: "statusFiltering",
    },
  ];

  return (
    <main
      className={`bg-gray-100 dark:bg-[#1a202c] min-h-screen ${
        newUser ? "opacity-5" : "opacity-100"
      }`}
    >
      <Header></Header>
      <TopCards></TopCards>
      <div className="p-4 h-full w-full">
        <Table
          data={usersList}
          columns={columns}
          filterFns={{
            statusFiltering: statusFilter,
          }}
          mainButton={"+ Add user"}
          filterOptions={[
            { label: "name", value: "Name" },
            { label: "team", value: "Team" },
            { label: "role", value: "Role" },
            { label: "phone", value: "Phone" },
            { label: "buggy", value: "Buggy" },
            { label: "skidsteer", value: "Skidsteer" },
            { label: "status", value: "Status" },
          ]}
          sortOptions={[
            { label: "name", value: "Name" },
            { label: "team", value: "Team" },
            { label: "role", value: "Role" },
            { label: "phone", value: "Phone" },
            { label: "buggy", value: "Buggy" },
            { label: "skidsteer", value: "Skidsteer" },
            { label: "status", value: "Status" },
          ]}
          onDoubleClickEvent={updateUserInfoId}
          setNewUser={setNewUser}
          link={"/teams/adduser"}
        ></Table>
      </div>
    </main>
  );
}
