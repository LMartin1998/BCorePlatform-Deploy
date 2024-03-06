"use client";
import { useState, useContext } from "react";

//Components imports
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import Table from "@/app/components/table/Table";
import Tabs from "@/app/components/tabs/Tabs";

//Data imports
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

const tabsData = [
  { label: 'Tab 1' },
  { label: 'Tab 2' },
  { label: 'Tab 3' },
];

export default function Reports() {
  
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange  = (index) => {
    setActiveTab(index);
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="w-full p-4">
        <Tabs tabs={tabsData} activeTab={activeTab} onTabChange={handleTabChange}></Tabs>
        <div className="mt-4 p-4 bg-gray-700">
          {tabsData.map((tab, index) => (
            <div key={index} className={`${activeTab === index ? '' : 'hidden'}`}>
              Content of {tab.label} 
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 h-full w-full">
        <Table 
            data={reportBlocks} 
            columns={columns}
            mainButton={"+ Add report"}
            link={"/reports/addReport"}
        ></Table>
      </div>
    </main>
  );
}
