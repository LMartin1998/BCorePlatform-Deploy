import { PDFViewer } from "@react-pdf/renderer";
import WebViewTeams from "../../pdf/WebViewTeams";
import DocPDF from "../../pdf/DocPDF";
import React, { useContext, useEffect } from "react";
import { StepperContext } from "@/app/contexts/StepperContext";

export default function ResumeTeams() {
    const {teamsSelected} = useContext(StepperContext);
    return(
        <>
            <WebViewTeams teamsSelected={ teamsSelected }></WebViewTeams>
        </>
    );
}