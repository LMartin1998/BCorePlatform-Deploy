"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import ShowFiles from "@/app/components/files/ShowFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext, useEffect } from "react";

export default function Folder() {
  const { childrenFiles, updateChildrenFiles, folderPath } =
    useContext(FilesContext);

  console.log(folderPath);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <BreadcrumFiles></BreadcrumFiles>
      <div className="h-full w-full flex">
        <ShowFiles
          filesList={childrenFiles}
          updateFiles={updateChildrenFiles}
        ></ShowFiles>
      </div>
    </main>
  );
}
