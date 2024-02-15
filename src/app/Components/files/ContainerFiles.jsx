import { IoFolderOpenOutline } from "react-icons/io5";

export default function ContainerFiles({ filesList, updateChildrenFiles }) {
  const renderChildrenFiles = () => {
    return filesList.map((file) => (
      <div
        className="flex p-1 items-center select-none border rounded-lg border-gray-400 bg-white"
        key={file.id}
        id={file.id}
        onDoubleClick={updateChildrenFiles}
      >
        <input type="checkbox"></input>
        {file.isFolder ? (
          <>
            <IoFolderOpenOutline className="size-10"></IoFolderOpenOutline>
          </>
        ) : (
          <img className="size-10" src={file.imageLink} alt={file.fileName} />
        )}
        <p>{file.fileName}</p>
      </div>
    ));
  };

  return (
    <div className="w-full h-full m-1 grid items-center">
      {filesList && renderChildrenFiles()}
    </div>
  );
}
