import { PDFViewer,  Document, Page, Text, View, Image, StyleSheet  } from "@react-pdf/renderer";
import WebView from "../PDF/WebView";
import DocPDF from "../PDF/DocPDF";

export default function Resume(){
    return (
        <>
        <WebView></WebView>
        <PDFViewer style={{width: "100%", height: "90vh"}}>
            <DocPDF></DocPDF>
        </PDFViewer>
        </>

    );
}