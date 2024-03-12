import { createContext, useEffect, useState } from "react";
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
  const [mainType, setMainType] = useState(0);
  const updateMainType = (e) => {
    e.stopPropagation();
    const extensions = ["pdf", "png", "jpeg", "jpg"];
    setMainType(e.currentTarget.id);
    if (e.currentTarget.id == 0) {
      setFilterMain(mainFiles);
    } else if (e.currentTarget.id == 1) {
      const filteredList = mainFiles.filter((file) =>
        extensions.some((ex) =>
          file.fileName.toLowerCase().endsWith(ex.toLowerCase())
        )
      );
      setFilterMain(filteredList);
    } else if (e.currentTarget.id == 2) {
      const filteredList = mainFiles.filter(
        (file) =>
          !extensions.some((ex) =>
            file.fileName.toLowerCase().endsWith(ex.toLowerCase())
          )
      );
      setFilterMain(filteredList);
    }
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
  const [childrenType, setChildrenType] = useState(0);
  const updateChildrenType = (e) => {
    e.stopPropagation();
    const extensions = ["pdf", "png", "jpeg", "jpg"];
    setChildrenType(e.currentTarget.id);
    if (e.currentTarget.id == 0) {
      setFilterChildren(childrenFiles);
    } else if (e.currentTarget.id == 1) {
      const filteredList = childrenFiles.filter((file) =>
        extensions.some((ex) =>
          file.fileName.toLowerCase().endsWith(ex.toLowerCase())
        )
      );
      setFilterChildren(filteredList);
    } else if (e.currentTarget.id == 2) {
      const filteredList = childrenFiles.filter(
        (file) =>
          !extensions.some((ex) =>
            file.fileName.toLowerCase().endsWith(ex.toLowerCase())
          )
      );
      setFilterChildren(filteredList);
    }
  };

  const [search, setSearch] = useState("");
  const updateSearch = (e) => {
    e.stopPropagation();
    setSearch(e.target.value);
  };
  const [folderPath, setFolderPath] = useState([
    { id: null, path: "/docs", filesList: filterMain, name: "Docs" },
  ]);
  const resetFolderPath = () => {
    setFolderPath([
      { id: null, path: "/docs", filesList: filterMain, name: "Docs" },
    ]);
  };

  const updateMainFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setParentId(newId);
    setChildrenFiles(mainFiles[newId].children || []);
    setFilterChildren(mainFiles[newId].children || []);
    setSearch("");
    // folderPath.push({
    //   id: newId,
    //   path: `/docs/folder/${newId}`,
    //   filesList: mainFiles[newId].children || [],
    //   name: `${mainFiles[newId].fileName}`,
    // });
    setFolderPath([
      ...folderPath,
      {
        id: newId,
        path: `/docs/folder/${newId}`,
        filesList: mainFiles[newId].children || [],
        name: `${mainFiles[newId].fileName}`,
      },
    ]);
    router.push(`/docs/folder/${childrenId}`);
  };

  const updateChildrenFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setChildrenId(newId);
    setChildrenFiles(childrenFiles[newId].children || []);
    setFilterChildren(childrenFiles[newId].children || []);
    setChildrenType(0);
    setFolderPath([
      ...folderPath,
      {
        id: newId,
        path: `/docs/folder/${newId}`,
        filesList: childrenFiles[newId].children || [],
        name: `${childrenFiles[newId].fileName}`,
      },
    ]);
    setSearch("");
    router.push(`/docs/folder/${childrenId}`);
  };

  const updateChildrenFilesFromBreadcrum = (e) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    setSearch("");
    if (id > 0) {
      const list = folderPath[id].filesList || [];
      setChildrenFiles(list);
      setFilterChildren(list);
      setChildrenType(0);
    } else {
      setChildrenFiles([]);
      setChildrenFiles([]);
      setFilterMain(mainFiles);
    }
    const newPath = folderPath.slice(0, id + 1);
    setFolderPath(newPath);
  };
  const [design, setDesign] = useState(0);
  const updateDesign = (e) => {
    e.stopPropagation();
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
        search,
        setSearch,
        updateSearch,
        folderPath,
        setFolderPath,
        resetFolderPath,
        updateChildrenFilesFromBreadcrum,
        filterMain,
        searchMain,
        filterChildren,
        searchChildren,
        design,
        updateDesign,
        mainType,
        updateMainType,
        childrenType,
        updateChildrenType,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
}

export { FilesContext, FilesProvider };
