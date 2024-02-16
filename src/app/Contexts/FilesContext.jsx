import { createContext, useEffect, useState } from "react";
import { filesList } from "../data/filesdata";
import { useRouter } from "next/navigation";

const FilesContext = createContext();

function FilesProvider({ children }) {
  const router = useRouter();

  const [parentId, setParentId] = useState(0);
  const updateParentId = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setParentId(newId);
  };
  const [mainFiles, setMainFiles] = useState(
    filesList.filter((file) => file.parentId === null)
  );

  const [childrenId, setChildrenId] = useState(0);
  const updateChildrenId = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setChildrenId(newId);
  };

  const [childrenFiles, setChildrenFiles] = useState(
    mainFiles[parentId].children || []
  );

  const [folderPath, setFolderPath] = useState([
    { id: null, path: "/docs", filesList: mainFiles, name: "Docs" },
  ]);

  const updateMainFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setParentId(newId);
    setChildrenFiles(mainFiles[newId].children || []);
    folderPath.push({
      id: newId,
      path: `/docs/folder/${newId}`,
      filesList: mainFiles[newId].children || [],
      name: `${mainFiles[newId].fileName}`,
    });
    console.log(folderPath);
    router.push(`/docs/folder/${childrenId}`);
  };

  const updateChildrenFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setChildrenId(newId);
    setChildrenFiles(childrenFiles[newId].children || []);
    folderPath.push({
      id: newId,
      path: `/docs/folder/${newId}`,
      filesList: childrenFiles[newId].children || [],
      name: `${childrenFiles[newId].fileName}`,
    });
    router.push(`/docs/folder/${childrenId}`);
  };

  return (
    <FilesContext.Provider
      value={{
        parentId,
        setParentId,
        updateParentId,
        mainFiles,
        childrenId,
        setChildrenId,
        childrenFiles,
        setChildrenFiles,
        updateMainFiles,
        updateChildrenFiles,
        folderPath,
        setFolderPath,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
}

export { FilesContext, FilesProvider };
