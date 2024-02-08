"use client";
import { useState } from "react";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import users from "../../data/teamsdata";
import { GrUserManager } from "react-icons/gr";
import { FaTruckPlane } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import {
  GiAutoRepair,
  GiGearHammer,
  GiElectricalResistance,
} from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import Table from "@/app/components/table/Table";

export default function Teams() {
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

  const [data, setData] = useState(users);

  const [rowStatus, setRowStatus] = useState(
    data.map((user) => ({
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
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        ></input>
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        ></input>
      ),
    },
    {
      id: "#",
      header: "#",
      accessorKey: "id",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
    },
    {
      id: "name",
      header: "Name",
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
    },
    {
      id: "team",
      header: "Team",
      accessorKey: "team",
      cell: (row) => (
        <div className="flex justify-start items-center">
          {teamLabel[row.getValue()]}
          <p className="text-gray-700 font-medium text-sm pl-1">
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
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
    },
    {
      id: "phone",
      header: "Phone",
      accessorKey: "phone",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
    },
    {
      id: "buggy",
      header: "Buggy",
      accessorKey: "buggy",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
    },
    {
      id: "skidsteer",
      header: "Skidsteer",
      accessorKey: "skidsteer",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
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
                ? "bg-green-500"
                : "bg-red-500"
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
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="p-4 h-full w-full">
        <Table
          data={data}
          columns={columns}
          filterFns={{
            statusFiltering: statusFilter,
          }}
          mainButton={"+ Add document"}
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
        ></Table>
      </div>
    </main>
  );
}
