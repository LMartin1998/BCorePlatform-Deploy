"use client";
import { useEffect, useState } from "react";
import { filesList } from "@/app/data/filesdata";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import SidebarFiles from "@/app/components/Files/SidebarFiles";
import ContainerFiles from "@/app/components/Files/ContainerFiles";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Docs() {
  const params = useParams();
  const router = useRouter();

  const [path, setPath] = useState(`/${params.rootId}/${params.pageId}`);

  const [rootFiles, setRootFiles] = useState(
    filesList.filter((file) => file.parentId === null)
  );

  const [rootId, setRootId] = useState(params.rootId);

  const [childrenFiles, setChildrenFiles] = useState(
    rootFiles[rootId].children || []
  );

  const [childrenId, setChildrenId] = useState(params.pageId);

  const updateRootFiles = (e) => {
    e.stopPropagation();
    router.push(`/docs/${Number(e.currentTarget.id)}/0`);
    setPath(`/${Number(e.currentTarget.id)}/${childrenId}`);
  };

  const updateChildrenFiles = (e) => {
    e.stopPropagation();
    setChildrenId(Number(e.currentTarget.id));
    setChildrenFiles(childrenFiles[Number(e.currentTarget.id)].children);
    setPath(`/${params.rootId}/${Number(e.currentTarget.id)}`);
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
              <Link href={`/docs${path}`}>{path}</Link>
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
