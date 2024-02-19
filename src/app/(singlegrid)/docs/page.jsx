"use client";
import { useContext, useEffect, useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { FilesContext } from "@/app/contexts/FilesContext";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import ShowFiles from "@/app/components/files/ShowFiles";
import SearchFiles from "@/app/components/files/SearchFiles";

export default function Docs() {
  const {
    setParentId,
    setChildrenId,
    mainFiles,
    updateMainFiles,
    folderPath,
    setFolderPath,
    searchMain,
  } = useContext(FilesContext);

  useEffect(() => {
    setFolderPath([
      { id: null, path: "/docs", filesList: mainFiles, name: "Docs" },
    ]);
  }, []);

  useEffect(() => {
    setParentId(0);
    setChildrenId(0);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="h-full w-full flex flex-col">
        <div className="flex">
          <BreadcrumFiles></BreadcrumFiles>
          <SearchFiles searchPage={searchMain}></SearchFiles>
        </div>
        <ShowFiles
          filesList={mainFiles}
          updateFiles={updateMainFiles}
        ></ShowFiles>
      </div>
    </main>
  );
}
