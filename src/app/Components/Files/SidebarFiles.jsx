import { useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoArrowForwardOutline, IoArrowDownOutline } from "react-icons/io5";

export default function SidebarFiles({ rootId, filesList, updateRootFiles }) {
  const [open, setOpen] = useState(Number(rootId));
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

  return filesList && renderSidebarFiles();
}
