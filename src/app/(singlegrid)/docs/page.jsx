"use client";
import { useState } from "react";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaFileWord, FaFilePdf } from "react-icons/fa";
import docs from "../../data/docdata";
import Table from "@/app/components/table/Table";

export default function Docs() {
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
          <MdOutlineFileDownload
            size={25}
            className="hover:cursor-pointer hover:ring-2"
          />
        </div>
      ),
    },
    {
      id: "open-column",
      cell: (row) => (
        <div className="flex justify-left">
          <IoMdEye size={25} className="hover:cursor-pointer hover:ring-2" />
        </div>
      ),
    },
  ];

  const [data, setData] = useState(docs);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="p-4 h-full w-full">
        <Table
          data={data}
          columns={columns}
          filterFns={{
            tagsFiltering: tagsFilter,
          }}
          mainButton={"+ Add document"}
          filterOptions={[
            { label: "file", value: "File" },
            { label: "owner", value: "Owner" },
            { label: "tags", value: "Tags" },
            { label: "extension", value: "Extension" },
            { label: "size", value: "Size" },
          ]}
          sortOptions={[
            { label: "file", value: "File" },
            { label: "owner", value: "Owner" },
            { label: "tags", value: "Tags" },
            { label: "extension", value: "Extension" },
            { label: "size", value: "Size" },
          ]}
        ></Table>
      </div>
    </main>
  );
}
