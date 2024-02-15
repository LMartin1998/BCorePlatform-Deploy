"use client";
import { FilesContext } from "@/app/contexts/FilesContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";

export default function ShowFiles({ filesList }) {
  const router = useRouter();
  const { id, files, updateFiles } = useContext(FilesContext);

  const renderFiles = () => {
    return filesList.map((file) => (
      <div
        key={file.id}
        id={file.id}
        onClick={(e) => {
          e.stopPropagation();
          updateFiles(e);
          if (files) {
            router.push(`/docs/folder/${id}`);
          }
        }}
      >
        {file.isFolder ? (
          <>
            <IoFolderOpenOutline className="size-10"></IoFolderOpenOutline>
            <p>{file.fileName}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    ));
  };

  return renderFiles();
}
