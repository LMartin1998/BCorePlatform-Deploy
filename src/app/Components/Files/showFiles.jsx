import { useEffect, useState } from "react";
import { IoFolderOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import FilesDropdown from "./FilesDropdown";

export default function ShowFiles({ parentId, filesList }) {
  const [id, setId] = useState(parentId);
  const [files, setFiles] = useState([]);
  const doubleClickItem = (e) => {
    e.stopPropagation();
    const selection = Number(e.currentTarget.id);
    setId(selection);
    const childrenFiles = filesList.find((file) => file.id === selection) || [];
    setFiles(childrenFiles.children);
  };

  useEffect(() => {
    console.log(id);
    console.log(files);
  }, [id, files]);

  const renderFiles = () => {
    return filesList.map((file) =>
      file.isFolder ? (
        <div
          className="flex justity-center items-center select-none"
          key={file.id}
          id={file.id}
          onDoubleClick={doubleClickItem}
        >
          <IoFolderOutline size={40}></IoFolderOutline>
          <div className="m-1 flex">
            <p>{file.fileName}</p>
            <FilesDropdown></FilesDropdown>
          </div>
        </div>
      ) : (
        <div
          className="flex justity-center items-center select-none"
          key={file.id}
          id={file.id}
          onDoubleClick={doubleClickItem}
        >
          <img className="size-10" src={file.imageLink}></img>
          <div className="m-1 flex">
            <p>{file.fileName}</p>
            <FilesDropdown></FilesDropdown>
          </div>
        </div>
      )
    );
  };

  return filesList && renderFiles();
}
