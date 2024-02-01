"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import User from "../data/teamsdata";
import { GrUserManager } from "react-icons/gr";
import { FaTruckPlane } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from "react-icons/md";
import { useState } from "react";

import { HiOutlineTrash } from "react-icons/hi2";
import { IoFilterOutline } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";

export default function TeamsTable() {
  const teamLabel = {
    Logistics: <FaTruckPlane size={20} />,
    Manager: <GrUserManager size={20} />,
    Operator: <IoCall size={20} />,
  };

  const [data, setData] = useState(User);

  const [rowSelection, setRowSelection] = useState({});

  const [rowStatus, setRowStatus] = useState(data.map((user) => ({
    id: user.id,
    status: user.status,
  })));

  const updateStatus = (rowId) => {
    setRowStatus((prevRowStatus) => ({
      ...prevRowStatus,
      [rowId]: {
        ...prevRowStatus[rowId],
        status: !prevRowStatus[rowId].status,
      },
    }));
  };

  const columns = [
    {
      id: "selector-column",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={
            table.getIsAllRowsSelected()}
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
      id: "number-column",
      header: "#",
      cell: ({ row, table }) => <p className="text-gray-700 font-medium text-base">{row.index % table.getState().pagination.pageSize + 1}</p>,
    },
    {
      header: "First Name",
      accessorKey: "firstName",
      cell: (row) => <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>,
    },
    {
      header: "Team",
      accessorKey: "team",
      cell: (row) => (
        <div className="flex justify-center">
          {teamLabel[row.getValue()]} 
          <p className="text-gray-700 font-medium text-sm pl-1">{row.getValue()}</p>
        </div>
      ),
    },
    {
      header: "Role",
      accessorKey: "role",
      cell: (row) => <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>,
    },
    {
      header: "Phone",
      accessorKey: "phone",
      cell: (row) => <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>,
    },
    {
      header: "Buggy",
      accessorKey: "buggy",
      cell: (row) => <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>,
    },
    {
      header: "Skidsteer",
      accessorKey: "skidsteer",
      cell: (row) => <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>,
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <div className="flex items-center">
          <div
            className={`cursor-pointer relative ${rowStatus[row.id] && rowStatus[row.id].status ? "bg-green-500" : "bg-red-500"
              } rounded-full w-8 h-4 transition`}
            onClick={() => updateStatus(row.id)}
          >
            <div
              className={`absolute ${rowStatus[row.id] && rowStatus[row.id].status ? "translate-x-4" : "translate-x-0"
                } left-0 bg-white w-4 h-4 rounded-full shadow-md transition transform duration-300 ease-in-out`}
            />
          </div>
        </div>
      ),
    },
  ];


  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <div className="w-full flex justify-between">
        <button className="bg-orange-500 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-orange-600">
          + Add document
        </button>
        <div className="flex space-x-2">
          <button className="flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3">
            <HiOutlineTrash size={22} className="mr-1" />
            Delete
          </button>
          <button className="flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3">
            <IoFilterOutline size={22} className="mr-1" />
            Filter
          </button>
          <button className="flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3">
            <BiSortAlt2 size={22} className="mr-1" />
            Sort
          </button>
        </div>
      </div>
      <table className="w-full mt-3">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className="text-left bg-gray-200 select-none"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th
                  className="text-left p-1 text-gray-700 border-b border-solid border-gray-400"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                className="bg-white border-b border-solid border-gray-400 hover:bg-gray-100"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td className="py-1 px-1" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2 mt-2">
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <MdFirstPage />
        </button>
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <MdChevronLeft />
        </button>
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <MdChevronRight />
        </button>
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <MdLastPage />
        </button>
        <select
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[1, 2, 3, 4, 5].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
