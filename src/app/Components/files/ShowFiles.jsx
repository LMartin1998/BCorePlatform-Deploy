import { useContext, useEffect, useRef, useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import DropdrownFiles from "./DropdownFiles";
import BreadcrumFiles from "./BreadcrumFiles";
import SearchFiles from "./SearchFiles";
import DesignFiles from "./DesignFiles";
import { FilesContext } from "@/app/contexts/FilesContext";
import FilterFiles from "./FilterFiles";

export default function ShowFiles({
  filesList,
  updateFiles,
  searchPage,
  type,
  updateType,
}) {
  const { design } = useContext(FilesContext);

  const [open, setOpen] = useState(-1);
  const updateOpen = (e) => {
    e.stopPropagation();
    setOpen(Number(e.currentTarget.id));
  };

  const divRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setOpen(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderFiles = () => {
    return filesList.map((file) => (
      <div
        className={`${
          design == 1
            ? "w-52 h-52 flex flex-col border rounded-lg justify-center"
            : "h-12 w-full flex border-t border-b"
        } items-center select-none border-gray-400
        ${
          open === file.id
            ? "bg-blue-200 hover:none"
            : "bg-white hover:bg-gray-100"
        }
        `}
        key={file.id}
        id={file.id}
        onClick={updateOpen}
        onDoubleClick={updateFiles}
      >
        {file.isFolder ? (
          <div
            className={`flex justify-center items-center m-1 ${
              design == 1 ? "h-32 w-2/5" : "h-6 w-1/6"
            }`}
          >
            <IoFolderOpenOutline className="w-full h-full"></IoFolderOpenOutline>
          </div>
        ) : (
          <div
            className={`flex justify-center items-center m-1 ${
              design == 1 ? "h-32 w-2/5" : "h-6 w-1/6"
            }`}
          >
            <img
              className={`${design == 1 ? "size-24" : "size-6"}`}
              src={file.imageLink}
              alt={file.fileName}
            />
          </div>
        )}
        <div className="flex justify-center w-2/3">
          <p>{file.fileName}</p>
        </div>
        <DropdrownFiles id={file.id}></DropdrownFiles>
      </div>
    ));
  };

  return (
    <div className="h-full w-full flex flex-col">
      <SearchFiles searchPage={searchPage}></SearchFiles>
      <div className="flex w-full m-1 p-1">
        <BreadcrumFiles></BreadcrumFiles>
        <DesignFiles></DesignFiles>
      </div>
      <FilterFiles type={type} updateType={updateType}></FilterFiles>
      <div
        className={`w-full h-full m-1 p-1 ${
          design == 1 ? "grid grid-cols-4 gap-x-1 gap-y-7" : "flex flex-col"
        } items-center`}
        ref={divRef}
      >
        {filesList && renderFiles()}
      </div>
    </div>
  );
}
