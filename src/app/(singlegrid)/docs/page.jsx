"use client";
import { useContext, useEffect, useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import SidebarFiles from "@/app/components/files/SidebarFiles";
import ContainerFiles from "@/app/components/files/ContainerFiles";
import { FilesContext } from "@/app/contexts/FilesContext";

export default function Docs() {
  const {
    setParentId,
    mainFiles,
    childrenFiles,
    updateMainFiles,
    updateChildrenFiles,
  } = useContext(FilesContext);

  // const [rootFiles, setRootFiles] = useState(
  //   filesList.filter((file) => file.parentId === null)
  // );

  // const [rootId, setRootId] = useState(0);

  // const [childrenFiles, setChildrenFiles] = useState(
  //   rootFiles[rootId].children || []
  // );

  // const [childrenId, setChildrenId] = useState(0);

  // const updateRootFiles = (e) => {
  //   e.stopPropagation();
  //   setRootId(Number(e.currentTarget.id));
  //   setChildrenFiles(rootFiles[Number(e.currentTarget.id)].children);
  // };

  // const updateChildrenFiles = (e) => {
  //   e.stopPropagation();
  //   setChildrenId(Number(e.currentTarget.id));
  //   setChildrenFiles(childrenFiles[Number(e.currentTarget.id)].children);
  // };

  useEffect(() => {
    setParentId(0);
  });

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="h-full w-full flex">
        <SidebarFiles
          filesList={mainFiles}
          updateRootFiles={updateMainFiles}
        ></SidebarFiles>
        <ContainerFiles
          filesList={childrenFiles}
          updateChildrenFiles={updateChildrenFiles}
        ></ContainerFiles>
      </div>
    </main>
  );
}
