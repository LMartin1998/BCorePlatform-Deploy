import { createContext, useEffect, useState } from "react";
import { filesList } from "../data/filesdata";
import { useRouter } from "next/navigation";

const FilesContext = createContext();

function FilesProvider({ children }) {
  const router = useRouter();

  const [extensions, setExtensions] = useState(["pdf", "png", "jpeg", "jpg"]);

  const [imageExtensions, setImageExtensions] = useState([
    "jpg",
    "png",
    "jpeg",
    "tiff",
  ]);

  const [docExtensions, setDocExtensions] = useState(["pdf", "docx"]);

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

  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState(false);

  const updateMainFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setParentId(newId);
    const mainFile = mainFiles[newId];
    if (mainFile && mainFile.children) {
      setChildrenFiles(mainFiles[newId].children || []);
      setFilterChildren(mainFiles[newId].children || []);
      setSearch("");
      setImage("");
      setShowImage(false);
      setMainType(0);
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
    } else {
      if (
        imageExtensions.some((ex) =>
          mainFile.fileName.toLowerCase().endsWith(ex.toLowerCase())
        )
      ) {
        setShowImage(true);
        setImage(mainFile.imageLink);
      }
    }
  };

  const updateChildrenFiles = (e) => {
    e.stopPropagation();
    const newId = Number(e.currentTarget.id);
    setChildrenId(newId);
    const childrenFile = childrenFiles[newId];
    if (childrenFile && childrenFile.children) {
      setChildrenFiles(childrenFiles[newId].children || []);
      setFilterChildren(childrenFiles[newId].children || []);
      setChildrenType(0);
      setSearch("");
      setImage("");
      setShowImage(false);
      setFolderPath([
        ...folderPath,
        {
          id: newId,
          path: `/docs/folder/${newId}`,
          filesList: childrenFiles[newId].children || [],
          name: `${childrenFiles[newId].fileName}`,
        },
      ]);
      router.push(`/docs/folder/${childrenId}`);
    } else {
      if (
        imageExtensions.some((ex) =>
          childrenFile.fileName.toLowerCase().endsWith(ex.toLowerCase())
        )
      ) {
        setShowImage(true);
        setImage(childrenFile.imageLink);
      }
    }
  };

  const updateChildrenFilesFromBreadcrum = (e) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    setSearch("");
    setShowImage(false);
    setImage("");
    if (id > 0) {
      const list = folderPath[id].filesList || [];
      setChildrenFiles(list);
      setFilterChildren(list);
      setChildrenType(0);
      setMainType(0);
    } else {
      setChildrenFiles([]);
      setFilterMain(mainFiles);
      setChildrenType(0);
      setMainType(0);
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
        image,
        setImage,
        showImage,
        setShowImage,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
}

export { FilesContext, FilesProvider };
