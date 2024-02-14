"use client";
import { useParams, useRouter } from "next/navigation";
import { filesList } from "@/app/data/filesdata";
import { useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ShowFiles from "@/app/components/Files/ShowFiles";

export default function Folder() {
  const params = useParams();
  const router = useRouter();
  console.log(router);
  console.log(params);
  const folderId = params.folder;
  const [id, setId] = useState(Number(folderId));

  const [files, setFiles] = useState(
    filesList.filter((file) => file.id === id)
  );

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="h-full w-full grid">
        <ShowFiles parentId={id} filesList={files}></ShowFiles>
      </div>
    </main>
  );
}
