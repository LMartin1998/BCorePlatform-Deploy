"use client";
import { useState } from "react";
import { filesList } from "@/app/data/filesdata";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import ShowFiles from "@/app/Components/files/ShowFiles";

export default function Docs() {
  const [files, setFiles] = useState(
    filesList.filter((file) => file.parentId === null)
  );

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="m-1 grid justify-center items-center grid-cols-6">
        <ShowFiles parentId={null} filesList={files}></ShowFiles>
      </div>
    </main>
  );
}
