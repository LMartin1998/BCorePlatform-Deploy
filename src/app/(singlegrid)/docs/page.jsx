"use client";
import { useContext, useEffect } from "react";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { FilesContext } from "@/app/contexts/FilesContext";
import ShowFiles from "@/app/components/files/ShowFiles";
import SearchFiles from "@/app/components/files/SearchFiles";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import DesignFiles from "@/app/components/files/DesignFiles";
import FilterFiles from "@/app/components/files/FilterFiles";
import AddFiles from "@/app/components/files/AddFiles";
import Modal from "@/app/Components/Modal";

export default function Docs() {
  const {
    resetFolderPath,
    updateMainFiles,
    filterMain,
    searchMain,
    mainType,
    updateMainType,
    image,
    showImage,
    setShowImage,
  } = useContext(FilesContext);

  useEffect(() => {
    resetFolderPath();
  }, []);

  return (
    <main className="bg-gray-100 h-screen max-h-screen">
      <div className="h-[3%]">
        <Header></Header>
      </div>
      <div className="h-[20%]">
        <TopCards></TopCards>
      </div>
      <div className="h-[6%] pt-1">
        <SearchFiles searchPage={searchMain}></SearchFiles>
      </div>
      <div className="flex w-full h-[5%]">
        <BreadcrumFiles></BreadcrumFiles>
        <DesignFiles></DesignFiles>
      </div>
      <div className="flex w-1/3 m-1 justify-center items-center h-[5%]">
        <AddFiles></AddFiles>
        <FilterFiles type={mainType} updateType={updateMainType}></FilterFiles>
      </div>
      <ShowFiles
        filesList={filterMain}
        updateFiles={updateMainFiles}
      ></ShowFiles>
      {showImage && (
        <Modal
          onClose={() => {
            setShowImage(false);
          }}
          children={
            <img
              className="flex w-full h-full"
              loading="lazy"
              src={image}
            ></img>
          }
        ></Modal>
      )}
    </main>
  );
}
