import { useContext, useEffect, useRef, useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import DropdrownFiles from "./DropdownFiles";
import { FilesContext } from "@/app/contexts/FilesContext";

export default function ShowFiles({ filesList, updateFiles }) {
  const { design } = useContext(FilesContext);

  const [open, setOpen] = useState(-1);
  const updateOpen = (e) => {
    e.stopPropagation();
    setOpen(Number(e.currentTarget.id));
  };

  const divRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setOpen(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const FileItem = ({ file, design, updateOpen, updateFiles }) => {
    const observerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (target === observerRef.current) {
              setVisible(isIntersecting);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      if (observerRef.current) {
        observer.observe(observerRef.current);
      }

      return () => {
        if (observerRef.current) {
          observer.unobserve(observerRef.current);
        }
      };
    }, []);

    return design == 0 ? (
      <div
        className={`h-12 w-full flex flex-row items-center justify-center border rounded-lg ${
          open === file.id
            ? "bg-blue-200 hover:none"
            : "bg-white hover:bg-gray-100"
        } ${visible ? "opacity-100" : "opacity-0"}`}
        key={file.id}
        id={file.id}
        onClick={updateOpen}
        onDoubleClick={updateFiles}
        ref={observerRef}
      >
        {file.isFolder ? (
          <div className="flex size-6">
            <IoFolderOpenOutline className="w-full h-full" />
          </div>
        ) : (
          <div className="flex size-6">
            <img src={file.imageLink} alt={file.fileName} loading="lazy" />
          </div>
        )}
        <div className="flex justify-center w-2/3 overflow-hidden">
          <p className="truncate" title={file.fileName}>
            {file.fileName}
          </p>
        </div>
        <DropdrownFiles id={file.id} />
      </div>
    ) : (
      <div
        className={`h-36 w-36 flex flex-col items-center border rounded-lg ${
          open === file.id
            ? "bg-blue-200 hover:none"
            : "bg-white hover:bg-gray-100"
        } ${visible ? "opacity-100" : "opacity-0"}`}
        key={file.id}
        id={file.id}
        onClick={updateOpen}
        onDoubleClick={updateFiles}
        ref={observerRef}
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 relative left-2 flex justify-start items-center overflow-hidden">
            <p className="truncate" title={file.fileName}>
              {file.fileName}
            </p>
          </div>
          <div className="w-1/2 relative right-5 flex justify-end items-center">
            <DropdrownFiles id={file.id} />
          </div>
        </div>
        {file.isFolder ? (
          <div className="flex w-4/5 h-full items-center justify-center">
            <IoFolderOpenOutline className="w-full h-full" />
          </div>
        ) : (
          <div className="flex w-4/5 h-full items-center justify-center">
            <img src={file.imageLink} alt={file.fileName} loading="lazy" />
          </div>
        )}
      </div>
    );
  };

  const renderFiles = () => {
    return filesList.map((file) => (
      <FileItem
        key={file.id}
        file={file}
        design={design}
        updateOpen={updateOpen}
        updateFiles={updateFiles}
      />
    ));
  };

  return (
    <div className="flex flex-col w-full h-96 items-center">
      <div className="flex flex-col w-11/12 h-fit items-center border border-black rounded-lg overflow-auto">
        <div
          className={`${
            design == 0
              ? "flex flex-col"
              : "grid grid-cols-4 gap-2.5 justify-items-center"
          } w-full my-1`}
          ref={divRef}
        >
          {filesList && renderFiles()}
        </div>
      </div>
    </div>
  );
}
