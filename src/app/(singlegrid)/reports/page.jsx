"use client";
import { useState, useContext } from "react";

//Components imports
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import Table from "@/app/components/table/Table";
import Tabs from "@/app/components/tabs/Tabs";

//Data imports
import reportBlocks from "@/app/data/reportBlocks";
import reportTeams from "@/app/data/reportTeams";

const columnsBlocks = [
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
      const blocksInReport = row.getValue();
      {
        return blocksInReport.map((r, index) => (
          <p
            className="text-gray-700 font-medium text-sm text-center"
            key={index}
          >
            {r}
          </p>
        ));
      }
    },
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
    cell: (row) => (
      <p className="text-gray-700 font-medium text-base text-center">
        {row.getValue()}
      </p>
    ),
  },
  {
    id: "status",
    header: "Status",
    accesorKey: "status",
    cell: (row) => {
      return (
        <p className="text-gray-700 font-medium text-base text-center">
          {row.getValue() ? "True" : "False"}
        </p>
      );
    },
  },
];

const columnsTeams = [
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
    id: "team",
    header: "Team",
    accessorKey: "team",
    cell: (row) => (
      <p className="text-gray-700 font-medium text-base text-center">
        {row.getValue()}
      </p>
    )
  },
  {
    id: "manager",
    header: "Manager",
    accessorKey: "manager",
    cell: (row) => (
      <p className="text-gray-700 font-medium text-base text-center">
        {row.getValue()}
      </p>
    )
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
    cell: (row) => (
      <p className="text-gray-700 font-medium text-base text-center">
        {row.getValue()}
      </p>
    ),
  },
];

// const tabsData = [
//   { label: "Blocks", data: reportBlocks, columns: columnsBlocks, mainButton:"+ Add block report"}, 
//   { label: "Teams",  data: reportTeams,  columns: columnsTeams,  mainButton:"+ Add team report"}, 
//   { label: "Daily",  data: reportBlocks, columns: columnsBlocks, mainButton:"+ Add report"},
//   { label: "Weekly", data: reportBlocks, columns: columnsBlocks, mainButton:"+ Add report"},
// ];

const tabsData = [
  { label: 'Blocks', content: <Table data={reportBlocks} columns={columnsBlocks} mainButton={"+ Add block report"} link={"/reports/addReport"}/> },
  { label: 'Teams',  content: <Table data={reportTeams}  columns={columnsTeams}  mainButton={"+ Add team  report"} link={"/reports/addReport"}/> },
  { label: 'Daily',  content: <Header></Header>}
]



export default function Reports() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="w-full p-4">
        <Tabs
          tabs={tabsData}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        ></Tabs>
        <div className="p-4 bg-white">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className={`${activeTab === index ? "" : "hidden"}`}
            >
              <div className="h-full w-full">
                {tab.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
