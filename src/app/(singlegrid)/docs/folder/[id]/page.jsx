"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import ShowFiles from "@/app/components/files/ShowFiles";
import SearchFiles from "@/app/components/files/SearchFiles";
import BreadcrumFiles from "@/app/components/files/BreadcrumFiles";
import DesignFiles from "@/app/components/files/DesignFiles";
import FilterFiles from "@/app/components/files/FilterFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddFiles from "@/app/components/files/AddFiles";

export default function Folder() {
  const {
    updateChildrenFiles,
    filterChildren,
    searchChildren,
    childrenType,
    updateChildrenType,
    image,
    showImage,
    setShowImage,
  } = useContext(FilesContext);

  return (
    <main className="bg-gray-100 h-screen max-h-screen">
      <div className="h-[3%]">
        <Header></Header>
      </div>
      <div className="h-[20%]">
        <TopCards></TopCards>
      </div>
      <div className="h-[6%] pt-1">
        <SearchFiles searchPage={searchChildren}></SearchFiles>
      </div>
      <div className="flex w-full h-[5%]">
        <BreadcrumFiles></BreadcrumFiles>
        <DesignFiles></DesignFiles>
      </div>
      <div className="flex w-1/3 m-1 justify-center items-center h-[5%]">
        <AddFiles></AddFiles>
        <FilterFiles
          type={childrenType}
          updateType={updateChildrenType}
        ></FilterFiles>
      </div>
      <ShowFiles
        filesList={filterChildren}
        updateFiles={updateChildrenFiles}
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
