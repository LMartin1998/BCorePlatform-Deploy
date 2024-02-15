import { useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import DropdrownFiles from "./DropdownFiles";

export default function SidebarFiles({ filesList, updateRootFiles }) {
  const [open, setOpen] = useState(0);
  const updateOpen = (e) => {
    e.stopPropagation();
    setOpen(Number(e.currentTarget.id));
  };

  const renderSidebarFiles = () => {
    return filesList.map((file) => (
      <div
        className={`flex items-center select-none border rounded-lg border-gray-400
        ${
          open === file.id
            ? "bg-blue-200 hover:none"
            : "bg-white hover:bg-gray-100"
        }
        `}
        key={file.id}
        id={file.id}
        onDoubleClick={(e) => {
          updateRootFiles(e);
          updateOpen(e);
        }}
      >
        {file.isFolder ? (
          <div className="flex justify-center w-1/6">
            <IoFolderOpenOutline className="w-full h-full"></IoFolderOpenOutline>
          </div>
        ) : (
          <div className="flex justify-center w-1/6">
            <img
              className="w-full h-full"
              src={file.imageLink}
              alt={file.fileName}
            />
          </div>
        )}
        <div className="flex justify-center w-5/6">
          <p>{file.fileName}</p>
        </div>
        <DropdrownFiles id={file.id}></DropdrownFiles>
      </div>
    ));
  };

  return (
    <div className="w-1/3 h-full m-1 p-1 grid items-center border border-black rounded-lg bg-amber-50">
      {filesList && renderSidebarFiles()}
    </div>
  );
}
