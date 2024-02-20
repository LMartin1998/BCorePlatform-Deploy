import { useContext, useEffect, useRef, useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import DropdrownFiles from "./DropdownFiles";
import { FilesContext } from "@/app/contexts/FilesContext";

export default function ShowFiles({ filesList, updateFiles }) {
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

  // const renderFiles = () => {
  //   return filesList.map((file) => (
  //     <div
  //       className={`${
  //         design == 1
  //           ? "w-52 h-52 flex flex-col border rounded-lg justify-center"
  //           : "h-12 w-full flex border-t border-b"
  //       } items-center select-none border-gray-400
  //       ${
  //         open === file.id
  //           ? "bg-blue-200 hover:none"
  //           : "bg-white hover:bg-gray-100"
  //       }
  //       `}
  //       key={file.id}
  //       id={file.id}
  //       onClick={updateOpen}
  //       onDoubleClick={updateFiles}
  //     >
  //       {file.isFolder ? (
  //         <div
  //           className={`flex justify-center items-center m-1 ${
  //             design == 1 ? "h-32 w-2/5" : "h-6 w-1/6"
  //           }`}
  //         >
  //           <IoFolderOpenOutline className="w-full h-full"></IoFolderOpenOutline>
  //         </div>
  //       ) : (
  //         <div
  //           className={`flex justify-center items-center m-1 ${
  //             design == 1 ? "h-32 w-2/5" : "h-6 w-1/6"
  //           }`}
  //         >
  //           <img
  //             className={`${design == 1 ? "size-24" : "size-6"}`}
  //             src={file.imageLink}
  //             alt={file.fileName}
  //           />
  //         </div>
  //       )}
  //       <div className="flex justify-center w-2/3">
  //         <p>{file.fileName}</p>
  //       </div>
  //       <DropdrownFiles id={file.id}></DropdrownFiles>
  //     </div>
  //   ));
  // };
  const renderFiles = () => {
    return filesList.map((file) => (
      <div
        className="h-12 w-full flex items-center justify-center bg-white"
        key={file.id}
      >
        <div className="flex justify-center w-2/3">
          <p>{file.fileName}</p>
        </div>
        <DropdrownFiles id={file.id}></DropdrownFiles>
      </div>
    ));
  };

  return (
    <div className="flex w-full h-80 justify-center overflow-auto">
      <div className="grid w-5/6">{filesList && renderFiles()}</div>
    </div>
  );
}
