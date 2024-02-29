"use client";
import { useContext, useEffect } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { FilesContext } from "@/app/contexts/FilesContext";
import ShowFiles from "@/app/components/files/ShowFiles";
import SearchFiles from "@/app/components/files/SearchFiles";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import DesignFiles from "@/app/components/files/DesignFiles";
import FilterFiles from "@/app/components/files/FilterFiles";
import { IoAddCircleOutline } from "react-icons/io5";
import AddFiles from "@/app/components/files/AddFiles";

export default function Docs() {
  const {
    resetFolderPath,
    updateMainFiles,
    filterMain,
    searchMain,
    mainType,
    updateMainType,
  } = useContext(FilesContext);

  useEffect(() => {
    resetFolderPath();
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <SearchFiles searchPage={searchMain}></SearchFiles>
      <div className="flex w-full">
        <BreadcrumFiles></BreadcrumFiles>
        <DesignFiles></DesignFiles>
      </div>
      <div className="flex w-1/3 m-1 justify-center items-center">
        <AddFiles></AddFiles>
        <FilterFiles type={mainType} updateType={updateMainType}></FilterFiles>
      </div>
      <ShowFiles
        filesList={filterMain}
        updateFiles={updateMainFiles}
      ></ShowFiles>
    </main>
  );
}
