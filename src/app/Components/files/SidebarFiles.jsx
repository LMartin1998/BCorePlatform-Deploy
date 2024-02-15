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
        className={`flex p-1 items-center select-none border rounded-lg border-gray-400 ${
          open === file.id ? "bg-gray-200" : "bg-white"
        }`}
        key={file.id}
        id={file.id}
        onDoubleClick={(e) => {
          updateRootFiles(e);
          updateOpen(e);
        }}
      >
        {file.isFolder ? (
          <>
            <IoFolderOpenOutline className="size-10"></IoFolderOpenOutline>
          </>
        ) : (
          <img className="size-10" src={file.imageLink} alt={file.fileName} />
        )}
        <p>{file.fileName}</p>
      </div>
    ));
  };

  return (
    <div className="w-1/3 h-full m-1 grid items-center">
      {filesList && renderSidebarFiles()}
    </div>
  );
}
