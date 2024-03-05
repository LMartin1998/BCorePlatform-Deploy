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
      <input
        className="w-4 h-4 rounded-full border-2 border-gray-400 appearance-none checked:bg-blue-400 disable:bg-red"
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></input>
    ),
    cell: ({ row }) => (
      <input
        className="w-4 h-4 rounded-full border-2 border-gray-400 appearance-none checked:bg-blue-400 disable:bg-red"
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></input>
    ),
  },
  {
    id: "blocks",
    header: "Blocks",
    accessorKey: "blocks",
    cell: (row) => {
        const blocksInReport  = row.getValue();
        {return blocksInReport.map((r, index) => (
          <p className="text-gray-700 font-medium text-base" key={index}>
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
        <p className="text-gray-700 font-medium text-base">{row.getValue()}</p>
    ),
  },
  {
    id: "status",
    header: "Status",
    accesorKey: "status",
    cell: (row) => {
      return <p className="text-gray-700 font-medium text-base">{row.getValue() ? "True" : "False"}</p>;
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
