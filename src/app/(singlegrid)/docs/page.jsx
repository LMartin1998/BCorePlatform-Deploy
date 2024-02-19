"use client";
import { useContext, useEffect, useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { FilesContext } from "@/app/contexts/FilesContext";
import ShowFiles from "@/app/components/files/ShowFiles";

export default function Docs() {
  const { updateMainFiles, filterMain, searchMain } = useContext(FilesContext);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>

      <ShowFiles
        filesList={filterMain}
        updateFiles={updateMainFiles}
        searchPage={searchMain}
      ></ShowFiles>
    </main>
  );
}
