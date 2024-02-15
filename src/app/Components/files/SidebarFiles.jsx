import { useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoArrowForwardOutline, IoArrowDownOutline } from "react-icons/io5";

export default function SidebarFiles({ filesList, updateRootFiles }) {
  const [open, setOpen] = useState(0);
  const updateOpen = (e) => {
    e.stopPropagation();
    setOpen(Number(e.currentTarget.id));
  };

  const renderSidebarFiles = () => {
    return filesList.map((file) => (
      <div
        className="flex items-center select-none"
        key={file.id}
        id={file.id}
        onDoubleClick={(e) => {
          updateRootFiles(e);
          updateOpen(e);
        }}
      >
        {open === file.id ? (
          <IoArrowDownOutline size={20}></IoArrowDownOutline>
        ) : (
          <IoArrowForwardOutline size={20}></IoArrowForwardOutline>
        )}
        {file.isFolder ? (
          <>
            <IoFolderOpenOutline
              size={40}
              className="m-1"
            ></IoFolderOpenOutline>
          </>
        ) : (
          <img
            className="size-10 m-1 "
            src={file.imageLink}
            alt={file.fileName}
          />
        )}
        <p>{file.fileName}</p>
      </div>
    ));
  };

  return (
    <div className="w-1/5 h-full grid items-center ml-2 mt-1">
      {filesList && renderSidebarFiles()}
    </div>
  );
}
