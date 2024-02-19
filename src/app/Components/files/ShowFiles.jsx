import { useEffect, useRef, useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import DropdrownFiles from "./DropdownFiles";

export default function ShowFiles({ filesList, updateFiles }) {
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
        className={`h-12 w-full flex items-center select-none b0rder border-t border-b border-gray-400
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
          <div className="flex justify-center items-center m-1 w-1/6 h-6">
            <IoFolderOpenOutline className="w-full h-full"></IoFolderOpenOutline>
          </div>
        ) : (
          <div className="flex justify-center items-center m-1 w-1/6 h-6">
            <img className="size-6" src={file.imageLink} alt={file.fileName} />
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
    <div className="w-full h-full m-1 p-1 grid items-center" ref={divRef}>
      {filesList && renderFiles()}
    </div>
  );
}
