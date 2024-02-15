"use client";
import { useParams, useRouter } from "next/navigation";
import { filesList } from "@/app/data/filesdata";
import { useContext, useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ShowFiles from "@/app/components/Files/ShowFiles";
import { FilesContext } from "@/app/contexts/FilesContext";

export default function Folder() {
  const { files } = useContext(FilesContext);
  console.log(files);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="h-full w-full grid">
        <ShowFiles filesList={files}></ShowFiles>
      </div>
    </main>
  );
}
