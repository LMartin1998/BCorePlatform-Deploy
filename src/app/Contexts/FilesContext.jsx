import { createContext, useContext, useEffect, useState } from "react";
import { filesList } from "../data/filesdata";

const FilesContext = createContext();

function FilesProvider({ children }) {
  const [id, setId] = useState(0);
  const [mainFiles, setMainFiles] = useState(
    filesList.filter((file) => file.parentId === null)
  );
  const [files, setFiles] = useState(mainFiles || []);
  const updateFiles = (e) => {
    e.stopPropagation();
    console.log("click");
    const newId = Number(e.currentTarget.id);
    setId(newId);
    setFiles(files[newId].children || []);
  };

  useEffect(() => {
    console.log(`id: ${id}`);
    console.log(files);
  }, [id, files]);

  return (
    <FilesContext.Provider
      value={{
        id,
        setId,
        mainFiles,
        files,
        updateFiles,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
}

export { FilesContext, FilesProvider };
