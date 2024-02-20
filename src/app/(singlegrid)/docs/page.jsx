"use client";
import { useContext, useEffect, useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { FilesContext } from "@/app/contexts/FilesContext";
import ShowFiles from "@/app/components/files/ShowFiles";
import SearchFiles from "@/app/components/files/SearchFiles";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import DesignFiles from "@/app/components/files/DesignFiles";
import FilterFiles from "@/app/components/files/FilterFiles";

export default function Docs() {
  const { updateMainFiles, filterMain, searchMain, mainType, updateMainType } =
    useContext(FilesContext);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <SearchFiles searchPage={searchMain}></SearchFiles>
      <div className="flex w-full">
        <BreadcrumFiles></BreadcrumFiles>
        <DesignFiles></DesignFiles>
      </div>
      <FilterFiles type={mainType} updateType={updateMainType}></FilterFiles>
      <ShowFiles
        filesList={filterMain}
        updateFiles={updateMainFiles}
      ></ShowFiles>
    </main>
  );
}
