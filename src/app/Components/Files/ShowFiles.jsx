import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";

export default function ShowFiles({ parentId, filesList }) {
  const router = useRouter();

  const [id, setId] = useState(parentId);
  const [files, setFiles] = useState(filesList);
  const changePage = (e) => {
    e.stopPropagation();
    router.push(`/docs/folder/${Number(e.currentTarget.id)}`, { data: files });
  };

  const renderFiles = () => {
    return files.map((file) => (
      <div
        className="flex items-center p-2"
        key={file.id}
        id={file.id}
        onClick={changePage}
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

  return files && renderFiles();
}
