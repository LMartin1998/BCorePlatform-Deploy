import { createContext, useState } from "react";
import { filesList } from "../data/filesdata";
import { useRouter } from "next/navigation";

const FilesContext = createContext();

function FilesProvider({ children }) {
  const router = useRouter();

  const [parentId, setParentId] = useState();
  const updateParentId = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setParentId(newId);
  };
  const [mainFiles, setMainFiles] = useState(
    filesList.filter((file) => file.parentId === null)
  );
  const [filterMain, setFilterMain] = useState(mainFiles);
  const searchMain = (e) => {
    e.stopPropagation();
    const filterValue = e.target.value;
    const filteredList = mainFiles.filter((file) =>
      file.fileName.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilterMain(filteredList);
  };

  const [childrenId, setChildrenId] = useState();
  const updateChildrenId = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setChildrenId(newId);
  };

  const [childrenFiles, setChildrenFiles] = useState([]);
  const [filterChildren, setFilterChildren] = useState(childrenFiles);
  const searchChildren = (e) => {
    e.stopPropagation();
    const filterValue = e.target.value;
    const filteredList = childrenFiles.filter((file) =>
      file.fileName.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilterChildren(filteredList);
  };

  const [folderPath, setFolderPath] = useState([
    { id: null, path: "/docs", filesList: filterMain, name: "Docs" },
  ]);

  const updateMainFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setParentId(newId);
    setChildrenFiles(mainFiles[newId].children || []);
    setFilterChildren(mainFiles[newId].children || []);
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
    setFilterChildren(childrenFiles[newId].children || []);
    folderPath.push({
      id: newId,
      path: `/docs/folder/${newId}`,
      filesList: childrenFiles[newId].children || [],
      name: `${childrenFiles[newId].fileName}`,
    });
    router.push(`/docs/folder/${childrenId}`);
  };

  const updateChildrenFilesFromBreadcrum = (e) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    if (id > 0) {
      const list = folderPath[id].filesList || [];
      setChildrenFiles(list);
      setFilterChildren(list);
    } else {
      setChildrenFiles([]);
      setChildrenFiles([]);
      setFilterMain(mainFiles);
    }
    folderPath.splice(id + 1);
  };

  const [design, setDesign] = useState(0);
  const updateDesign = (e) => {
    e.stopPropagation();
    // console.log(e.currentTarget);
    // console.log(e.target.id);
    setDesign(e.currentTarget.id);
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
        updateChildrenFilesFromBreadcrum,
        filterMain,
        searchMain,
        filterChildren,
        searchChildren,
        design,
        updateDesign,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
}

export { FilesContext, FilesProvider };
