import { useState } from "react";
import { IoFolderOutline } from "react-icons/io5";

export default function ShowFiles({ parentId, filesList }) {
  const [id, setId] = useState(parentId);
  const [files, setFiles] = useState(filesList);

  const renderFiles = () => {
    return files.map((file) =>
      file.isFolder ? (
        <div className="flex justity-center items-center" key={file.id}>
          <IoFolderOutline size={40}></IoFolderOutline>
          <p>{file.fileName}</p>
        </div>
      ) : (
        <div className="flex justity-center items-center" key={file.id}>
          <img className="size-10" src={file.imageLink}></img>
          <p>{file.fileName}</p>
        </div>
      )
    );
  };

  return files && renderFiles();
}
