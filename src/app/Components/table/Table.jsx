import { useEffect, useRef, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { HiOutlineTrash } from "react-icons/hi2";
import TablePages from "../table/TablePages";
import TableFilters from "../table/TableFilters";
import TableSort from "../table/TableSort";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Table({
  data,
  columns,
  filterFns,
  mainButton,
  filterOptions,
  sortOptions,
  onDoubleClickEvent,
  setNewUser,
  link
}) {
  const router = useRouter();

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilter, setColumnFilter] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    filterFns: filterFns,
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

  const selectRef = useRef(null);

  const [select, setSelect] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSelect("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div>
      <div className="w-full flex justify-between">
        <Link href={link}>
          <button
            className="bg-orange-500 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-orange-600"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   router.push("/teams/adduser");
            // }}
          >
            {mainButton}
          </button>
        </Link>
        <div className="flex space-x-2">
          {table && (
            <button
              className={`flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3 ${
                table.getIsSomePageRowsSelected() ||
                table.getIsAllRowsSelected()
                  ? "opacity-100"
                  : "hover:cursor-not-allowed opacity-25"
              }`}
            >
              <HiOutlineTrash size={22} className="mr-1" />
              Delete
            </button>
          )}
          <TableFilters
            options={filterOptions}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            columnFilter={columnFilter}
            setColumnFilter={setColumnFilter}
          ></TableFilters>
          {table && <TableSort options={sortOptions} table={table}></TableSort>}
        </div>
      </div>

      <table className="w-full mt-3" ref={selectRef}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className="text-center bg-slate-50 select-none"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th
                  className="text-left p-1 text-gray-700 border-b border-solid border-gray-200"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex justify-center">
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
        <tbody className="hover:cursor-pointer">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                className={`border-b border-solid border-gray-200 ${
                  select == row.id ? "bg-indigo-50 transition-colors duration-300 ease-in-out" : "bg-white hover:bg-blue-50"
                }`}
                key={row.id}
                id={row.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelect(e.currentTarget.id);
                }}
                onDoubleClick={onDoubleClickEvent}
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
      {table && <TablePages table={table}></TablePages>}
    </div>
  );
}
