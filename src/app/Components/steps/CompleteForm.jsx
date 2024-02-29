import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useContext } from "react";
import { GridContext } from "@/app/contexts/GridContext";

import DocPDF from "../PDF/DocPDF";
export default function CompleteForm() {
  const { groupedData } = useContext(GridContext);
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className=" text-green-400">
          <svg
            className="w-24 h-24"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="5" />
            <path fill="#ffffff" d="M7 10l2 2 4-4 1 1-5 5-3-3z" />
          </svg>
        </div>
        <div className="mt-3 text-xl text-center font-semibold uppercase text-green-500">
          Report generated succesfully
        </div>
        <div className="w-full flex justify-center gap-2">
          <PDFDownloadLink document={<DocPDF groupedData={groupedData}></DocPDF>} fileName="report.pdf">
            <button className="bg-white text-gray-700 border border-solid border-gray-700 px-3 py-1 rounded-md focus:outline-none transition duration-500 ease-in-out hover:bg-gray-600 hover:text-white">
              Download report
            </button>
          </PDFDownloadLink>
          <button className="bg-orange-500 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-orange-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
