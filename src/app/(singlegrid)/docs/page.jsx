"use client";
import { useEffect, useState } from "react";
import { filesList } from "@/app/data/filesdata";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ShowFiles from "@/app/components/Files/ShowFiles";

export default function Docs() {
  const [id, setId] = useState(null);
  const [files, setFiles] = useState(
    filesList.filter((file) => file.parentId === id)
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
