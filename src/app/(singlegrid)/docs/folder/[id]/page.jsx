"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/widgets/TopCards";
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
    resetUrl,
  } = useContext(FilesContext);

  return (
    <main className="bg-gray-100 h-screen min-h-screen dark:bg-[#1A202C] overflow-hidden">
      {/* <div className="w-full h-full overflow-auto">
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
        <div className="flex w-full h-[70%] bg-gray-100 dark:bg-[#1A202C]">
          <ShowFiles
            filesList={filterChildren}
            updateFiles={updateChildrenFiles}
          ></ShowFiles>
        </div>
      </div>
      {showImage && (
        <div className="absolute left-0 top-0 flex w-full h-full">
          <Modal
            onClose={() => {
              setShowImage(false);
              resetUrl();
            }}
          >
            <div className="flex w-6/12 h-5/6 rounded-lg shadow-lg bg-white z-50">
              <img
                className="flex w-full h-full object-cover"
                loading="lazy"
                src={image}
                alt='Doc'
              />
            </div>
          </Modal>
        </div>
      )} */}
    </main>
  );
}
