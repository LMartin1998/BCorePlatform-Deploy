"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import docs from "../data/docdata";
import { useContext, useEffect, useState } from "react";
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from "react-icons/md";
import { FaFileWord, FaFilePdf } from "react-icons/fa";
import { GiMechanicalArm, GiElectricalResistance } from "react-icons/gi";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoFilterOutline } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from "react-icons/fc";
import DocsDropdown from "./DocsDropdown";
import { DocContext } from "../contexts/DocsContext";

export default function DocsTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilter, setColumnFilter] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState([]);

  const extensionLabel = {
    docx: <FaFileWord size={25} />,
    pdf: <FaFilePdf size={25} />,
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
      id: "file",
      header: "File",
      accessorFn: (row) =>
        `${row.file.replace(".".concat("", row.extension), "")}`,
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
    },
    {
      id: "owner",
      header: "Owner",
      accessorKey: "owner",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
      ),
    },
    {
      id: "tags",
      header: "Tags",
      accessorKey: "tags",
      cell: (row) => (
        <div className="flex items-center justify-start">
          {row.getValue().map((tag, index) => (
            <div key={index} className="bg-gray-100 rounded-lg mx-1 px-2">
              <p className="text-gray-700 font-semibold text-sm text-center py-1 mb-1 flex-1">
                {tag}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "extension",
      header: "Extension",
      accessorKey: "extension",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-sm">
          {extensionLabel[row.getValue()]}
          {row.getValue()}
        </p>
      ),
    },
    {
      id: "size",
      header: "Size",
      accessorKey: "size",
      cell: (row) => (
        <p className="text-gray-700 font-medium text-sm">{row.getValue()}</p>
      ),
    },
    {
      id: "download-column",
      cell: (row) => (
        <div className="flex justify-left">
          <MdOutlineFileDownload size={25} className="hover:cursor-pointer" />
        </div>
      ),
    },
    {
      id: "open-column",
      cell: (row) => (
        <div className="flex justify-left">
          <IoMdEye size={25} className="hover:cursor-pointer" />
        </div>
      ),
    },
  ];

  const [data, setData] = useState(docs);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection: rowSelection,
      sorting: sorting,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
          <DocsDropdown
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            columnFilter={columnFilter}
            setColumnFilter={setColumnFilter}
          ></DocsDropdown>
          <button
            className="flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3"
            onClick={() => {
              const nameColumn = table.getColumn("file");
              console.log(nameColumn);
              nameColumn.toggleSorting();
            }}
          >
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
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex jusity-start">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </div>
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
                        cell.getContext(),
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
