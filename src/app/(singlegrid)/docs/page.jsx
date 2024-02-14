"use client";
import { useEffect, useState } from "react";
import { filesList } from "@/app/data/filesdata";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import SidebarFiles from "@/app/components/Files/SidebarFiles";
import ContainerFiles from "@/app/components/Files/ContainerFiles";
import Link from "next/link";

export default function Docs() {
  const [path, setPath] = useState("/");

  const [rootFiles, setRootFiles] = useState(
    filesList.filter((file) => file.parentId === null)
  );

  const [rootId, setRootId] = useState(0);

  const [childrenFiles, setChildrenFiles] = useState(
    rootFiles[rootId].children || []
  );

  const [childrenId, setChildrenId] = useState(0);

  const updateRootFiles = (e) => {
    e.stopPropagation();
    setRootId(Number(e.currentTarget.id));
    setChildrenFiles(rootFiles[Number(e.currentTarget.id)].children);
    setPath(`/docs/${Number(e.currentTarget.id)}`);
  };

  const updateChildrenFiles = (e) => {
    e.stopPropagation();
    setChildrenId(Number(e.currentTarget.id));
    setChildrenFiles(childrenFiles[Number(e.currentTarget.id)].children);
    setPath(`${path}/${Number(e.currentTarget.id)}`);
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="flex m-1">
        {rootFiles && (
          <div className="m-1 w-1/5 h-full grid">
            <p>Name</p>
            <SidebarFiles
              filesList={rootFiles}
              updateRootFiles={updateRootFiles}
            ></SidebarFiles>
          </div>
        )}
        {childrenFiles && (
          <div className="m-1 w-full h-full grid">
            <p>
              <Link href={path}>{path}</Link>
            </p>
            <p>Files</p>
            <ContainerFiles
              filesList={childrenFiles}
              updateChildrenFiles={updateChildrenFiles}
            ></ContainerFiles>
          </div>
        )}
      </div>
    </main>
  );
}
