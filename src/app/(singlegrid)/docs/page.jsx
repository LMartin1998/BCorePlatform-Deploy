"use client";
import { useContext, useEffect, useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import MainFiles from "@/app/components/files/MainFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";

export default function Docs() {
  const {
    setParentId,
    setChildrenId,
    mainFiles,
    updateMainFiles,
    folderPath,
    setFolderPath,
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
      <div className="h-full w-full flex">
        <BreadcrumFiles></BreadcrumFiles>
        <MainFiles
          filesList={mainFiles}
          updateRootFiles={updateMainFiles}
        ></MainFiles>
      </div>
    </main>
  );
}
