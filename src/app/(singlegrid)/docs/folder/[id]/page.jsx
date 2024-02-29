"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ShowFiles from "@/app/components/files/ShowFiles";
import SearchFiles from "@/app/components/files/SearchFiles";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import DesignFiles from "@/app/components/files/DesignFiles";
import FilterFiles from "@/app/components/files/FilterFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddFiles from "@/app/components/files/AddFiles";

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
      <SearchFiles searchPage={searchChildren}></SearchFiles>
      <div className="flex w-full m-1 p-1">
        <BreadcrumFiles></BreadcrumFiles>
        <DesignFiles></DesignFiles>
      </div>
      <div className="flex w-1/3 m-2 justify-center items-center">
        <AddFiles></AddFiles>
        <FilterFiles
          type={childrenType}
          updateType={updateChildrenType}
        ></FilterFiles>
      </div>
      <ShowFiles
        filesList={filterChildren}
        updateFiles={updateChildrenFiles}
      ></ShowFiles>
    </main>
  );
}
