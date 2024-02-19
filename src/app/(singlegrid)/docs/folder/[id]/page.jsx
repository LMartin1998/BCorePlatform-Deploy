"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import SearchFiles from "@/app/components/files/SearchFiles";
import ShowFiles from "@/app/components/files/ShowFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext, useEffect } from "react";

export default function Folder() {
  const { updateChildrenFiles, filterChildren, searchChildren } =
    useContext(FilesContext);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="h-full w-full flex flex-col">
        <div className="flex">
          <BreadcrumFiles></BreadcrumFiles>
          <SearchFiles searchPage={searchChildren}></SearchFiles>
        </div>
        <ShowFiles
          filesList={filterChildren}
          updateFiles={updateChildrenFiles}
        ></ShowFiles>
      </div>
    </main>
  );
}
