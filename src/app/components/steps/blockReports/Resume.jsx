import { PDFViewer } from "@react-pdf/renderer";
import WebView from "../../PDF/WebView";
import DocPDF from "../../PDF/DocPDF";
import React, { useContext } from "react";
import { GridContext } from "@/app/contexts/GridContext";

export default function Resume() {
  const { groupedData} = useContext(GridContext)
  return (
    <>
      <WebView  groupedData={ groupedData }></WebView>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <DocPDF groupedData={groupedData}></DocPDF>
      </PDFViewer>
    </>
  );
}
