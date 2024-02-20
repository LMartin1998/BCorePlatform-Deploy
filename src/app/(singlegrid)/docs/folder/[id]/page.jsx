"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ShowFiles from "@/app/components/files/ShowFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext } from "react";

export default function Folder() {
  const {
    updateChildrenFiles,
    filterChildren,
    searchChildren,
    childrenType,
    updateChildrenType,
  } = useContext(FilesContext);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <ShowFiles
        filesList={filterChildren}
        updateFiles={updateChildrenFiles}
        searchPage={searchChildren}
        type={childrenType}
        updateType={updateChildrenType}
      ></ShowFiles>
    </main>
  );
}
