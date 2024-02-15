"use client";
import { useContext, useEffect, useState } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ShowFiles from "@/app/components/Files/ShowFiles";
import { FilesContext } from "@/app/contexts/FilesContext";

export default function Docs() {
  const { id, setId, mainFiles } = useContext(FilesContext);
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="h-full w-full grid">
        <ShowFiles filesList={mainFiles}></ShowFiles>
      </div>
    </main>
  );
}
