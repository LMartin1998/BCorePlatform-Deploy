import { createContext, useState } from "react";
import { filesList } from "../data/filesdata";

const FilesContext = createContext();

function FilesProvider({ children }) {
  const [parentId, setParentId] = useState(0);
  const updateParentId = (e) => {
    e.stopPropagation();
    const newId = Number(e.target.id);
    setParentId(newId);
  };
  const [mainFiles, setMainFiles] = useState(
    filesList.filter((file) => file.parentId === null)
  );

  const [files, setFiles] = useState(mainFiles);
  const [childrenFiles, setChildrenFiles] = useState(
    files[parentId].children || []
  );

  const updateMainFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.target.id);
    setParentId(newId);
    setChildrenFiles(mainFiles[newId].children || []);
  };

  const updateChildrenFiles = (e) => {
    e.stopPropagation();
    setChildrenFiles;
  };

  return (
    <FilesContext.Provider
      value={{
        parentId,
        setParentId,
        updateParentId,
        mainFiles,
        files,
        setFiles,
        childrenFiles,
        setChildrenFiles,
        updateMainFiles,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
}

export { FilesContext, FilesProvider };
