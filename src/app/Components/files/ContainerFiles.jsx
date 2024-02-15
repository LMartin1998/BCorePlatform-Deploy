import { IoFolderOpenOutline } from "react-icons/io5";

export default function ContainerFiles({ filesList, updateChildrenFiles }) {
  const renderChildrenFiles = () => {
    return filesList.map((file) => (
      <div
        className="flex items-center select-none"
        key={file.id}
        id={file.id}
        onDoubleClick={updateChildrenFiles}
      >
        <input type="checkbox"></input>
        {file.isFolder ? (
          <>
            <IoFolderOpenOutline className="size-10 m-1"></IoFolderOpenOutline>
          </>
        ) : (
          <img
            className="size-10 m-1"
            src={file.imageLink}
            alt={file.fileName}
          />
        )}
        <p>{file.fileName}</p>
      </div>
    ));
  };

  return (
    <div className="w-full h-full grid items-center ml-2 mt-1 mr-2 border rounded-lg border-gray-500 bg-white">
      {filesList && renderChildrenFiles()}{" "}
    </div>
  );
}
