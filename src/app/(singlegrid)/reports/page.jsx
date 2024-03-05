"use client";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import { useState, useContext } from "react";
import Table from "@/app/components/table/Table";

// Importaciones de datos
import reportBlocks from "@/app/data/reportBlocks";

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
    id: "blocks",
    header: "Blocks",
    accessorKey: "blocks",
    cell: (row) => {
        const blocksInReport  = row.getValue();
        {return blocksInReport.map((r, index) => (
          <p className="text-gray-700 font-medium text-sm text-center" key={index}>
            {r}
          </p>
        ))}
    },
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
    cell: (row) => (
        <p className="text-gray-700 font-medium text-base text-center">{row.getValue()}</p>
    ),
  },
  {
    id: "status",
    header: "Status",
    accesorKey: "status",
    cell: (row) => {
      return <p className="text-gray-700 font-medium text-base text-center">{row.getValue() ? "True" : "False"}</p>;
    },
  }
];

export default function Reports() {
    console.log(columns);
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="p-4 h-full w-full">
        <Table 
            data={reportBlocks} 
            columns={columns}
        ></Table>
      </div>
    </main>
  );
}
