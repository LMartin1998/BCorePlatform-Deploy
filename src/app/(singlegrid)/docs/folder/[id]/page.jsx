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
import Modal from "@/app/Components/Modal";

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
    <main className="bg-gray-100 h-screen min-h-screen">
      <Header></Header>
      <TopCards></TopCards>
      <div className="flex items-center w-full">
        <SearchFiles searchPage={searchChildren}></SearchFiles>
      </div>
      <div className="flex w-full justify-between items-center">
        <BreadcrumFiles></BreadcrumFiles>
        <DesignFiles></DesignFiles>
      </div>
      <div className="flex w-full lg:w-1/3 m-1 justify-center items-center">
        <AddFiles></AddFiles>
        <FilterFiles
          type={childrenType}
          updateType={updateChildrenType}
        ></FilterFiles>
      </div>
      <div className="flex w-full h-96 sm:h-[50%] 2xl:h-[50%]">
        <ShowFiles
          filesList={filterChildren}
          updateFiles={updateChildrenFiles}
        ></ShowFiles>
      </div>
      {showImage && (
        <Modal
          onClose={() => {
            setShowImage(false);
          }}
          children={
            <div className="flex w-6/12 h-5/6 rounded-lg shadow-lg bg-white z-50">
              <img
                className="flex w-full h-full object-cover"
                loading="lazy"
                src={image}
              ></img>
            </div>
          }
        ></Modal>
      )}
    </main>
  );
}
