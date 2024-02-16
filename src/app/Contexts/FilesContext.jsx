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

  const [childrenId, setChildrenId] = useState(0);
  const updateChildrenId = (e) => {
    e.stopPropagation();
    const newId = Number(e.target.id);
    setChildrenId(newId);
  };

  const [childrenFiles, setChildrenFiles] = useState(
    mainFiles[parentId].children || []
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
        childrenId,
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
