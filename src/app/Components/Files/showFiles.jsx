import { useEffect, useState } from "react";
import { IoFolderOutline } from "react-icons/io5";

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
          className="flex justity-center items-center"
          key={file.id}
          id={file.id}
          onDoubleClick={doubleClickItem}
        >
          <IoFolderOutline size={40}></IoFolderOutline>
          <p>{file.fileName}</p>
        </div>
      ) : (
        <div
          className="flex justity-center items-center"
          key={file.id}
          id={file.id}
          onDoubleClick={doubleClickItem}
        >
          <img className="size-10" src={file.imageLink}></img>
          <p>{file.fileName}</p>
        </div>
      )
    );
  };

  return filesList && renderFiles();
}
