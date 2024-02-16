"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ChildrenFiles from "@/app/components/files/ChildrenFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext } from "react";

export default function Folder() {
  const { childrenFiles, updateChildrenFiles } = useContext(FilesContext);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="h-full w-full flex">
        <ChildrenFiles
          filesList={childrenFiles}
          updateChildrenFiles={updateChildrenFiles}
        ></ChildrenFiles>
      </div>
    </main>
  );
}
