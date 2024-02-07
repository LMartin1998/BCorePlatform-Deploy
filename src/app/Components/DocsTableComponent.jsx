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
import { useState } from "react";
import { FaFileWord, FaFilePdf } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import DocsDropdown from "./DocsDropdown";
import DocsSort from "./DocsSort";
import TablePages from "./TablePages";

export default function DocsTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilter, setColumnFilter] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 2,
  });

  const extensionLabel = {
    docx: <FaFileWord size={25} />,
    pdf: <FaFilePdf size={25} />,
  };

  const tagsFilter = (row, columnId, value) => {
    return row
      .getValue(columnId)
      .some((r) => r.toLowerCase().includes(value.toLowerCase()));
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
      filterFn: "tagsFiltering",
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
    filterFns: {
      tagsFiltering: tagsFilter,
    },
    state: {
      pagination: pagination,
      rowSelection: rowSelection,
      sorting: sorting,
      columnFilters: columnFilter,
      globalFilter: globalFilter,
    },
    enableRowSelection: true,
    enableFilters: true,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilter,
    onGlobalFilterChange: setGlobalFilter,
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
          {table && (
            <button
              className={`flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3 ${table.getIsSomePageRowsSelected() ||
                table.getIsAllRowsSelected()
                ? "opacity-100"
                : "hover:cursor-not-allowed opacity-25"
                }`}
            >
              <HiOutlineTrash size={22} className="mr-1" />
              Delete
            </button>
          )}
          <DocsDropdown
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            columnFilter={columnFilter}
            setColumnFilter={setColumnFilter}
          ></DocsDropdown>
          {table && <DocsSort table={table}></DocsSort>}
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
                        header.getContext()
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
      {table && <TablePages
        table={table}
      ></TablePages>}
    </>
  );
}
